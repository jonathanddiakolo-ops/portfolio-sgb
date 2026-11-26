import { Router } from 'express'
import { profil, projets, competences, parcours } from '../lib/donnees.js'

const router = Router()

router.get('/profil', (req, res) => res.json(profil))

router.get('/projets', (req, res) => {
  const { tag } = req.query
  if (!tag) return res.json(projets)
  return res.json(projets.filter((p) => p.tags.includes(tag)))
})

router.get('/projets/:slug', (req, res) => {
  const projet = projets.find((p) => p.slug === req.params.slug)
  if (!projet) {
    return res.status(404).json({ erreur: 'Projet introuvable' })
  }
  return res.json(projet)
})

router.get('/competences', (req, res) => res.json(competences))
router.get('/parcours', (req, res) => res.json(parcours))

export default router
