import React from 'react'
import router from '../Models/Router'
import axios from 'axios'

var route = router.routes.save

const Form = () => {
    console.log("rendering Form")
    return (
        <React.Fragment>
            <div className="row">
                <form className="col s12" onSubmit={submit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="title" type="text" className="validate" maxLength="20" onChange = {(e) => note.title = e.target.value}></input>
                            <label htmlFor="title">Title</label>
                            <span className="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" maxLength="50" onChange = {(e) => note.text = e.target.value}></textarea>
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
const save = () => {
    const result = axios({ url: router.server + route.endpoint, method: route.method, data:note });
    result.then((obj) => {
    })
}

var submit = (e) => {
    e.preventDefault();
    if(!note.text && !note.title) return
    save()
    e.target.reset()
  }

export default React.memo(Form)