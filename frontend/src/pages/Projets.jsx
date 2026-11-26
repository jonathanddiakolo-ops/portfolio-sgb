import { useState } from 'react'
import useApi from '../hooks/useApi.js'
import Etat from '../components/Etat.jsx'
import FiltreTags from '../components/FiltreTags.jsx'
import ProjetCard from '../components/ProjetCard.jsx'
import BarreRecherche from '../components/BarreRecherche.jsx'
import { filtrerProjets } from '../lib/recherche.js'

export default function Projets() {
  const { data: projets, loading, error } = useApi('/api/projets')
  const [tagActif, setTagActif] = useState('Tous')
  const [recherche, setRecherche] = useState('')

  if (!projets) return <Etat loading={loading} error={error} />

  const tags = [...new Set(projets.flatMap((p) => p.tags))].sort()
  const visibles = filtrerProjets(projets, tagActif, recherche)

  return (
    <section className="section page">
      <h1 className="section-title">Mes projets</h1>
      <BarreRecherche valeur={recherche} onChange={setRecherche} />
      <FiltreTags tags={tags} actif={tagActif} onChange={setTagActif} />
      <p className="compteur" role="status">{visibles.length} projet(s)</p>
      {visibles.length === 0 && <p>Aucun projet ne correspond à ta recherche.</p>}
      <div className="grid">
        {visibles.map((p) => <ProjetCard key={p.slug} projet={p} />)}
      </div>
    </section>
  )
}
