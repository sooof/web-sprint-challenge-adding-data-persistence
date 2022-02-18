// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')
const {validateTask} = require('./task-middleware')
// [POST] /api/tasks
// TEST:  http post :9000/api/tasks
// TEST:  http post :9000/api/tasks task_description=test
router.post('/', validateTask, async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[POST] task"
        // })
        const task = await Task.create(req.body)
        res.status(201).json(task)
    }catch(err){
        next(err)
    }
})
// [GET] /api/tasks
// http :9000/api/tasks 
router.get('/', async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[GET] tasks"
        // })
        const task = await Task.find()
        res.json(task)
    }catch(err){
        next(err)
    }
})
module.exports = router