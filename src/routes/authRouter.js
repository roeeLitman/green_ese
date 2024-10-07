const router = require('express').Router()
const {login, loguot} = require('../controllers/authController')

router.post('/login', login)

router.post('/loguot', loguot)

module.exports = router

