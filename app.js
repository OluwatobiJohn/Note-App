const fs = require('fs'); 
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');


const argv = yargs.argv;
let command = argv._[0];
console.log(`Command : ${command}`);
console.log('Yargs', argv);

if(command === 'add') {
   var note = notes.addNote(argv.title, argv.body);
   if (note) {
       console.log('Note Created');
       console.log('---');
       console.log(`Title: ${note.title}`)
       console.log(`Body: ${note.body}`);
   } else {
       console.log('Note title taken');
   };
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
} else if (command === 'delete') {
  var noteRemove = notes.deleteNote(argv.title);
  var message = noteRemove ? 'Note deleted' : 'Note not Found';
  console.log(message);
} else {
    console.log('Command not recognised')
}