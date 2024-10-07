const bcrypt = require('bcrypt')
const { UserModel } = require('../models/userModel')

const creteUser = async (user) => {
    try {
        const {user_name, password, role, area, units} = user
        const hashePassword = await bcrypt.hash(password, 10)
        const dbUser = new UserModel({
            user_name,
            password: hashePassword,
            role,
            area,
            units
        })
        await dbUser.save()

    } catch (err) {
        console.log(err);
        throw err   
    }
}

module.exports = {
    creteUser
}