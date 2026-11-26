import data from './data/portfolio.json'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProjetCard from './components/ProjetCard.jsx'
import CompetenceGroupe from './components/CompetenceGroupe.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { profil, projets, competences } = data

  return (
    <>
      <Navbar nom={profil.nom} />
      <main className="container">
        <Hero profil={profil} />
        <section id="projets" className="section">
          <h2 className="section-title">Mes projets</h2>
          <div className="grid">
            {projets.map((p) => <ProjetCard key={p.slug} projet={p} />)}
          </div>
        </section>
        <section id="competences" className="section">
          <h2 className="section-title">Mes compétences</h2>
          <div className="grid">
            {competences.map((c) => (
              <CompetenceGroupe key={c.groupe} groupe={c.groupe} items={c.items} />
            ))}
          </div>
        </section>
      </main>
      <Footer profil={profil} />
    </>
  )
}
