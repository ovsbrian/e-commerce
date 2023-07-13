const express = require('express')
const compression = require('compression')
const { createServer } = require('vite')

async function createViteServer() {
  const app = express()
  app.use(compression())

  const vite = await createServer({
    server: { middlewareMode: 'html' }
  })
  app.use(vite.middlewares)

  app.listen(5000)
}

createViteServer()
