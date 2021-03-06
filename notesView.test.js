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
    const fakeApi = { loadNotes: () => { 
      model.setNotes(['Testing the fake api']); 
      view.displayNotes();
    }}
    
    const view = new NotesView(model, fakeApi);
   
   
    
    view.displayNotesFromApi();
   
    expect(document.querySelectorAll("div.note").length).toBe(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual('Testing the fake api')

  })

})