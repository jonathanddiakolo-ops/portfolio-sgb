export default function Etat({ loading, error }) {
  if (loading) return <p className="etat" role="status">Chargement…</p>
  if (error) return <p className="etat erreur" role="alert">{error}</p>
  return null
}
