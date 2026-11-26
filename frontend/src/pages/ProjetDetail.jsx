import { Link, useParams } from 'react-router'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'

export default function ProjetDetail() {
  const { slug } = useParams()
  const { data: projet, loading, error } = useApi('/api/projets/' + encodeURIComponent(slug))

  return (
    <section className="section page">
      <Link to="/projets">← Retour aux projets</Link>
      {!projet ? <Etat loading={loading} error={error} /> : (
        <article className="card detail">
          <p className="eyebrow">{projet.annee}</p>
          <h1>{projet.titre}</h1>
          {projet.image && (
            <figure className="projet-figure">
              <img className="projet-image" src={projet.image} alt={projet.imageAlt ?? ''} width="800" height="450" loading="lazy" />
              {projet.imageNote && <figcaption className="projet-image-note">{projet.imageNote}</figcaption>}
            </figure>
          )}
          <p>{projet.resume}</p>
          {projet.contexte && <><h2>Contexte</h2><p>{projet.contexte}</p></>}
          {projet.realisations?.length > 0 && (
            <><h2>Ce que j’ai réalisé</h2><ul>{projet.realisations.map((r) => <li key={r}>{r}</li>)}</ul></>
          )}
          {projet.resultat && <><h2>Résultat</h2><p>{projet.resultat}</p></>}
          <h2>Technologies</h2>
          <p>{projet.technos.join(' · ')}</p>
          <ul className="tags">{projet.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}</ul>
        </article>
      )}
    </section>
  )
}
