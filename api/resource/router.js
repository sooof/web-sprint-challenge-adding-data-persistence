// build your `/api/resources` router here
const router =require('express').Router()
const {validateResource, checkResourceUnique} = require('./resource-middleware')
// [POST] /api/resources
// TEST:  http post :9000/api/resources
router.post('/', validateResource, checkResourceUnique, async (req, res, next)=>{
    try{
        res.json({
            message: "[POST] resource"
        })
    }catch(err){
        next(err)
    }
})

// [GET] /api/resources
// TEST:  http :9000/api/resources
router.get('/', async (req, res, next)=>{
    try{
        res.json({
            message: "[GET] resources"
        })
    }catch(err){
        next(err)
    }
})




module.exports =router