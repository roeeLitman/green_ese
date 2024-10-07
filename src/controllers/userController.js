const {creteUser} = require('../services/userService')

const register = async (req, res) => {
    try {
         await creteUser(req.body)
         res.status(200).json({
            mge: "user created"
         })
    } catch (err) {
        res.status(400).json({err:err.message})
    }
}

const getProfile =  () => {
    try {
        
    } catch (err) {
        
    }
}

const setSettings =  () => {
    try {
        
    } catch (err) {
        
    }
}

module.exports = {
    register,
    getProfile,
    setSettings
}