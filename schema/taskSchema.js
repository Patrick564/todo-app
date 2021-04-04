const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    date: { type: Date, default: Date.now },
    content: { type: String },
    status: { type: Boolean },
},
{
    collection: 'task'
});

module.exports = mongoose.model('Task', taskSchema);
