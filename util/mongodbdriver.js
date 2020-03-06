const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
    .then(client => {

        console.log('connected..........')
        const db = client.db('tesDB');
        db.collection('products').find().each( (err, doc)=>{
            console.log(doc);
            client.close();
        })
    
    }).catch(err => console.log(err));
