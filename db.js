const mongodb=require('mongodb');
const mongoClient=mongodb.MongoClient;
let database;
async function getDataBase(){
    const client=await mongoClient.connect('mongodb://127.0.0.1:27017')
    database= await client.db('bookedemo')
    if(!database){
        console.log('no db found');
    }
    return database;
}

module.exports={getDataBase}