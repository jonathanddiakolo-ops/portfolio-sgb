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
          <><h3>Langues</h3><ul>{profil.langues.map((l) => <li key={l.langue}>{l.langue} : {l.niveau}</li>)}</ul></>
        )}
        {profil.interets?.length > 0 && (
          <><h3>Centres d’intérêt</h3><ul>{profil.interets.map((i) => <li key={i}>{i}</li>)}</ul></>
        )}
        {profil.cv && <a className="btn" href={profil.cv} download>Télécharger mon CV (PDF)</a>}
      </article>
      <h2 className="section-title parcours-titre">Mon parcours académique</h2>
      {parcours ? <Timeline etapes={parcours} /> : <Etat loading={loading} error={error} />}
    </section>
  )
}
