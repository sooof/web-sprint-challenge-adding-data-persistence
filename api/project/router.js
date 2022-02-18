// build your `/api/projects` router here
const router = require('express').Router()
const {validateProject} = require('./project-middleware')
// [POST] /api/projects
// TEST:  http post :9000/api/projects
router.post('/', validateProject, async (req, res, next)=>{
    try{
        res.json({
            message: "[POST] project"
        })
    }catch(err){
        next(err)
    }
})
// [GET] /api/projects
// TEST: http :9000/api/projects 
router.get('/', async (req, res, next)=>{
    try{
        res.json({
            message: "[GET] projects"
        })
    }catch(err){
        next(err)
    }
})

module.exports = router