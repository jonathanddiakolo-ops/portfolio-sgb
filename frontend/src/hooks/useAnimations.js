import { useEffect, useState } from 'react'

export default function useAnimations() {
  const [animations, setAnimations] = useState(() => {
    try { return localStorage.getItem('cyber-animations') !== 'off' }
    catch { return true }
  })
  useEffect(() => {
    document.documentElement.dataset.animations = animations ? 'on' : 'off'
    try { localStorage.setItem('cyber-animations', animations ? 'on' : 'off') } catch { /* stockage facultatif */ }
  }, [animations])
  return { animations, basculerAnimations: () => setAnimations(value => !value) }
}
