const mongoose = require('mongoose');

const Taskschema = mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['To Do', "In Progress", "Done", "Removed"],
        default: 'To Do',
        required: true
    },
    // assignedToUser: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User'
    // }
});

module.exports = mongoose.model('Task', Taskschema);