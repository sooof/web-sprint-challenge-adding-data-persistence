// build your `Task` model here
const db =  require('../../data/dbConfig.js')

module.exports = {
    getTaskAll,
    getTaskById,
    create,
}

async function getTaskAll() {
   const rows = await db('tasks as t')
                    .join('projects as p', 't.project_id', 'p.project_id')
                    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'project_name', 'project_description' )
    const result = rows.map( row =>{
        row.task_completed? row.task_completed=true : row.task_completed=false 
        return row
    })
    return result
}

async function getTaskById(id) {
    const row = await db('tasks').where('task_id', id).first()
    row.task_completed? row.task_completed=true : row.task_completed=false 
    return row 
}


async function getById(id) {
    const row = await  db('tasks').where('task_id', id).first()
      if (row.task_completed) row.task_completed = true  
      else row.task_completed = false
    return row
  }
 async function create (task) {
    const [id] = await db('tasks').insert(task);
    return getById(id);
  }