// build your `Resource` model here

module.exports ={
    find,
    findById,
    create,
}

async function find(){
    return Promise.resolve("ALL Resources")
}
async function findById(id){
    return Promise.resolve("Find Resource by id")
}
async function create(resource){
    return Promise.resolve("create Resource")
}
