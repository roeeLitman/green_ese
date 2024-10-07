const { request } = require('express')
const mongoose = require('mongoose')

const userSchma = new mongoose.Schema({
    user_name: {
    type: String,
    require:[true, 'user name is require'],
    },
    password: {
        type:String,
        require:[true,"worning password"]
    },
    role:{
        type: String,
        enum:['soldier', 'commander'],
        require:[true, 'you must to giv rool']
    },
    area: {
        type: String,
        enum:['center', 'north', ' south', 'west', ' east'],
        require:[true, "please provide area"]
    },
    units: {
        type:[Number],
        require:[true, 'please specify at least one unit']
    }
})

const UserModel = mongoose.model('user', userSchma)

module.exports = {
    UserModel,
    userSchma
}