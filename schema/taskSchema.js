const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    content: { type: String },
    status: { type: Boolean, default: false },
},
{
    collection: 'tasks'
});

module.exports = mongoose.model('Task', taskSchema);
