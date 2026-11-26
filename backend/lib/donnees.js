import { readFileSync } from 'node:fs'

function lireJson(url) {
  return JSON.parse(readFileSync(url, 'utf8'))
}

export const profil = lireJson(new URL('../data/profil.json', import.meta.url))
export const projets = lireJson(new URL('../data/projets.json', import.meta.url))
export const competences = lireJson(new URL('../data/competences.json', import.meta.url))
export const parcours = lireJson(new URL('../data/parcours.json', import.meta.url))
