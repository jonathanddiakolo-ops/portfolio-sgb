export default function Timeline({ etapes }) {
  return (
    <ol className="timeline">
      {etapes.map((etape) => (
        <li key={etape.periode + etape.titre}>
          <p className="eyebrow">{etape.periode}</p>
          <h3>{etape.titre}</h3>
          <p>{etape.lieu}</p>
          <p>{etape.description}</p>
        </li>
      ))}
    </ol>
  )
}
