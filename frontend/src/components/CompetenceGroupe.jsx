const LIBELLES = ['', 'Notions', 'Autonome', 'Avancé']

export default function CompetenceGroupe({ groupe, items }) {
  return (
    <article className="card">
      <h3>{groupe}</h3>
      <ul className="skills">
        {items.map(({ nom, niveau }) => (
          <li key={nom}>
            <span>{nom}</span>
            <span className="niveau">{LIBELLES[niveau]}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
