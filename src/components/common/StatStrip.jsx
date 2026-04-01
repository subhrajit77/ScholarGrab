import stats from "../../data/stats.js";

export default function StatStrip() {
  return (
    <section className="stat-strip">
      {stats.map((s) => (
        <div key={s.label} className="ss-item">
          <span className="ss-n">{s.value}</span>
          <span className="ss-l">{s.label}</span>
        </div>
      ))}
    </section>
  );
}