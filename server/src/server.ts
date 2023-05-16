import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/Users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app.get('/hello', () => {
  return 'Hello world!'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Server listening on port ${3333}`)
  })
