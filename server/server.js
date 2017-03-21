var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');

var redis = new Redis();

redis.psubscribe('*', function(err, count) {
    console.log('Errors subscribing to channel');
    if (err) {
        console.log('Errors subscribing to channel: ' + err);
    }
});

redis.on('pmessage', function(subscribed,channel, message) {
    console.log('Message Recieved at channel(' + channel + '): ' + message);
    message = JSON.parse(message);
    console.log(channel)
    console.log(message.event)
    io.emit(channel + ':' + message.event, message.data);
});

http.listen(3000, function() {
    console.log('Listening on Port 3000');
});