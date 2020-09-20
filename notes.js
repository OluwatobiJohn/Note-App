const fs = require('fs');

//Add Note

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try{       
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
    } catch (e) {

    }    
     
    var duplicateNotes = notes.filter(() => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);
    fs.writeFile('notes-data.json', JSON.stringify(notes), (err) => {
        if (err) {
            console.log('error occured');
        }
    });
    };
    
}; 

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting note', title);
}
var deleteNote = (title) => {
    console.log('Deleting note', title);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}