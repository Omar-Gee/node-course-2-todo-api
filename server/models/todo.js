var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
    text: {
     type: String,
     required: true,
     minlength: 1,
     trim: true
    },
    completed: {
     type: Boolean,
     default: false
    },
    completedAt: {
     type: Number,
     default: null
    }
 });

module.exports = {
    Todo
};

 // var otherTodo = new Todo({
//     text: '   Complete this course  '
// });

// otherTodo.save().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//     console.log('Unable to save',e);
// });

// User 
// email - required -trim it - set type string - set minlength 1