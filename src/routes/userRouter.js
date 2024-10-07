const router = require('express').Router()
// const {  } = require('../controllers/greenEysController')
const { register, setSettings, getProfile } = require('../controllers/userController')


router.post('/register', register)

router.get('/profile', getProfile)

router.get('/settings', setSettings)

module.exports = router

