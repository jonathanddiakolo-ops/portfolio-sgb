export default function BoutonTheme({ theme, basculer }) {
  return (
    <button className="filtre bouton-theme" type="button" onClick={basculer}
      aria-label={theme === 'sombre' ? 'Activer le mode clair' : 'Activer le mode sombre'}>
      {theme === 'sombre' ? '☀ Mode clair' : '☾ Mode sombre'}
    </button>
  )
}
