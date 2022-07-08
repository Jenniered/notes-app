const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi');

const model = new NotesModel();
const api = new NotesApi();
const view = new NotesView(model, api);
model.addNote('This is an example note')

view.displayNotesFromApi();

// console.log(model.getNotes());

console.log('The notes app is running')