/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe("NotesView", () => {
  it("displays the notes", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk")
    view.displayNotes()
    expect(document.querySelectorAll("div.note").length).toBe(1);
  });

  it("displays the note the user has inputted", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#note_input')
    input.value = "Buy some carrots"

    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click()

    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual("Buy some carrots")

  })
});