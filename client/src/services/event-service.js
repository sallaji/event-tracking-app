import doFetch from "../network/NetworkService";
import authHeader from "./data_service";

const getAll = ({serverUrl, queryStringParams}) =>
    fetch(`${serverUrl}/events${queryStringParams || ''}`, {
      method: 'GET',
      ...authHeader(),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Problema cargando eventos')
      }
      return response.json()
    })
    .catch(e => console.error(e));

const get = (serverUrl, id) =>
    fetch(`${serverUrl}/events/${id}`, {
      method: 'GET',
      ...authHeader()
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Nicht gefunden: " + response.status)
      }
      return response.json()

    })
    .catch(e => console.error(e));

const create = (serverUrl, event) =>
    fetch(`${serverUrl}/events`, {
      method: 'POST',
      body: JSON.stringify(event),
      ...authHeader()
    })
    .then(response => response.json())
    .catch(err => console.error(err));

const update = (serverUrl, event) =>
    fetch(`${serverUrl}/events/${event.id}`, {
      method: 'PUT',
      body: JSON.stringify(event),
      ...authHeader()
    })
    .then(response => response.json())
    .catch(err => console.error(err));

const eventService = {
  getAll,
  get,
  create,
  update
};

export default eventService;