import express from 'express'
import { find } from 'lodash'

const router = express.Router()

const projects = [
  {
    id: 1,
    title: 'dockerps'
  },
  {
    id: 2,
    title: 'currency converter'
  },
  {
    id: 3,
    title: 'codestyle'
  },
  {
    id: 4,
    title: 'sayhey'
  },
  {
    id: 5,
    title: 'inteh-info.ru telegram bot'
  }
]

router.get('/', (req, res) => {
  res.json(projects)
})

router.get('/:id', (req, res) => {
  res.json(find(projects, ['id', parseInt(req.params.id)]))
})

export default router
