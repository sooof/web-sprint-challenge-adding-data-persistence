
const validateTask = (req, res, next) => {
    // console.log("validateTask middleware!!!")
    // next()A
    try{
        const {task_description} = req.body
        if(!task_description || !task_description.trim()){
            next({status: 400, message: "missing required task_description field"})
        }else{
            next()
        }
    }catch(err){
        next(err)
    }
}

module.exports ={
    validateTask,
}