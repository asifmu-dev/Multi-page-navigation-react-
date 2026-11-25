import { Link } from "react-router-dom";

export default function PillButton({ to, children }) {
  return (
    <Link to={to} className="pill-btn">
      {children}
      <div className="pill-icon">→</div>
    </Link>
  );
}
