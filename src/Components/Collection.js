import React from 'react';
import Note from './Notes'

const Collection = ({ notes }) => {
    console.log("rendering collection")
    return (
        <div className="collection">
            {
                notes.map((note) => (
                    <Note  key={note._id} note={note}/>
                ))
            }
        </div>
    );
}

export default React.memo(Collection,((prev,current) => {
    return JSON.stringify(prev) == JSON.stringify(current)
}));
