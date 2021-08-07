const store = require('../db/store');
const router = require('express').Router;


// API GET REQUEST
   router.get('/notes', (req, res) => {
        store
        .getNotes()
        .then((notes)=>{
            return res.json(notes);
        })
        .catch((err) => res.status(580).json(err));
    });

// API POST REQUESTS

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(580).json(err));
});

module.exports = router;
