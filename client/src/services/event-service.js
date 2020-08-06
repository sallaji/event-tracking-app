const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const getAll = (serverUrl, queryObject) =>
    fetch(`${serverUrl}/events${queryObject || ''}`, {
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