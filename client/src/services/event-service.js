import doFetch from "../network/NetworkService";

const headers = {headers: {'Content-Type': 'application/json; charset=utf-8'}};

const getAll = ({serverUrl, queryStringParams}) =>
    fetch(`${serverUrl}/events${queryStringParams || ''}`, {
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

const getEvent = (serverUrl, id) =>
    fetch(`${serverUrl}/events/${id}`, {
      method: 'GET',
      ...headers
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Nicht gefunden: " + response.status)
      }
      return response.json()

    })
    .catch(e => console.error(e));

const eventService = {
  getAll,
  getEvent
};

export default eventService;