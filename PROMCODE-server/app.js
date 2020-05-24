
const express = require('express');
const multer = require('multer');
const registerTurtle = require('./register-turtle.js');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploaded/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

app.get('/', (req, res) => {
  console.log(req.query.url);
});

app.post('/', multer({ storage: storage }).single('file'), (req, res) => {
  console.log('save to ' + req.file.path);
  registerTurtle(req.file.path);
  res.send('uploaded: ' + req.body.filename + '\n');
});

app.listen(3000, () => {
  console.log('\nServer is online.');
});
