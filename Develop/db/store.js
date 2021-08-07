const fs = require('fs');
const util = require('util');
// const  { v4: uuidv4 } = require('uuid') 
const read = util.promisify(fs.readFile);
const write = util.promisify(fs.readFile);

class Store {
    readNotes() {
        return read('./db.json', 'utf8');
    }
    writeNotes(notes) {
        return write('./db.json', JSON.stringify(notes))
    }
}
module.exports = new Store();
