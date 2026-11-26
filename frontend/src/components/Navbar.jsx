import { Link, NavLink } from 'react-router'
import BoutonTheme from './BoutonTheme.jsx'

export default function Navbar({ nom, theme, basculer }) {
  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Navigation principale">
        <Link className="brand" to="/">{nom}</Link>
        <ul className="nav-links">
          <li><NavLink end to="/">Accueil</NavLink></li>
          <li><NavLink to="/projets">Projets</NavLink></li>
          <li><NavLink to="/competences">Compétences</NavLink></li>
          <li><NavLink to="/a-propos">À propos</NavLink></li>
        </ul>
        <BoutonTheme theme={theme} basculer={basculer} />
      </nav>
    </header>
  )
}
