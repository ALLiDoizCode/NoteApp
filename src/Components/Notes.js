import React from 'react'

const Note = ({ note }) => {
    console.log("rendering note")
    return (
        <React.Fragment>
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{note.title}</span>
                        <p style={{color:"#757575"}}>{note.text}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">Edit</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Note;
