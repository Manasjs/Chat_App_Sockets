const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  
  setInterval(()=>{
    socket.emit('from server');
  },10000);

  socket.on('message from client',()=>{
    console.log('emit coming from client')
  })

})
  
app.use ('/',express.static(__dirname + '/public' ));

server.listen(3000, ()=>{
    console.log('server started')
})