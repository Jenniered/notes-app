class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    console.log(this.notes)
    return this.notes;
  }

  setNotes(notes) {
    console.log(notes)
    this.notes.push(notes[0]);
    console.log(this.notes)
  }

  addNote(note){
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
