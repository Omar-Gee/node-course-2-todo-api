// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to TodoApp server');
    };
    console.log('Connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed:false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insertt todo');
    //     };
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Omar',
    //     age: 30,
    //     location: 'Arnhem, Netherlands'
    // },(err, result) => {
    //     if (err){
    //         return console.log('Unable to insert into Users collection');
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});