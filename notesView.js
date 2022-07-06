class NotesView {
  constructor

  displayNotes() {
    this.mainContainerEl = document.querySelector('#main-container');
    let div = document.createElement("div");
    div.innerText = "I exist";
    div.className = "note";
    this.mainContainerEl.append(div);
    
    console.log(div);
    console.log(document.querySelectorAll("div").length);
    console.log(document.querySelectorAll("div.note").length);
  }
}

module.exports = NotesView;