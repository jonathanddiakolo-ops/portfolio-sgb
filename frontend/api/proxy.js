// Relais serveur : aucune clé d'accès au backend n'est exposée au navigateur.
import { env } from 'node:process'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'private, no-store')
  res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ erreur: 'Méthode non autorisée' })
  }

  const path = req.query?.path
  if (typeof path !== 'string' || !/^\/api\/(profil|parcours|competences|projets(?:\/[a-z0-9-]+)?)(?:\?tag=[^&#]*)?$/.test(path)) {
    return res.status(400).json({ erreur: 'Route API non autorisée' })
  }

  // Vercel injecte le jeton OIDC au runtime ; source de confiance côté backend.
  // Une clé d'automatisation peut être configurée côté serveur en alternative.
  const token = req.headers['x-vercel-oidc-token']
  const secret = env.BACKEND_BYPASS_SECRET
  try {
    const origin = new URL(env.BACKEND_URL)
    if (origin.protocol !== 'https:' || !origin.hostname.endsWith('.vercel.app') || origin.username || origin.password || origin.port || origin.pathname !== '/' || origin.search || origin.hash) {
      throw new Error('Origine non autorisée')
    }
    if (!secret && typeof token !== 'string') throw new Error('Authentification manquante')
    const headers = { Accept: 'application/json' }
    if (secret) headers['x-vercel-protection-bypass'] = secret
    else headers['x-vercel-trusted-oidc-idp-token'] = token
    const upstream = await fetch(new URL(path, origin), {
      headers, redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(10000),
    })
    if (!upstream.headers.get('content-type')?.includes('application/json')) {
      throw new Error('Réponse API non JSON')
    }
    return res.status(upstream.status).json(await upstream.json())
  } catch {
    return res.status(502).json({ erreur: 'Connexion sécurisée à l’API indisponible' })
  }
}
