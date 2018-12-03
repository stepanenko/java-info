// Make connection
const socket = io.connect('http://localhost:4000');

const output = document.getElementById('output');
const btn = document.getElementById('send');
const handle = document.getElementById('handle');
const message = document.getElementById('message');

// Emit Events
btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
});

// Listen for Events
socket.on('chat', function(data) {
  output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
