import React from 'react'
import { Alert } from 'reactstrap'

/**
 * Diese Komponente zeigt eine Meldung an den Benutzer an. Falls die Nachricht
 * null oder ein Leerstring ist, wird die Komponente nicht angezeigt.
 *
 * @param {string} message Die Nachricht, welche angezeigt werden soll
 * @param {bool} isError  Falls True, eine Fehlermeldung, sonst eine Infomeldung (Default: Fehlermeldung)
 */
const Message = ({ message, isError = true }) =>
    message ? <Alert color={ isError ? 'danger' : 'info' }>{ message }</Alert> : null

export default Message