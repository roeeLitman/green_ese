const mongoose = require('mongoose')


const connectionToMongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/green_eye')
    } catch (err) {
        console.log(err);
        
    }
}

module.exports = {
    connectionToMongo
}