import _ from 'lodash'

/**
 * Ein Funktion, welche den Fetch-Request absetzt.
 *
 * @param {string} url Der URL
 * @param {object} requestObject Das Objekt mit den Headern, Methoden (wenn nicht GET) (Optional)
 * @param {function} dataFn Die Funktion, welche die Daten verarbeitet
 * @param {function} errorFn Die Funktion, die den Fehlerzustand setzt
 * @param {function} messageFn Die Funktion, die die Fehlernachricht setzt
 * @param {function} loadingFn Die Funktion, die den Loadingzustand setzt
 * @param {string} errorText Den Fehlertext
 */
const doFetch = async ({ url, requestObject, dataFn, errorFn, messageFn, loadingFn, errorText }) => {
  try {
    (loadingFn || _.identity)(true);
    const response = await fetch(url, requestObject);
    if(response.ok) {
      // Mit leerem Response umgehen:
      const json = response.status !== 204 ? await response.json() : null;
      dataFn(json);
      errorFn(false);
      messageFn('')
    }
    else {
      throw new Error(`${ errorText }: ${ response.status }`)
    }
  }
  catch(error) {
    errorFn(true);
    messageFn(error.message)
  }
  (loadingFn || _.identity)(false)
};

export default doFetch