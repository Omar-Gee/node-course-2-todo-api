const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove('59e722030a2bdfe43b69ba37').then((doc) => {
    console.log(doc)
});

// Todo.findByIdAndRemove('59e721560a2bdfe43b69ba25').then((doc) => {
//     console.log(doc)
// });