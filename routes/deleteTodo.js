const express = require('express')

const router = express.Router()

router.get('', (req, res) => {
    res.send('Delete a todo')
})

router.delete('', (req, res) => {
    res.send('Delete a todo')
})

module.exports = router
