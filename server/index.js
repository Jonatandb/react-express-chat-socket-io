import express from 'express';
import http from 'http'
import { Server as SocketServer } from 'socket.io';

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server)

io.on('connection', socket => {
  console.log('Client connected - Id: ' + socket.id);

  socket.on('message', body => {
    console.log(body);
    socket.broadcast.emit('message', {
      body,
      id: socket.id.slice(0, 6)
    })
  })
})

const PORT = 4000

server.listen(PORT);

console.log('Server listening on http://localhost:' + PORT)