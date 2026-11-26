import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import CompetenceGroupe from '../components/CompetenceGroupe.jsx'

export default function Competences() {
  const { data: competences, loading, error } = useApi('/api/competences')
  if (!competences) return <Etat loading={loading} error={error} />

  return (
    <section className="section page">
      <h1 className="section-title">Mes compétences</h1>
      <div className="grid">
        {competences.map((c) => (
          <CompetenceGroupe key={c.groupe} groupe={c.groupe} items={c.items} />
        ))}
      </div>
    </section>
  )
}
