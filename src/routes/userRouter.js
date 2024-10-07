const router = require('express').Router()
const { getPollById } = require('../controllers/greenEysController')
const { register, setSettings } = require('../controllers/userController')


router.post('/register', register)

router.get('/profile', getPollById)

router.get('/settings', setSettings)

module.exports = router

