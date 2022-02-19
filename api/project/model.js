// build your `Project` model here
const db = require('../../data/dbConfig')
module.exports = {
    find,
    create,
}

async function find(){
    return Promise.resolve("find all Project")
}

async function create(project){
    return Promise.resolve("create Project")
}
