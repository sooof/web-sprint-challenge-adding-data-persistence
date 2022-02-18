
const validateProject = (req, res, next) => {
    console.log("validateProject middleware!!!")
    next()
}

module.exports ={
    validateProject,
}