import React, { useState, useEffect } from 'react';
import Collection from './Components/Collection'
import router from './Models/Router'
import axios from 'axios';

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
        <React.Fragment>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="title" type="text" className="validate"></input>
                  <label htmlFor="title">Title</label>
                  <span className="helper-text" data-error="wrong" data-success="right"></span>
                </div>
                <div className="input-field col s12">
                  <textarea id="textarea1" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Note</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
              </div>
            </form>
          </div>
        </React.Fragment>
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
