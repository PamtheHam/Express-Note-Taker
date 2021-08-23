const express = require('express');
const pulls = require('./Develop/db.json');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


// route to index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// route to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
    res.json(pulls);
    console.info(`${req.method} request received to retrieve past notes`);
});

app.post('/api/notes', (req, res) => {
    res.json(pulls);
    console.info(`${req.method} request received to add a new note`);
});

app.listen(PORT, () => console.log('Application listening at http://localhost:${PORT}!'));

