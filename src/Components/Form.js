import React from 'react'
import { save, fetch } from '../Client'
import { useStateValue } from './State'

const Form = ({id}) => {
    console.log("rendering Form")
    
    const [notes, dispatch] = useStateValue();

    var submit = (e) => {
        e.preventDefault();
        if (note.text == "" || note.title == "") return
        note._id = id
        save(() => {
            note = {
                _id: "",
                title: "",
                text: ""
            }
            fetch((obj) => {
                dispatch({ current: notes.current, notes: obj.data })
                console.log(notes)
            })
        }, note)
        e.target.reset()
    }

    return (
        <React.Fragment>
            <div className="row">
                <form className="col s12" onSubmit={submit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" maxLength="20" onChange={(e) => note.title = e.target.value}></input>
                            <label htmlFor="title">Title</label>
                            <span className="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" onChange={(e) => note.text = e.target.value}></textarea>
                            <label htmlFor="textarea1">Note</label>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

var note = {
    _id: "",
    title: "",
    text: ""
}

export default React.memo(Form)