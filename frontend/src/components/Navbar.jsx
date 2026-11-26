import { Link, NavLink } from 'react-router'

export default function Navbar({ nom }) {
  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Navigation principale">
        <Link className="brand" to="/">{nom}</Link>
        <ul className="nav-links">
          <li><NavLink end to="/">Accueil</NavLink></li>
          <li><NavLink to="/projets">Projets</NavLink></li>
          <li><NavLink to="/competences">Compétences</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
