import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/upload' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const { filename, base64 } = JSON.parse(body)
              const base64Data = base64.split(';base64,').pop()
              
              const uploadsDir = path.join(__dirname, 'public/uploads')
              if (!fs.existsSync(uploadsDir)) {
                fs.mkdirSync(uploadsDir, { recursive: true })
              }
              
              const ext = path.extname(filename)
              const baseName = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '_')
              const timestamp = Date.now()
              const safeFilename = `${baseName}_${timestamp}${ext}`
              
              const filePath = path.join(uploadsDir, safeFilename)
              fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'))
              
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ url: `/uploads/${safeFilename}` }))
            } catch (err) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: err.message }))
            }
          })
        } else {
          next()
        }
      })
    }
  }
})
