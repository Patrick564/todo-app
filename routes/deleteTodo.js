const express = require('express');
const Task = require('../schema/taskSchema');

const router = express.Router();

router.delete('', async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.body.id);
    } catch (error) {
        res.json({
            error,
            success: false,
        })
    }

    res.json({
        success: true,
    });
})

module.exports = router;
