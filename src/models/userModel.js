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
    rool:{
        type: String,
        enum:['soldier', 'commander'],
        require:[true, 'you must to giv rool']
    }

})

const UserModel = mongoose.model('user', userSchma)