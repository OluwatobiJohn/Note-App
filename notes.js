const fs = require('fs');

var fetchNotes = () => {
    try{       
        var notesString = fs.readFileSync('notes-data.json');
       return JSON.parse(notesString);
    } catch (e) {
        return [];
     }  
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Add Note

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
       
    var duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    } 
}; 

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting note', title);
}

//Delete Note

var deleteNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;
}
module.exports = {
    addNote,
    getAll,
    getNote,
    deleteNote
}