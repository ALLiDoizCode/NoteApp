import React from 'react'
import Main from './Components/Main'
import Modal from './Components/Modal'
import EditModal from './Components/EditModal'
import Form from './Components/Form'
import { StateProvider } from './Components/State'
import { noteReducer, noteInitialState } from './Reducers/NoteReducer'

const App = () => {

  return (
    <div className="container">
      <div className="row"></div>
      <StateProvider initialState={noteInitialState} reducer={noteReducer}>
      <div className="row">
        <Form id=""/>
      </div>
        <Main />
        <Modal/>
        <EditModal/>        
      </StateProvider>
    </div>
  );
}

export default App;
