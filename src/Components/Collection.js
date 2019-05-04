import React from 'react';

const Collection = React.memo(({ notes }) => {
    return (
        <div className="collection">
            {
                notes.map((note) => (
                    <a href="#!" className="collection-item" key={note._id}>{note.title}</a>
                ))
            }
        </div>
    );
})

export default Collection;
