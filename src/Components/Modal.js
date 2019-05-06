import React from 'react'
import { useStateValue } from './State'

function Modal() {
    const [notes, dispatch] = useStateValue();
    return (
        <div id="modal1" class="modal">
            <div class="modal-content">
                <h4>{notes.current.title}</h4>
                <p>{notes.current.text}</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
    )
}

export default Modal

