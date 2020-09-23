const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

let titleOption =  {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
let bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOption,
        body: bodyOption
    })
    .command('list', 'List all notes')
    .command('read', 'Reading note', {
        title: titleOption
    })
    .command('delete', 'Deleting note', {
        title: titleOption
    })
    .help()
    .argv;
let command = argv._[0];
console.log(`Command : ${command}`);
console.log('Yargs', argv);

if(command === 'add') {
   var note = notes.addNote(argv.title, argv.body);
   if (note) {
       console.log('Note Created');
       notes.logNote(note);
   } else {
       console.log('Note title taken');
   };
} else if (command === 'list') {
   var note = notes.getAll();
   if (note) {
       console.log(`Printing ${note.length} note(s).`);
       note.forEach((note) => {
           notes.logNote(note)
       });
   }
} else if (command === 'read'){
   var note = notes.getNote(argv.title);
   if (note) {
       console.log('Note Found');
       notes.logNote(note);
   } else {
       console.log('Note not Found')
   }
} else if (command === 'delete') {
  var noteRemove = notes.deleteNote(argv.title);
  var message = noteRemove ? 'Note deleted' : 'Note not Found';
  console.log(message);
} else {
    console.log('Command not recognised')
}