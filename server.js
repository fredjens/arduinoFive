'use strict';

const express = require('express');
const five = require('johnny-five');

const app = express();
const server = app.listen(8080);
const io = require('socket.io').listen(server);

app.use(
    express.static('dist')
);

const board = new five.Board();

board.on('ready', () => {
    const led = new five.Led(11);

    function turnOn() {
        led.toggle();
    }

    io.sockets.on('connection', (socket) => {
        socket.on('click', () => {
            turnOn();
        });
    });
});
