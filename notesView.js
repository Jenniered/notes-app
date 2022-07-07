class NotesView {
  constructor(model, api) {
    this.model = model;

    const newNote = document.querySelector('#note_input');
    this.button = document.querySelector('#add-note-button');
    this.button.addEventListener('click', () => {
      this.model.addNote(newNote.value)
      this.displayNotes();
      newNote.value = "";
    })
  }

  displayNotes() {
    this.mainContainerEl = document.querySelector('#main-container');
    this.refreshNotes();
    this.model.getNotes().forEach(note => {
   
      let div = document.createElement("div");
      div.innerText = note;
      div.className = "note";
      this.mainContainerEl.append(div);
    });

    // console.log(div);
    // console.log(document.querySelectorAll("div").length);
    // console.log(document.querySelectorAll("div.note").length);
  }

  refreshNotes() {
    const old_notes = document.querySelectorAll('.note')
    old_notes.forEach(note => {
    note.remove()
  })
  }
}

// const getNotes = (callback) => {
//   fetch('http://localhost:3000/notes')
//     .then(response => response.json())
//     .then(data => {
//       callback(data)
//     });
// }

// getNotes(data => {console.log(data)});

module.exports = NotesView;