import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={close}>BrightWorks</Link>
      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"} onClick={close}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
