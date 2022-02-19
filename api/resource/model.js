// build your `Resource` model here
const db = require('../../data/dbConfig')
module.exports ={
    find,
    findById,
    create,
}

async function find(){
    // return Promise.resolve("ALL Resources")
    return db('resources')
}
async function findById(id){
    // return Promise.resolve("Find Resource by id")
    // select * from resources where resource_id=2;
    return db('resources').where('resource_id', id).first()
}
async function create(resource){
    // return Promise.resolve("create Resource")
    const [id] = await db('resources').insert(resource)
    return findById(id)
}
