const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const express = require('express');
const fb = express.Router();
const { readFromFile, writeToFile, readAndAppend } = require('../Helpers/fsUtils')


fb.get('/', (req, res) =>
  readFromFile('./Develop/db.json').then((data) => res.json(JSON.parse(data)))
);

fb.post('/', (req, res) => {
    
    const { title, text} = req.body;

    if (req.body) {
    
      const newNote = {
        title,
        text,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, './Develop/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const notes = JSON.parse(fs.readFileSync('./Develop/db.json', 'utf-8'));
  
    const noteIndex = notes.findIndex(note => note.note_id === id);
  
    notes.splice(noteIndex, 1);
  
    writeToFile("./Develop/db.json", notes);
    return res.send();
  });

  module.exports = fb;