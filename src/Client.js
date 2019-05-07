
import router from './Models/Router'
import axios from 'axios'

var saveNote = router.routes.save
var fetchNotes = router.routes.fetch
var fetchNote = router.routes.note

export const save = (callback,note) => {
    const result = axios({ url: router.server + saveNote.endpoint, method: saveNote.method, data:note });
    result.then((obj) => {
        if (callback) callback(obj);
    })
}

export const fetch = (callback) => {
    const result = axios({ url: router.server + fetchNotes.endpoint, method: fetchNotes.method });
    result.then((obj) => {
        if (callback) callback(obj);
    })
}

export const note = (callback,title) => {
    const result = axios({ url: router.server + fetchNote.endpoint + title, method: fetchNote.method });
    result.then((obj) => {
        if (callback) callback(obj);
    })
}