import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'

const rubriques = [
  { titre: 'Accueil', chemin: '/accueil', detail: 'Identité & parcours académique' },
  { titre: 'Mes projets', chemin: '/projets', detail: 'Projets académiques • Smart Building' },
  { titre: 'Mes compétences', chemin: '/competences', detail: 'Technologies & savoir-faire' },
  { titre: 'À propos', chemin: '/a-propos', detail: 'Profil & galerie personnelle' },
  { titre: 'Paramètres', chemin: '/parametres', detail: 'Personnaliser l’expérience' },
]

export default function CyberMenu({ nom, animations }) {
  const navigate = useNavigate()
  const [actif, setActif] = useState(0)
  const [depart, setDepart] = useState(null)
  const menu = useRef(null)
  const liens = useRef([])
  const timer = useRef(null)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function choisir(event, index) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    event.preventDefault()
    if (depart !== null) return
    setActif(index)
    if (!animations || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      navigate(rubriques[index].chemin)
      return
    }
    setDepart(index)
    timer.current = window.setTimeout(() => navigate(rubriques[index].chemin), 550)
  }

  function clavier(event) {
    if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    if (depart !== null) return
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? rubriques.length - 1 :
      (actif + (event.key === 'ArrowDown' ? 1 : -1) + rubriques.length) % rubriques.length
    setActif(index)
    liens.current[index]?.focus()
  }

  function camera(event) {
    if (!animations || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    menu.current?.style.setProperty('--camera-x', ((event.clientX - rect.left) / rect.width - .5) * -18 + 'px')
    menu.current?.style.setProperty('--camera-y', ((event.clientY - rect.top) / rect.height - .5) * -12 + 'px')
  }

  return (
    <main ref={menu} className={'cyber-menu' + (depart !== null ? ' cyber-depart' : '')}
      style={{ '--destination-color': ['#58f5e4', '#ff47b9', '#78aaff', '#f1a3ff', '#bcf9cc'][actif] }}
      onPointerMove={camera} onPointerLeave={() => {
        menu.current?.style.setProperty('--camera-x', '0px')
        menu.current?.style.setProperty('--camera-y', '0px')
      }}>
      <div className="cyber-scene" aria-hidden="true" />
      <div className="cyber-atmosphere" aria-hidden="true" />
      <div className="cyber-rain" aria-hidden="true" />
      <div className="cyber-vignette" aria-hidden="true" />
      <div className="cyber-shell">
        <div className="cyber-heading">
          <p className="cyber-kicker"><span /> SMART &amp; GREEN BUILDING</p>
          <h1 className="cyber-logo">CYBERCITY</h1>
          <p className="cyber-edition">Edition 2.0</p>
          <p className="cyber-name">{nom}</p>
        </div>
        <nav className="cyber-nav" aria-label="Menu principal" onKeyDown={clavier}>
          {rubriques.map((item, i) => (
            <Link key={item.chemin} ref={el => { liens.current[i] = el }}
              to={item.chemin}
              className={'cyber-option' + (i === actif ? ' cyber-selected' : '')}
              onFocus={() => setActif(i)} onMouseEnter={() => depart === null && setActif(i)}
              onClick={event => choisir(event, i)}>
              <span className="cyber-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <span>{item.titre}</span>
              <span className="cyber-arrow" aria-hidden="true">›</span>
            </Link>
          ))}
        </nav>
        <div className="cyber-caption" aria-live="polite">
          <span className="cyber-indicator" aria-hidden="true" />
          {depart !== null ? 'Connexion au secteur…' : rubriques[actif].detail}
        </div>
      </div>
      <div className="cyber-hud">
        <span>PORTFOLIO ACADÉMIQUE <b>//</b> ESIEE-IT</span>
        <span className="cyber-keyboard"><kbd>↑</kbd><kbd>↓</kbd> Naviguer <kbd>Entrée</kbd> Sélectionner</span>
      </div>
      <div className="cyber-transition" aria-hidden="true" />
    </main>
  )
}
