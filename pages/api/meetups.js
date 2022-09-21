import { MongoClient } from 'mongodb';

// POST /api/meetups

async function handler(req, res){
    if(req.method === "GET"){
        const client = await MongoClient.connect('mongodb://localhost:27017/meetups')
        const db = client.db();
        const meetupCollection = db.collection('meetups');

        const meetups = await meetupCollection.find().toArray();

        client.close();

        res.status(200).json({result: meetups});
    }
}

export default handler;