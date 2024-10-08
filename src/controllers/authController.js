const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {login: loginToSystem} = require('../services/authService')


const login =  async(req, res) => {
    try {
        //get token
        const token = await loginToSystem(req.body)
        //insert token into cooki
        res.cookie("token", token)
        //send atatus and message
        res.status(201).json({
            meg: 'you login in successfully' ,
            token
        })
        
    } catch (err) {
        console.log(err);
        res.status(400).json({
            err: err.message
        })
        
    }
}
const loguot = async (req, res) => {
    try {
        res.clearCookie("token")
        res.sendStatus(200)
      } catch (err) {
        res.sendStatus(500)
      }
}

module.exports = {
    login,
    loguot,
}