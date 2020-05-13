import express from 'express'
import config from './config'
async function startServer() {
    const app = express()
  
    await require('./loaders').default({ expressApp: app })
  
    app.listen(config.port, err => {
      if (err) {
        process.exit(1)
        return
      }
      console.log(`Server listening on port: ${config.port}`)
    })
  }
  startServer()