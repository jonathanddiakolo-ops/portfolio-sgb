import { Link } from 'react-router'

export default function NotFound() {
  return (
    <section className="section page">
      <h1>404 — Page introuvable</h1>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  )
}
