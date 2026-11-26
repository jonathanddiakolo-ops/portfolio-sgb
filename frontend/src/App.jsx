import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import CyberMenu from './components/CyberMenu.jsx'
import Etat from './components/Etat.jsx'
import Accueil from './pages/Accueil.jsx'
import Projets from './pages/Projets.jsx'
import ProjetDetail from './pages/ProjetDetail.jsx'
import Competences from './pages/Competences.jsx'
import NotFound from './pages/NotFound.jsx'
import useApi from './hooks/useApi.js'
import useTheme from './hooks/useTheme.js'
import useAnimations from './hooks/useAnimations.js'
import APropos from './pages/APropos.jsx'
import Parametres from './pages/Parametres.jsx'

export default function App() {
  const { data: profil, loading, error } = useApi('/api/profil')
  const { theme, basculer } = useTheme()
  const { animations, basculerAnimations } = useAnimations()
  const location = useLocation()
  const chemin = location.pathname

  // Un titre d’onglet explicite pour chaque rubrique.
  useEffect(() => {
    const titres = {
      '/': 'Portfolio Smart & Green Building',
      '/accueil': 'Accueil',
      '/projets': 'Mes projets',
      '/competences': 'Mes compétences',
      '/a-propos': 'À propos',
      '/parametres': 'Paramètres'
    }
    const titre = titres[chemin] ?? (chemin.startsWith('/projets/') ? 'Détail du projet' : 'Page introuvable')
    document.title = titre + ' | CYBERCITY — Jonathan Daniel Diakolo'
  }, [chemin])

  return (
    <CyberMenu chemin={chemin} animations={animations}>
      {chemin !== '/' && (
        profil ? (
          <Routes>
            <Route path="/accueil" element={<Accueil profil={profil} />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/projets/:slug" element={<ProjetDetail />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/a-propos" element={<APropos profil={profil} />} />
            <Route path="/parametres" element={<Parametres theme={theme} basculer={basculer} animations={animations} basculerAnimations={basculerAnimations} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : <Etat loading={loading} error={error} />
      )}
    </CyberMenu>
  )
}
