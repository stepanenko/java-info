const express = require('express');

const app = express();

const server = app.listen(4000, function() {
  console.log('listening to requests on port 4000')
});

// Static files
app.use(express.static('public'));
