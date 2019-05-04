import React from 'react';
import Note from './Notes'

const Collection = ({ notes }) => {
    console.log("rendering collection")
    return (
        <React.Fragment>
            {
                notes.map((note) => (
                    <Note  key={note._id} note={note}/>
                ))
            }
        </React.Fragment>
    );
}

export default React.memo(Collection,((prev,current) => {
    return JSON.stringify(prev) == JSON.stringify(current)
}));
