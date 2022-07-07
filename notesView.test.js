/**
 * @jest-environment jsdom
 */

 require('jest-fetch-mock').enableMocks();

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
const NotesApi = require('./notesApi');

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

  it("clears previous notes displayed and then displays the notes the user has inputted", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#note_input')
    input.value = "Buy some carrots"

    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click()

    const input_2 = document.querySelector('#note_input')
    input_2.value = "Buy some beer"

    buttonEl.click()

    expect(document.querySelectorAll("div.note").length).toBe(2);
  })
  
  it("displays the notes from the api", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const api = new NotesApi();
    const view = new NotesView(model, api);

    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));

    api.loadNotes((responseFromApi => { model.setNotes(responseFromApi) }));
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual('This note is coming from the server')

  })

})