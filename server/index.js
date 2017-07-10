var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/hello-world', function(req, res){
  res.status(200).send('Hola mundo desde una ruta');
});

server.listen(6677, function(){
  console.log('Server is running in http://localhost:6677');
});
