// build your `/api/projects` router here

const express = require('express')
const Project = require('./model')

const router = express.Router()

// [GET] /api/projects
router.get('/', async (req, res, next)=>{
    try{
        // res.json({message: "[GET] /api/projects"})
        const project = await Project.getProjectAll()
        res.json(project)
    }catch(err){
        next(err)
    }
})

// [POST] /api/projects

router.post('/', async (req, res, next)=>{
    try{
        // res.json({message: "[POST] /api/projects"})
        const project = await Project.create(req.body)
        res.status(201).json(project)
    }catch(err){
        next(err)
    }
})

module.exports = router