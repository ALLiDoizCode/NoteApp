import React, { useState, useEffect } from 'react';
import Collection from './Components/Collection'
import router from './Models/Router'
import axios from 'axios';

var route = router.routes.fetch

const App = React.memo(() => {
  const [object, setObject] = useState({
    notes: []
  })
  const fetch = () => {
    const result = axios({ url: router.server + route.endpoint, method: route.method });
    result.then((obj) => {
      setObject({notes:obj.data})
    })
  }
  useEffect(() => {
    setInterval(() => {
      fetch()
    },2000)
  },object);
  return (
    <Collection notes={object.notes} />
  );
})

export default App;
