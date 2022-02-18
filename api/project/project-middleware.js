
const validateProject = (req, res, next) => {
    // console.log("validateProject middleware!!!")
    // next()
    try{
        const {project_name} = req.body
        if(!project_name || !project_name.trim()){
            next({status: 400, message: "missing required project_name field"})
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports ={
    validateProject,
}