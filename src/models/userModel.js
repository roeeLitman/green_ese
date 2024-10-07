const { request } = require('express')
const mongoose = require('mongoose')

const userSchma = new mongoose.Schema({
    user_name: {
    type: String,
    require:[true, 'user name is require'],
    },
    password: {
        type:String,
        required:[true,"worning password"]
    },
    role:{
        type: String,
        enum:['soldier', 'commander'],
        required:[true, 'you must to giv rool']
    },
    area: {
        type: String,
        enum:['center', 'north', ' south', 'west', ' east'],
        required:[true, "please provide area"]
    },
    units: {
        type:[Number],
        required:[true, 'please specify at least one unit']
    }
})

const UserModel = mongoose.model('user', userSchma)

module.exports = {
    UserModel,
    userSchma
}