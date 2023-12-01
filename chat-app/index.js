const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const port = 3000;

app.get('/', (req, res) => {
	  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
	  console.log('a user connected');
	  socket.on('chat message', (msg) => {
		      io.emit('chat message', msg);
		    });
	  socket.on('disconnect', () => {
		      console.log('user disconnected');
		    });
});

server.listen(port, () => {
	  console.log(`Chat App is running at http://localhost:${port}`);
});
