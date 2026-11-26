export default function Parametres({ theme, basculer, animations, basculerAnimations }) {
  return (
    <section className="section page">
      <p className="eyebrow">Configuration // Interface</p>
      <h1 className="section-title">Paramètres</h1>
      <div className="card cyber-settings">
        <div>
          <h2>Thème de l’interface</h2>
          <p>Changer le mode clair ou sombre de toute l’interface CYBERCITY, y compris le menu principal et le décor.</p>
          <button type="button" className="filtre" onClick={basculer}>{theme === 'sombre' ? 'Activer le mode clair' : 'Activer le mode sombre'}</button>
        </div>
        <div>
          <h2>Animations</h2>
          <p>Effets de navigation et mouvements du menu principal.</p>
          <button type="button" className="filtre" aria-pressed={animations} onClick={basculerAnimations}>{animations ? 'Animations activées' : 'Animations désactivées'}</button>
        </div>
      </div>
    </section>
  )
}
