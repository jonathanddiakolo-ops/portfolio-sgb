export default function Footer({ profil }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>{profil.nom} · Portfolio académique</p>
        <a href={profil.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
