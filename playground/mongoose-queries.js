const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')


 var id = '59d4ad943b78e3941ea85f97';

// if (!ObjectId.isValid(id)){
//     console.log('Id not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos,',todos);
// }) ;

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo,',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id,',todo);
// }).catch((e) => {
//     console.log(e);
// })

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
    },(e) => {
        console.log(e);
    });
