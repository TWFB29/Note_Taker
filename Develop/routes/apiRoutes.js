const store = require('../db/store');
const router = require('express').Router();
const fs =  require('fs')



// API GET REQUEST
   router.get('/notes', (req, res) => {
        fs.readFile("./db/db.json", (err, data) => {
            // console.log(data)
            const notes = JSON.parse(data);
            res.json(notes)
        })
    })

// API POST REQUESTS

router.post('/notes', (req, res) => {
    store

        .writeNotes(req.body)
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;