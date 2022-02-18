
const validateTask = (req, res, next) => {
    console.log("validateTask middleware!!!")
    next()
}

module.exports ={
    validateTask,
}