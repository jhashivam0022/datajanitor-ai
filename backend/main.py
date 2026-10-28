import io

import pandas as pd
from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="DataJanitor AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite dev server
    allow_methods=["*"],
    allow_headers=["*"],
)


def load_dataframe(filename: str, content: bytes) -> pd.DataFrame:
    name = filename.lower()
    if name.endswith(".csv"):
        return pd.read_csv(io.BytesIO(content))
    if name.endswith((".xlsx", ".xls")):
        return pd.read_excel(io.BytesIO(content))
    raise HTTPException(status_code=400, detail="Only CSV and Excel files are supported.")


def profile_dataframe(df: pd.DataFrame) -> dict:
    columns = []
    for col in df.columns:
        series = df[col]
        info = {
            "name": str(col),
            "dtype": str(series.dtype),
            "missing": int(series.isna().sum()),
            "unique": int(series.nunique(dropna=True)),
        }
        if pd.api.types.is_numeric_dtype(series):
            info.update(
                {
                    "mean": None if series.dropna().empty else float(series.mean()),
                    "std": None if series.dropna().empty else float(series.std()),
                    "min": None if series.dropna().empty else float(series.min()),
                    "max": None if series.dropna().empty else float(series.max()),
                }
            )
        columns.append(info)

    return {
        "rows": int(df.shape[0]),
        "columns_count": int(df.shape[1]),
        "duplicate_rows": int(df.duplicated().sum()),
        "total_missing": int(df.isna().sum().sum()),
        "columns": columns,
        "preview": df.head(5).astype(object).where(df.head(5).notna(), None).to_dict("records"),
    }


@app.get("/")
def health():
    return {"status": "ok", "app": "DataJanitor AI"}


@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    content = await file.read()
    try:
        df = load_dataframe(file.filename or "", content)
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Could not read file: {exc}")
    return profile_dataframe(df)
