import React from 'react'
import { useStateValue } from './State'

const Note = ({ note, notes }) => {
    console.log("rendering note")
    const [state, dispatch] = useStateValue();
    return (
        <React.Fragment>
            <div className="col s12 m3">
                <div className="card">
                    <div className="card-panel hoverable">
                    <a className="modal-trigger" href="#modal1" onClick= {(e) => {
                        e.preventDefault();
                        dispatch({current:note,notes:notes})
                        console.log("boom")
                    }}>
                            <div className="card-content">
                                <span className="card-title truncate black-text">{note.title}</span>
                                <p className="truncate" style={{ color: "#757575" }}>{note.text}</p>
                            </div>
                        </a>
                        <div className="card-action">
                            <a href="http://example.com">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Note;

//"#modal1"