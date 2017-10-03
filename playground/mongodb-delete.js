// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to TodoApp server');
    };
    console.log('Connected to mongoDB server');

    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((res) =>{
    //     console.log(res)
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) =>{
    //     console.log(res)
    // });

    //findOneAndDellete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // #CHALLENGES
    // db.collection('Users').deleteMany({name: 'Omar'}).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndDelete({
        _id: 123
    }).then((res) => {
        console.log(res)
    });

    //db.close();
});