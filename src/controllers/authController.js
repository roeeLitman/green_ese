const { UserModel } = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login =  async(user) => {
    try {
        const dbUser = await UserModel.findOne({user_name: user.user_name }) 

        if (!dbUser) throw new Error('user not found')

        if (!(await bcrypt.compare(user.password, dbUser.password))){
            throw new Error('password worning')
        }
        const token = await jwt.sign({
            user_name,
            role: dbUser.role
        }, process.env.TOKEN_SECRET)

    } catch (err) {
        
    }
}
const loguot =  () => {
    try {
        
    } catch (err) {
        
    }
}

module.exports = {
    login,
    loguot,
}