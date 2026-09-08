import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="topbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          ETHAN EGLIP
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="icon">☰</span>
          <span className="label">MENU</span>
        </button>
      </div>

      <nav className={`overlay ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <button className="overlay-close" onClick={closeMenu}>
          <span className="icon">✕</span>
          <span className="label">CLOSE</span>
        </button>

        <div className="nav-list">
          <div className="nav-item">
            <span className="eyebrow">About</span>
            <Link to="/bio" onClick={closeMenu}>Bio</Link>
          </div>
          <div className="nav-item">
            <span className="eyebrow">Catalog</span>
            <Link to="/music" onClick={closeMenu}>Music</Link>
          </div>
        </div>
      </nav>
    </>
  );
}