var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hello-world', function(req, res){
  res.status(200).send('Hola mundo desde una ruta');
});

var messages = [{id: 1, text: 'Welcome to the private chat of Socket.io and NodeJs of Gonza Escobar...', nickname: 'Bot - gonzaescobar'}];

io.on('connection', function(socket){
    console.log("The node with IP: "+socket.handshake.address+" is connected...");

    socket.emit('messages', messages);

    socket.on('add-message', function(data){
      messages.push(data);

      io.sockets.emit('messages', messages);
    });

});

server.listen(6677, function(){
  console.log('Server is running in http://localhost:6677');
});
