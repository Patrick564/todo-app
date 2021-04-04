const express = require('express');
const Task = require('../schema/taskSchema');

const router = express.Router();

router.get('', async (req, res) => {
    let tasks = await Task.find()

    res.json({
        tasks,
    })
})

module.exports = router;
