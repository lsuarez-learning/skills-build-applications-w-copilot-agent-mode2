import { Router } from 'express'
import type { Model } from 'mongoose'

export function createCrudRouter<T>(model: Model<T>, options: { sort?: Record<string, 1 | -1> } = {}): Router {
  const router = Router()

  router.get('/', async (_request, response) => {
    try {
      const documents = await model.find().sort(options.sort ?? { createdAt: -1 })
      response.json(documents)
    } catch (error) {
      response.status(500).json({ error: 'Unable to fetch records', details: error instanceof Error ? error.message : error })
    }
  })

  router.get('/:id', async (request, response) => {
    try {
      const document = await model.findById(request.params.id)
      if (!document) {
        response.status(404).json({ error: 'Record not found' })
        return
      }
      response.json(document)
    } catch (error) {
      response.status(400).json({ error: 'Invalid record id' })
    }
  })

  router.post('/', async (request, response) => {
    try {
      const document = await model.create(request.body)
      response.status(201).json(document)
    } catch (error) {
      response.status(400).json({ error: 'Unable to create record', details: error instanceof Error ? error.message : error })
    }
  })

  router.patch('/:id', async (request, response) => {
    try {
      const document = await model.findByIdAndUpdate(request.params.id, request.body, { new: true, runValidators: true })
      if (!document) {
        response.status(404).json({ error: 'Record not found' })
        return
      }
      response.json(document)
    } catch (error) {
      response.status(400).json({ error: 'Unable to update record', details: error instanceof Error ? error.message : error })
    }
  })

  router.delete('/:id', async (request, response) => {
    try {
      const document = await model.findByIdAndDelete(request.params.id)
      if (!document) {
        response.status(404).json({ error: 'Record not found' })
        return
      }
      response.status(204).send()
    } catch (error) {
      response.status(400).json({ error: 'Invalid record id' })
    }
  })

  return router
}
