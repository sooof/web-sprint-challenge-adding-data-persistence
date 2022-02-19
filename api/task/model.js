// build your `Task` model here
const db = require('../../data/dbConfig')
module.exports = {
    find,
    create,
}

async function find(){
    return Promise.resolve("Find ALL Task")
}
async function create(task){
    return Promise.resolve("create Task")
}
