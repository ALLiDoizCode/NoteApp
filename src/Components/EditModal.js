import React from 'react'
import { useStateValue } from './State'
import Form from './Form'

function EditModal() {
    const [notes, dispatch] = useStateValue();
    return (
        <div id="modal2" className="modal">
            <div className="modal-content">
                <h4>{notes.current.title}</h4>
                <Form  id={notes.current._id}/>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
    )
}

export default EditModal
