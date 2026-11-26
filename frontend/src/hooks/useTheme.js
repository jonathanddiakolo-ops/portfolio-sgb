import { useEffect, useState } from 'react'

function themeInitial() {
  try {
    const enregistre = localStorage.getItem('theme')
    if (enregistre === 'clair' || enregistre === 'sombre') return enregistre
  } catch {
    // Le site fonctionne même si le navigateur bloque le stockage.
  }
  return 'sombre'
}

export default function useTheme() {
  const [theme, setTheme] = useState(themeInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // La préférence reste active jusqu'au prochain chargement.
    }
  }, [theme])

  const basculer = () => setTheme((t) => t === 'sombre' ? 'clair' : 'sombre')
  return { theme, basculer }
}
