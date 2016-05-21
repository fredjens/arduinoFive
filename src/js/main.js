const io = require('socket.io-client');
const socket = io.connect('http://localhost:8080');

document.getElementById('led').onclick = () => {
    socket.emit('click');
};
