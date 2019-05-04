import React from 'react';

const Note = ({ note }) => {
    console.log("rendering note")
    return (
        <React.Fragment>
             <a href="#!" className="collection-item">{note.title}</a>
        </React.Fragment>
    )
}

export default Note;
