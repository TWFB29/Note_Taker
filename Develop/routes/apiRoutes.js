const generateUniqueId = require('generate-unique-id');

const idGenerate = generateUniqueId({
    length: 10,
    useLetters: false,
    useNumbers: true,
    useSymbols: []
});



// API GET REQUEST
module.exports = (app) => {
    
    app.get('/api/notes', (req, res) => {
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            notesData = JSON.parse(data);
            res.send(notesData);
        });
    });
}




// API POST REQUESTS

app.post('/api/notes', (req, res) => {
    const notes = req.body;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        JSON.parse(data).push(notes);
        notes.forEach((newNote) => {
            newNote.id = idGenerate();
            return JSON.stringify(notes)
        })
    })
    fs.writeFile('./db/db.json', (err, data) => {
        if (err) throw err;
    });

})
