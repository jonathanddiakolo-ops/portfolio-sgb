import { Link } from 'react-router'

export default function ProjetCard({ projet }) {
  const { slug, titre, resume, tags, annee, technos, image, imageAlt, imageNote } = projet

  return (
    <article className="card projet-card">
      {image && (
        <figure className="projet-figure">
          <img className="projet-image" src={image} alt={imageAlt ?? ''} width="800" height="450" loading="lazy" />
          {imageNote && <figcaption className="projet-image-note">{imageNote}</figcaption>}
        </figure>
      )}
      <div className="projet-head">
        <h2 className="projet-card-title">{titre}</h2>
        <span className="annee">{annee}</span>
      </div>
      <p>{resume}</p>
      <ul className="tags">
        {tags.map((tag) => (
          <li key={tag} className="tag">{tag}</li>
        ))}
      </ul>
      <p className="technos">{technos.join(' · ')}</p>
      <Link className="detail-link" aria-label={'Voir le projet : ' + titre} to={`/projets/${slug}`}>Voir le projet</Link>
    </article>
  )
}
