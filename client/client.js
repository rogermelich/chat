var socket = require('socket.io-client')('http://localhost:3000');
socket.on('connect', function(){
    console.log('Client connected ok to localhost port 3000')
});
socket.on('chat:RogerMelich\\Chat\\Events\\MessageSent', function(data){
    console.log('Event chat receive')
    console.log(data)
});
socket.on('disconnect', function(){
    console.log('Client disconnected ok from localhost port 3000')
});