import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import Timeline from '../components/Timeline.jsx'

export default function APropos({ profil }) {
  const { data: parcours, loading, error } = useApi('/api/parcours')
  const initiales = profil.nom.split(' ').filter(Boolean).map((mot) => mot[0]).join('')

  return (
    <section className="section page">
      <h1 className="section-title">À propos</h1>
      <article className="card apropos">
        <div className="avatar" aria-hidden="true">{initiales}</div>
        <h2>{profil.nom}</h2>
        <p>{profil.titre}</p>
        <p className="eyebrow">{profil.disponibilite}</p>
        {(profil.apropos ?? [profil.accroche]).map((texte) => <p key={texte}>{texte}</p>)}
        {profil.langues?.length > 0 && (
          <><h3>Langues</h3>
          <ul className="cyber-languages">
            {profil.langues.map((l) => (
              <li key={l.langue} className="cyber-language">
                <div><strong>{l.langue}</strong><span className="cyber-language-level">{l.niveau}</span></div>
                <div className="cyber-language-stars" role="img" aria-label={l.langue + ' : ' + l.etoiles + ' étoiles sur 6'}>
                  {Array.from({ length: 6 }, (_, i) => (
                    <span key={i} className={i < l.etoiles ? 'cyber-star filled' : 'cyber-star'} aria-hidden="true">{i < l.etoiles ? '★' : '☆'}</span>
                  ))}
                  <span className="cyber-star-score" aria-hidden="true">{l.etoiles}/6</span>
                </div>
              </li>
            ))}
          </ul></>
        )}
        {profil.interets?.length > 0 && (
          <><h3>Centres d’intérêt</h3><ul>{profil.interets.map((i) => <li key={i}>{i}</li>)}</ul></>
        )}
        {profil.cv && <a className="btn" href={profil.cv} download>Télécharger mon CV (PDF)</a>}
      </article>
      <h2 className="section-title parcours-titre">Mon parcours académique</h2>
      {parcours ? <Timeline etapes={parcours} /> : <Etat loading={loading} error={error} />}
      {profil.galerie?.length > 0 && (
        <section className="galerie-section" aria-labelledby="galerie-titre">
          <h2 id="galerie-titre" className="section-title parcours-titre">Galerie personnelle</h2>
          <div className="galerie-grid">
            {profil.galerie.map((image) => (
              <figure className="galerie-image" key={image.src}>
                <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
