const path = require('path')
const express = require('express')
const SocketServer = require('ws')

const bodyParser = require('body-parser')

// Chatroom app
const PORT_WEB = 9000

const STATIC = path.resolve(__dirname, 'dist')
const INDEX = path.resolve(STATIC, 'index.spa.html')

const app = express()
app.use(bodyParser.json())

app.use(express.static(STATIC))

app.get('*', function(req, res) {
  res.sendFile(INDEX)
})

app.listen(PORT_WEB, function() {
  console.log('Server up and running on ', `http://localhost:${PORT_WEB}/`)
})

// Websocket
const PORT = 5000

const server = express().listen(PORT, () => console.log(`Listening on ${PORT}`))

const wss = new SocketServer.Server({ server })

wss.on('connection', (ws, req) => {
  console.log('Client connected')
  ws.on('message', (data) => {
    console.log(data)
    wss.clients.forEach((client) => {
      if (client.readyState === SocketServer.OPEN) {
        client.send(data)
      }
    })
  })

  ws.on('close', () => {
    console.log('Close connected')
  })
})
