import express from 'express'
import cors from 'cors'
import contenu from './routes/contenu.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors({ origin: process.env.FRONTEND_URL?.split(',') ?? '*' }))

app.get('/', (req, res) => {
  res.json({ message: 'API Portfolio SGB opérationnelle' })
})

app.use('/api', contenu)

app.use((req, res) => res.status(404).json({ erreur: 'Route inconnue' }))

if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`API sur http://localhost:${PORT}`))
}

export default app
