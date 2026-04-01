export default function Section({ className = "", children }) {
  return <section className={`sec ${className}`}>{children}</section>;
}