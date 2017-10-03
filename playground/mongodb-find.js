// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to TodoApp server');
    };
    console.log('Connected to mongoDB server');

    db.collection('Todos').find({
        _id: new ObjectId('59d38a4393a91da0e0c092a8')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs , undefined,2))
    },(err) => {
        console.log('Unable to etch records,', err)
    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // },(err) => {
    //     console.log('Unable to etch records,', err)
    // });

    db.collection('Users').find({
        name: 'Omar'
    }).toArray().then((docs) => {
        console.log('Users:');
        console.log(JSON.stringify(docs , undefined,2))
    },(err) => {
        console.log('Unable to etch records,', err)
    });

    //db.close();
});