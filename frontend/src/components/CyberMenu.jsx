import { useRef, useState } from 'react'
import { Link } from 'react-router'

const rubriques = [
  { titre: 'Accueil', chemin: '/accueil', detail: 'Identité & parcours académique' },
  { titre: 'Mes projets', chemin: '/projets', detail: 'Projets académiques • Smart Building' },
  { titre: 'Mes compétences', chemin: '/competences', detail: 'Technologies & savoir-faire' },
  { titre: 'À propos', chemin: '/a-propos', detail: 'Profil & galerie personnelle' },
  { titre: 'Paramètres', chemin: '/parametres', detail: 'Personnaliser l’expérience' },
]

export default function CyberMenu({ chemin, animations, children }) {
  const ouvert = chemin !== '/'
  const indexPage = rubriques.findIndex(item => chemin === item.chemin || chemin.startsWith(item.chemin + '/'))
  const [survol, setSurvol] = useState(null)
  const actif = survol?.chemin === chemin ? survol.index : Math.max(0, indexPage)
  const menu = useRef(null)
  const liens = useRef([])

  function selectionner(index) {
    setSurvol({ chemin, index })
  }

  function clavier(event) {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? rubriques.length - 1 :
      (actif + (event.key === 'ArrowDown' ? 1 : -1) + rubriques.length) % rubriques.length
    selectionner(index)
    liens.current[index]?.focus()
  }

  function camera(event) {
    if (!animations || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    menu.current?.style.setProperty('--camera-x', ((event.clientX - rect.left) / rect.width - .5) * -18 + 'px')
    menu.current?.style.setProperty('--camera-y', ((event.clientY - rect.top) / rect.height - .5) * -12 + 'px')
  }

  return (
    <main ref={menu} className={'cyber-menu' + (ouvert ? ' cyber-open' : '')}
      style={{ '--destination-color': ['#58f5e4', '#ff47b9', '#78aaff', '#f1a3ff', '#bcf9cc'][actif] }}
      onPointerMove={camera} onPointerLeave={() => {
        menu.current?.style.setProperty('--camera-x', '0px')
        menu.current?.style.setProperty('--camera-y', '0px')
      }}>
      <div className="cyber-scene" aria-hidden="true" />
      <div className="cyber-atmosphere" aria-hidden="true" />
      <div className="cyber-rain" aria-hidden="true" />
      <div className="cyber-neon-flow" aria-hidden="true" />
      <div className="cyber-fog" aria-hidden="true" />
      <div className="cyber-vignette" aria-hidden="true" />
      <div className="cyber-shell">
        <div className="cyber-heading">
          <p className="cyber-kicker"><span /> SMART &amp; GREEN BUILDING</p>
          <h1 className="cyber-logo"><Link to="/" aria-label="CYBERCITY, menu principal">CYBERCITY</Link></h1>
          <p className="cyber-edition">Edition 2.0</p>
        </div>
        <nav className="cyber-nav" aria-label="Menu principal" onKeyDown={clavier}>
          {rubriques.map((item, i) => (
            <Link key={item.chemin} ref={el => { liens.current[i] = el }}
              to={item.chemin}
              className={'cyber-option' + (i === actif ? ' cyber-selected' : '') + (i === indexPage ? ' cyber-current' : '')}
              aria-current={i === indexPage ? 'page' : undefined}
              onFocus={() => selectionner(i)} onMouseEnter={() => selectionner(i)}
              onMouseLeave={() => { if (indexPage >= 0) setSurvol(null) }}>
              <span className="cyber-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span>{item.titre}</span>
              <span className="cyber-arrow" aria-hidden="true">›</span>
            </Link>
          ))}
        </nav>
        <div className="cyber-caption" aria-live="polite">
          <span className="cyber-indicator" aria-hidden="true" />
          {rubriques[actif].detail}
        </div>
      </div>
      {ouvert && (
        <section key={chemin} className="cyber-content" aria-label={rubriques[indexPage]?.titre ?? 'Portfolio'}>
          <div className="cyber-glitch-layer" aria-hidden="true">
            <div className="cyber-glitch-frame" />
            <div className="cyber-glitch-band cyber-band-one" />
            <div className="cyber-glitch-band cyber-band-two" />
            <div className="cyber-glitch-band cyber-band-three" />
            <div className="cyber-glitch-beam" />
            <span className="cyber-glitch-sync">SYNC // DATA LINK</span>
          </div>
          <header className="cyber-content-bar">
            <span><i aria-hidden="true" /> CYBERCITY <b>//</b> {String(indexPage + 1).padStart(2, '0')}</span>
            <Link to="/" className="cyber-close" aria-label="Retour au menu principal">✕ <span>Fermer</span></Link>
          </header>
          <div className="cyber-content-scroll">
            {children}
          </div>
        </section>
      )}
      <div className="cyber-hud">
        <span>PORTFOLIO ACADÉMIQUE <b>//</b> ESIEE-IT <b>//</b> Jonathan D. Diakolo</span>
        <span className="cyber-keyboard"><kbd>↑</kbd><kbd>↓</kbd> Naviguer <kbd>Entrée</kbd> Sélectionner</span>
      </div>
    </main>
  )
}
