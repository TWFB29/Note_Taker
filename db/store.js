const { json } = require('body-parser');
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


class Store {
    readNotes() {
        return read('db/db.json', 'utf8');
    }
    writeNotes(notes) {
        return write('db/db.json', JSON.stringify(notes))
    }
    getNotes() {
        return this.readNotes().then(notes => {
            let parseNote;
            try {
                parseNote = [].concat(JSON.parse(notes))
                console.log(parseNote)
            } catch (error) {
                parseNote = []
            }
            return parseNote
        })
    }
    addNotes(note){
        const {title, text} = note;
        if (!title || !text) {
            throw new Error("both title and text need to be filled in!");
        }
        const newNotes = {title, text, id: uuidv4()}
        return this.getNotes()
            .then(notes => [...notes, newNotes])
            .then(updateNote => this.writeNotes(updateNote))
            .then(() => newNotes)  

    }
}
module.exports = new Store();
