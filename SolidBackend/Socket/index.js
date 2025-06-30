import express from 'express';
import { Server } from 'socket.io'; 
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins for simplicity; adjust as needed
    methods: ['GET', 'POST'],
  },
});





server.listen(3000, () => {
  console.log('Socket.IO server is running on port 3000');
});