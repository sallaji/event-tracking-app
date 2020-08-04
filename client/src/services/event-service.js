const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const getAll = (serverUrl) =>
  fetch(`${serverUrl}/events`, {
    method: 'GET',
    ...headers
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Problema cargando eventos')
    }
    return response.json()
  })
  .catch(e => console.error(e));

const eventService = {
  getAll
};

export default eventService;