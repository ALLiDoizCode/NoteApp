import React from 'react'
import Main from './Components/Main'
import Modal from './Components/Modal'
import Form from './Components/Form'
import { StateProvider } from './Components/State'
import { noteReducer, noteInitialState } from './Reducers/NoteReducer'

const App = () => {

  return (
    <div className="container">
      <div className="row"></div>
      <div className="row">
        <Form />
      </div>
      <StateProvider initialState={noteInitialState} reducer={noteReducer}>
        <Main />
        <Modal/>        
      </StateProvider>
    </div>
  );
}

export default App;
