// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')
const {validateProject} = require('./project-middleware')
// [POST] /api/projects
// TEST:  http post :9000/api/projects
// TEST:  http post :9000/api/projects project_name=oio
router.post('/', validateProject, async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[POST] project"
        // })
        const project = await Project.create(req.body)
        res.status(201).json(project)
    }catch(err){
        next(err)
    }
})
// [GET] /api/projects
// TEST: http :9000/api/projects 
router.get('/', async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[GET] projects"
        // })
        const project = await Project.find()
        res.json(project)
    }catch(err){
        next(err)
    }
})

module.exports = router