import React, { useState, useEffect } from 'react'
import Collection from './Components/Collection'
import Form from './Components/Form'
import router from './Models/Router'
import axios from 'axios'

var route = router.routes.fetch

const App = () => {
  const [object, setObject] = useState({
    notes: []
  })
  const fetch = () => {
    const result = axios({ url: router.server + route.endpoint, method: route.method });
    result.then((obj) => {
      setObject({ notes: obj.data })
    })
  }
  useEffect(() => {
    setInterval(() => {
      fetch()
    }, 2000)
  }, object);

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        <Form/>
      </div>
      <div className="row">
        <div>
          <Collection notes={object.notes} />
        </div>
      </div>
    </div>
  );
}

export default App;
