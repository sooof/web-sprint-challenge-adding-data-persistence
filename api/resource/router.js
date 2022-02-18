// build your `/api/resources` router here
const Resource = require('./model')
const router =require('express').Router()
const {validateResource, checkResourceUnique} = require('./resource-middleware')
// [POST] /api/resources
// TEST:  http post :9000/api/resources
// TEST: http post :9000/api/resources resource_name=jkjk
router.post('/', validateResource, checkResourceUnique, async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[POST] resource"
        // })
        const resource = await Resource.create(req.body)
        res.status(201).json(resource)
    }catch(err){
        next(err)
    }
})

// [GET] /api/resources
// TEST:  http :9000/api/resources
router.get('/', async (req, res, next)=>{
    try{
        // res.json({
        //     message: "[GET] resources"
        // })
        const resource = await Resource.find()
        res.json(resource)
    }catch(err){
        next(err)
    }
})




module.exports =router