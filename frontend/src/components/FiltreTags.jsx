export default function FiltreTags({ tags, actif, onChange }) {
  return (
    <div className="filtres" aria-label="Filtrer par thème">
      {['Tous', ...tags].map((tag) => (
        <button key={tag} type="button" aria-pressed={tag === actif}
          className="filtre" onClick={() => onChange(tag)}>{tag}</button>
      ))}
    </div>
  )
}
