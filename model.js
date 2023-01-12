//to do model
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A todo must have a title'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'A todo must have a description']
    },
    completed: {
        type: Boolean,
        default: false
    },
});


const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
