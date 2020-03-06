
const mongoConnect = function (callback) {
    MongoClient.connect('mongodb://localhost:27017')
        .then(client => {

            console.log('connected..........')
            callback(client);
        })
        .catch(err => {
            throw new Error('DB connection faild.........');
            
        });
       
}

module.exports = mongoConnect;