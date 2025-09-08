import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
     
      <header className={`header ${menuOpen ? "menu-open" : ""}`}>
        {!menuOpen && (
          <>
            <img src="soaron-logo.png" alt="Soaron Logo" className="logo-img" />
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              Menu <span className="menu-icon">☰</span>
            </button>
          </>
        )}
      </header>

    
      {menuOpen && (
        <div className="menu-overlay">
          <div className="menu-logo">
            <img src="/soaron-logob.png" alt="Soaron Logo" />
          </div>

          <nav className="menu-links">
            <a href="/">Spray</a>
            <a href="/roller">Roller</a>
            <a href="/cleanhigh">CleanHigh</a>
            <a href="/story">Story</a>
            <a href="/partner">Partner with Us</a>
          </nav>

          <button
            className="menu-close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
           <img src="/soaron-logob.png" alt="" style={{ display: "none" }} />
        </div>
      )}
    </>
  );
}
