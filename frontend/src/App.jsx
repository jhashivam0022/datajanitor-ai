import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function format(value) {
  if (value === null || value === undefined) return "—";
  if (typeof value === "number") return Number.isInteger(value) ? value : value.toFixed(2);
  return String(value);
}

export default function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(event) {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true);
    setError("");
    setProfile(null);

    const body = new FormData();
    body.append("file", file);

    try {
      const res = await fetch(`${API_URL}/upload`, { method: "POST", body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Upload failed");
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <h1>🦥 DataJanitor AI</h1>
      <p className="subtitle">Upload a CSV or Excel file to profile your data.</p>

      <input type="file" accept=".csv,.xlsx,.xls" onChange={handleFile} />

      {loading && <p>Analyzing…</p>}
      {error && <p className="error">{error}</p>}

      {profile && (
        <>
          <section className="stats">
            <div className="card"><span>{profile.rows}</span>Rows</div>
            <div className="card"><span>{profile.columns_count}</span>Columns</div>
            <div className="card"><span>{profile.total_missing}</span>Missing values</div>
            <div className="card"><span>{profile.duplicate_rows}</span>Duplicate rows</div>
          </section>

          <h2>Columns</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th><th>Type</th><th>Missing</th><th>Unique</th>
                <th>Mean</th><th>Std</th><th>Min</th><th>Max</th>
              </tr>
            </thead>
            <tbody>
              {profile.columns.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td><td>{c.dtype}</td><td>{c.missing}</td><td>{c.unique}</td>
                  <td>{format(c.mean)}</td><td>{format(c.std)}</td>
                  <td>{format(c.min)}</td><td>{format(c.max)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Preview</h2>
          <div className="scroll">
            <table>
              <thead>
                <tr>{profile.columns.map((c) => <th key={c.name}>{c.name}</th>)}</tr>
              </thead>
              <tbody>
                {profile.preview.map((row, i) => (
                  <tr key={i}>
                    {profile.columns.map((c) => <td key={c.name}>{format(row[c.name])}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}
