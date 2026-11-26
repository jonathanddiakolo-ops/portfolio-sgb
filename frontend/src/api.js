const API_URL = import.meta.env.VITE_API_URL ?? (import.meta.env.PROD ? '/api/proxy' : '')

export async function api(chemin, signal) {
  const url = import.meta.env.PROD ? `${API_URL}?path=${encodeURIComponent(chemin)}` : API_URL + chemin
  const reponse = await fetch(url, { signal })
  if (!reponse.headers.get('content-type')?.includes('application/json')) {
    throw new Error('Connexion à l’API indisponible')
  }
  const donnees = await reponse.json()
  if (!reponse.ok) {
    throw new Error(donnees.erreur ?? `Erreur ${reponse.status}`)
  }
  return donnees
}
