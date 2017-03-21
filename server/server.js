var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

var redis = new Redis();


io.emit('chat', function () {

});

http.listen(3000, function() {
    console.log('Listening on Port 3000');
});