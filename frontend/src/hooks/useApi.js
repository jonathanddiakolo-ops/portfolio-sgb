import { useEffect, useState } from 'react'
import { api } from '../api.js'

export default function useApi(chemin) {
  const [resultat, setResultat] = useState(null)

  useEffect(() => {
    const controleur = new AbortController()
    api(chemin, controleur.signal)
      .then((data) => setResultat({ chemin, data, error: null }))
      .catch((e) => {
        if (!controleur.signal.aborted) {
          setResultat({ chemin, data: null, error: e.message })
        }
      })
    return () => controleur.abort()
  }, [chemin])

  if (resultat?.chemin !== chemin) {
    return { data: null, loading: true, error: null }
  }
  return { data: resultat.data, loading: false, error: resultat.error }
}
