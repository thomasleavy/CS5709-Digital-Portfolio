import { useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Thomas Leavy
        </NavLink>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/education" onClick={closeMenu}>Education</NavLink>
          <NavLink to="/professional-knowledge" onClick={closeMenu}>
            Professional Knowledge
          </NavLink>
          <NavLink to="/pictures" onClick={closeMenu}>Pictures</NavLink>
          <NavLink to="/videos" onClick={closeMenu}>Videos</NavLink>
          <NavLink to="/blog" onClick={closeMenu}>Blog</NavLink>
          <NavLink to="/messaging" onClick={closeMenu}>Messaging</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar