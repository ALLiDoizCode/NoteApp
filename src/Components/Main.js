import React, { useEffect } from 'react'
import {fetch} from '../Client'
import Collection from './Collection'
import { useStateValue } from './State'

const Main = () => {

    const [notes, dispatch] = useStateValue();

    useEffect(() => {
        fetch((obj) => {
            dispatch({current:notes.current,notes:obj.data})
            console.log(notes)
        })
    }, notes);

    return (
        <React.Fragment>
            <div className="row">
                <Collection />
            </div>
        </React.Fragment>
    );
}

export default React.memo(Main);
