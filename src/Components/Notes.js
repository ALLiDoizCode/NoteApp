import React from 'react'
const Note = ({ note }) => {
    console.log("rendering note")
    return (
        <div className="col s12 m3">
            <div className="card">
                <div className="card-panel hoverable">
                    <a className="modal-trigger" href="#modal1">
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


    )
}

export default Note;
