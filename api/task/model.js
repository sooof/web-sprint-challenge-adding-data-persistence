// build your `Task` model here

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
