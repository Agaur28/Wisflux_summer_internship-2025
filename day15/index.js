const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Read message from file
app.get('/message', (req, res) => {
  fs.readFile('data/message.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading message');
    res.send({ message: data });
  });
});

// Write message to file
app.post('/message', (req, res) => {
  const { message } = req.body;
  fs.writeFile('data/message.txt', message, (err) => {
    if (err) return res.status(500).send('Error writing message');
    res.send({ status: 'Message saved successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
