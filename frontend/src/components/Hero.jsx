export default function Hero({ profil }) {
  return (
    <section id="accueil" className="hero">
      <p className="eyebrow">{profil.disponibilite}</p>
      <h1>{profil.nom}</h1>
      <h2>{profil.titre}</h2>
      <p>{profil.accroche}</p>
      <a className="btn" href="#projets">Découvrir mes projets</a>
    </section>
  )
}
