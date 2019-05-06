import React, { useEffect } from 'react'
import router from '../Models/Router'
import axios from 'axios'
import Collection from './Collection'
import Modal from './Modal'
import { useStateValue } from './State'

var route = router.routes.fetch

const Main = () => {

    const [{notes}, dispatch] = useStateValue();

    const fetch = () => {
        const result = axios({ url: router.server + route.endpoint, method: route.method });
        result.then((obj) => {
            dispatch({current:{},notes:obj.data})
            console.log(notes)
        })
    }

    useEffect(() => {
        setInterval(() => {
            fetch()
        }, 2000)
    }, notes);

    return (
        <React.Fragment>
            <div className="row">
                <Collection />
            </div>
        </React.Fragment>
    );
}

export default Main;
