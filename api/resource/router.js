

const express = require('express')
const Resource = require('./model')

const router = express.Router()

// [GET] /api/resources
router.get('/', async (req, res, next)=>{
    try{
        const resource = await Resource.getResourceAll()
        res.json(resource)
    }catch(err){
        next(err)
    }
})

// [POST] /api/resources
router.post('/', async (req, res, next)=>{
    try{
        const resource = await Resource.create(req.body)
        res.status(201).json(resource)
    }catch(err){
        next(err)
    }
})

module.exports = router