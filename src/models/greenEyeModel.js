const { request } = require('express')
const mongoose = require('mongoose')


const popultionSchma = new mongoose.Schema({
    areas:[String],
    units:[Number]
})

const greenEyeSchma = new mongoose.Schema({
    created_at: {
        type:Date,
        default: Date.now,
    },
    create_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:[true, 'pease tell who are ']
    },
    length:{
        type: Number,
        default: 3 
    },
    replies: {
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'user',
    },
    popultion: {
        type: popultionSchma
    }
})

const GreenEyeModel = mongoose.model('greenEye', greenEyeSchma)

module.exports = GreenEyeModel