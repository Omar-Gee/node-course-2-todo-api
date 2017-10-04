// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
        return console.log('Unable to connect to TodoApp server');
    };
    console.log('Connected to mongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('59d3947e93a91da0e0c096b7')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // } , {
    //     returnOriginal: false 
    // }).then((res) => {
    //     console.log(res)
    // });

    // ================================ CHALLENGE ==============================
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('59d3855d02648821f05b35f1')
    },{
        $set: {
            name: 'Omar'
        },
        $inc: {
            age: 31
        }
    },{
        returnOriginal:false
    }).then((res) => {
        console.log(res)
    });
    //db.close();
});