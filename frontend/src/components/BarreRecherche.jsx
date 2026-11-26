export default function BarreRecherche({ valeur, onChange }) {
  return (
    <div className="recherche">
      <label htmlFor="recherche-projets">Rechercher un projet</label>
      <input id="recherche-projets" type="search" value={valeur}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Titre, technologie, thème…" />
    </div>
  )
}
