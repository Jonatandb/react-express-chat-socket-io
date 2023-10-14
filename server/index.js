import express from 'express';
import http from 'http'
import {Server as SocketServer } from 'socket.io';

const app = express();
const server = http.createServer(app)
const io = new SocketServer(server)

const PORT = 4000

server.listen(PORT);

console.log('Server listening on http://localhost:' + PORT)