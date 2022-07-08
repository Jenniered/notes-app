const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi');

const model = new NotesModel();
model.addNote('This is an example note')

const api = new NotesApi();

const view = new NotesView(model, api);
view.displayNotesFromApi();

console.log(model.getNotes());

console.log('The notes app is running')