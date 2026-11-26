const normaliser = (texte) => texte.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()

export function filtrerProjets(projets, tagActif, recherche) {
  const mot = normaliser(recherche.trim())
  return projets
    .filter((p) => tagActif === 'Tous' || p.tags.includes(tagActif))
    .filter((p) => normaliser([p.titre, p.resume, ...p.tags, ...p.technos].join(' ')).includes(mot))
}
