const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
    res.send('Create a new todo.')
})

router.post('', (req, res) => {
    res.send('Create a new todo.')
})

module.exports = router
