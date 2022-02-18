// build your `Project` model here

module.exports = {
    find,
    // findById,
    create,
}

async function find(){
    return Promise.resolve("find all Project")
}
async function findById(id){
    return Promise.resolve("find  Project by i ")
}
async function create(project){
    return Promise.resolve("create Project")
}
