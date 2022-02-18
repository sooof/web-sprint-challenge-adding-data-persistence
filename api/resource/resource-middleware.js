const Resource = require('./model')
const validateResource = (req, res, next) => {
    // console.log("validateResource middleware!!!")
    // next()
    try{
        const {resource_name} = req.body
        if(!resource_name || !resource_name.trim()){
            next({status: 400, message: "missing required resource_name field"})
        }else{
            req.resource_name = resource_name.trim()
            next()
        }
    }catch(err){
        next(err)
    }
}
const checkResourceUnique = async (req, res, next) => {
    // console.log("checkResourceUnique middleware!!!")
    // next()    
    try{
        const existResource = await Resource.findById(req.params.id)
        console.log(existResource)
        if(!existResource){
            next()
        }else{
            next({status:400, message: ` already exists`})
        }
    }catch(err){
        next(err)
    }
}
module.exports ={
    validateResource,
    checkResourceUnique,
}