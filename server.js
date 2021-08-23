const express = require('express');
const pulls = require('./Develop/db.json')
const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api', (req, res) => res.json(pulls));

app.listen(PORT, () => console.log('App listening at http://localhost:${PORT}!'));
