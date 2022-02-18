// build your `/api/tasks` router here
const router = require('express').Router()
const {validateTask} = require('./task-middleware')
// [POST] /api/tasks
// TEST:  http post :9000/api/tasks
router.post('/', validateTask, async (req, res, next)=>{
    try{
        res.json({
            message: "[POST] task"
        })
    }catch(err){
        next(err)
    }
})
// [GET] /api/tasks
// http :9000/api/tasks 
router.get('/', async (req, res, next)=>{
    try{
        res.json({
            message: "[GET] tasks"
        })
    }catch(err){
        next(err)
    }
})
module.exports = router