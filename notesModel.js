class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    
    return this.notes;
  }

  setNotes(notesFromServer) {
    notesFromServer.forEach(note => {
      this.notes.push(note);
    }); 
    
  }

  addNote(note){
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;
