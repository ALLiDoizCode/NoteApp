var exports = module.exports = {};
var server = "https://noteapi-boomtown.herokuapp.com/"
//var server = "http://localhost:8080/"
var routes = 
{
    save:{
        endpoint:"note/save",
        method:"put",
        object: (obj) => {
            return JSON.stringify(obj)
        }
    },
    note:{
        endpoint:"note/",
        method:"get"
    },
    fetch:{
        endpoint:"note/fetch",
        method:"get"
    }
}

exports.routes = routes
exports.server = server