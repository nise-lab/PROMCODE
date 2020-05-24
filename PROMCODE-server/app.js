const express = require('express');
const app = express();
const path = require('path');

app.listen(3000);
console.log('Server is online.');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('Hello World\n');
  console.log(req.query.url);
});

// http://localhost:3000/?url=http://...
