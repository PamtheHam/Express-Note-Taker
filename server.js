const express = require('express');
const routes = require('./Scripts/routes');
const path = require('path');

const app = express();
const PORT = process.env.port || 3001;
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api/notes', routes);

// route to index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// route to notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => console.log(`Application listening at http://localhost:${PORT}!` ));

