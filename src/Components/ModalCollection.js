import React from 'react'
import Modal from './Modal'
import { useStateValue } from './State'

const ModalCollection = () => {
    console.log("rendering collection")
    const [{notes}, dispatch] = useStateValue({ notes: [] });
    return (
        <React.Fragment>
            {
                notes.map((note) => (
                    <Modal key={note._id} note={note} />
                ))
            }
        </React.Fragment>
    );
}

export default React.memo(ModalCollection, ((prev, current) => {
    return JSON.stringify(prev) == JSON.stringify(current)
}));
