const express = require('express');
const Task = require('../schema/taskSchema');

const router = express.Router();

router.post('', async (req, res) => {
    try {
        await Task.create({ content: req.body.task, });
    } catch (error) {
        res.json({
            error,
            success: false,
        });
    }

    res.json({
        taskContent,
        success: true,
    });
})

module.exports = router;
