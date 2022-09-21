import { MongoClient } from 'mongodb';
const ObjectId = require('mongodb').ObjectId; 
// POST /api/meetup

async function handler(req, res){
    if(req.method === "GET"){

        var meetupId = new ObjectId(req.query.meetupId);
        
        const client = await MongoClient.connect('mongodb://localhost:27017/meetups')
        const db = client.db();
        const meetupCollection = db.collection('meetups');
        const meetup = await meetupCollection.findOne({_id: meetupId});

        client.close();
        res.status(200).json({result: meetup});
    }
}

export default handler;