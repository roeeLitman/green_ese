const router = require('express').Router()
const { createPoll, getNotifications, getPollById, reply, deletePoll } = require('../controllers/greenEysController')
const { onlyCommanders, onlySoldiersAndCommanders } = require('../middlewares/authmiddeleware')

router.post('/',onlyCommanders ,createPoll)

router.get('/my', onlySoldiersAndCommanders, getNotifications)

router.get('/:id',onlyCommanders, getPollById)

router.post('/reply',onlySoldiersAndCommanders, reply)

router.delete('/:id', onlyCommanders, deletePoll)

module.exports = router

