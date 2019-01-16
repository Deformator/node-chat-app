const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', function (socket) {
    console.log('New user connected');
    socket.on('disconnect', function () {
        console.log('User was disconnected');
    });

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey What is going on.',
        createAt: 123
    });

    socket.on('createMessage', (message)=>{
       console.log('createMessage', message);
    });
});



server.listen(port, function () {
    console.log(`Server is up on port ${port}`);
})