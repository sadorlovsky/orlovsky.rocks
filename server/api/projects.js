import express from 'express'
import { find } from 'lodash'

const router = express.Router()

const projects = [
  {
    id: 1,
    title: 'dockerps',
    slug: 'dockerps',
    github: 'https://github.com/sadorlovsky/dockerps'
  },
  {
    id: 2,
    title: 'currency converter',
    slug: 'currency-converter',
    github: 'https://github.com/sadorlovsky/currency-converter-chrome-extension'
  },
  {
    id: 3,
    title: 'codestyle',
    slug: 'codestyle',
    github: 'https://github.com/sadorlovsky/codestyle'
  },
  {
    id: 4,
    title: 'sayhey',
    slug: 'sayhey',
    github: 'https://github.com/sadorlovsky/sayhey'
  },
  {
    id: 5,
    title: 'inteh-info.ru telegram bot',
    slug: 'inteh-info-notifier',
    github: 'https://github.com/sadorlovsky/inteh-info-notifier'
  }
]

router.get('/', (req, res) => {
  res.json(projects)
})

router.get('/:id', (req, res) => {
  res.json(find(projects, ['id', parseInt(req.params.id)]))
})

export default router
