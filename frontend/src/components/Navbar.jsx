export default function Navbar({ nom }) {
  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Navigation principale">
        <a className="brand" href="#accueil">{nom}</a>
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
        </ul>
      </nav>
    </header>
  )
}
