const jwt = require("jsonwebtoken")

const onlyCommanders = async(req, res, next) => {
    try {
        //chek cooki
        const token = req.cookies.token
        //translit cooki
        const userData = jwt.verify(token, process.env.TOKEN_SECRET)
        //chek if role is commender
        if (userData.role !== "commander") {
            res.status(403).send("You not have access ")
          }
        //insert into res.user
        req.user = userData
        // call next
        next()
    } catch (err) {
        console.log(err);
        res.status(401).json({mge: 'not founf token'})  
    }

}

const onlySoldiersAndCommanders  = async(req, res, next) => {
    try {
        //chek cooki
        const token = req.cookies.token
        //translit cooki
        const userData = jwt.verify(token, process.env.TOKEN_SECRET)
        //insert into res.user
        req.user = userData
        // call next
        next()
    } catch (err) {
        console.log(err);
        res.status(401).json({mge: 'not founf token'})  
    }

}

module.exports = {
    onlyCommanders,
    onlySoldiersAndCommanders
}