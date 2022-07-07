const Api = require('./notesApi');

require('jest-fetch-mock').enableMocks();

describe(Api, () => {
  it('calls fetch and loads data', () => {
    const api = new Api();

    fetch.mockResponseOnce(JSON.stringify(['This note is coming from the server']));

    api.loadNotes((responseFromApi) => {
      expect(responseFromApi).toEqual(['This note is coming from the server']);
    })
  })
})