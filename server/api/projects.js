import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('all projects')
})

router.get('/:id', (req, res) => {
  res.send(`project #${req.params.id}`)
})

export default router
