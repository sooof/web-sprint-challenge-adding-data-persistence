
const validateResource = (req, res, next) => {
    console.log("validateResource middleware!!!")
    next()
}
const checkResourceUnique = (req, res, next) => {
    console.log("checkResourceUnique middleware!!!")
    next()    
}
module.exports ={
    validateResource,
    checkResourceUnique,
}