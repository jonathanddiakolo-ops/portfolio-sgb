import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Etat from './components/Etat.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import Projets from './pages/Projets.jsx'
import ProjetDetail from './pages/ProjetDetail.jsx'
import Competences from './pages/Competences.jsx'
import NotFound from './pages/NotFound.jsx'
import useApi from './hooks/useApi.js'
import useTheme from './hooks/useTheme.js'
import APropos from './pages/APropos.jsx'

export default function App() {
  const { data: profil, loading, error } = useApi('/api/profil')
  const { theme, basculer } = useTheme()

  if (!profil) return <main className="container"><Etat loading={loading} error={error} /></main>

  return (
    <>
      <Navbar nom={profil.nom} theme={theme} basculer={basculer} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Accueil profil={profil} />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/a-propos" element={<APropos profil={profil} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer profil={profil} />
    </>
  )
}
