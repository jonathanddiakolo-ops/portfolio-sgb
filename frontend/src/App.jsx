import { Routes, Route, useLocation } from 'react-router'
import Navbar from './components/Navbar.jsx'
import CyberMenu from './components/CyberMenu.jsx'
import Etat from './components/Etat.jsx'
import Footer from './components/Footer.jsx'
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

const secteurs = {
  accueil: { code: '01', nom: 'Accueil', zone: 'Éco-district', description: 'Identité & parcours académique' },
  projets: { code: '02', nom: 'Projets', zone: 'Quartier technologique', description: 'Dossiers de missions académiques' },
  competences: { code: '03', nom: 'Compétences', zone: 'Centre de données', description: 'Technologies & savoir-faire' },
  'a-propos': { code: '04', nom: 'À propos', zone: 'Quartier résidentiel', description: 'Profil & galerie personnelle' },
  parametres: { code: '05', nom: 'Paramètres', zone: 'Salle de contrôle', description: 'Configuration de l’interface' },
}

export default function App() {
  const { data: profil, loading, error } = useApi('/api/profil')
  const { theme, basculer } = useTheme()
  const { animations, basculerAnimations } = useAnimations()
  const location = useLocation()

  if (location.pathname === '/') return <CyberMenu nom={profil?.nom ?? 'Jonathan Daniel Diakolo'} animations={animations} />
  if (!profil) return <main className="container"><Etat loading={loading} error={error} /></main>

  const secteur = location.pathname.split('/')[1]
  const zone = secteurs[secteur] ?? { code: '00', nom: 'Navigation', zone: 'Cybercity', description: 'Exploration' }

  return (
    <div className="cyber-layout" data-sector={secteur}>
      <div className="sector-scene" aria-hidden="true" />
      <div className="sector-grid" aria-hidden="true" />
      <Navbar nom={profil.nom} theme={theme} basculer={basculer} />
      <main className="container cyber-page" key={location.pathname}>
        <div className="sector-intro" aria-label={'Secteur ' + zone.code + ' : ' + zone.zone}>
          <div className="sector-meta">
            <span className="sector-status"><i /> SYSTÈME EN LIGNE</span>
            <span>SECTEUR // {zone.code}</span>
          </div>
          <p className="sector-zone">{zone.zone}</p>
          <p className="sector-description">{zone.description}</p>
          <span className="sector-number" aria-hidden="true">{zone.code}</span>
        </div>
        <Routes>
          <Route path="/accueil" element={<Accueil profil={profil} />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<ProjetDetail />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/a-propos" element={<APropos profil={profil} />} />
          <Route path="/parametres" element={<Parametres theme={theme} basculer={basculer} animations={animations} basculerAnimations={basculerAnimations} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer profil={profil} />
    </div>
  )
}
