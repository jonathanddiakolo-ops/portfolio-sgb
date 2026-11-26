import { Link } from 'react-router'

export default function Hero({ profil }) {
  return (
    <section id="accueil" className="hero">
      <p className="eyebrow">{profil.disponibilite}</p>
      <h1>{profil.nom}</h1>
      <h2>{profil.titre}</h2>
      <p>{profil.accroche}</p>
      <Link className="btn" to="/projets">Découvrir mes projets</Link>
    </section>
  )
}
