import Hero from '../components/Hero.jsx'
import Timeline from '../components/Timeline.jsx'
import Etat from '../components/Etat.jsx'
import useApi from '../hooks/useApi.js'

export default function Accueil({ profil }) {
  const { data, loading, error } = useApi('/api/parcours')

  return (
    <>
      <Hero profil={profil} />
      <section className="section">
        <h2 className="section-title">Mon parcours académique</h2>
        {data ? <Timeline etapes={data} /> : <Etat loading={loading} error={error} />}
      </section>
    </>
  )
}
