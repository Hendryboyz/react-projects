// /api/meetups
import {ObjectId, MongoClient, ServerApiVersion} from 'mongodb';

const database = process.env.MONGO_DATABASE;

function createMongoClient() {
  const dbUser = process.env.MONGO_USER;
  const dbPassword = process.env.MONGO_PASSWORD;
  const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.holc87t.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`;
  return new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
}

const mongoClient = createMongoClient();

export function getMeetup(meetupId) {
  return accessMeetupCollection((meetupCollection) => {
    const objectId = new ObjectId(meetupId);
    return meetupCollection.findOne({ _id: objectId });
  });
}

export async function getMeetupIds() {
  return await accessMeetupCollection(async (meetupCollection) => {
    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
    return meetups.map(meetup => meetup._id.toString());
  });
}

export async function listMeetup() {
  return await accessMeetupCollection((meetupCollection) => {
    return meetupCollection.find().toArray();
  });
}

async function accessMeetupCollection(actionFn) {
  const conn = await mongoClient.connect();
  try {
    const db = conn.db();
    const meetupCollection = db.collection(database);
    return await actionFn(meetupCollection);
  } catch (error) {
    console.error(error);
    return undefined;
  } finally {
    await conn.close();
  }
}

async function createMeetup({title, image, address, description}) {
  return await accessMeetupCollection(async (meetupCollection) => {
    const result =
      await meetupCollection.insertOne({ title, image, address, description });

    console.log(result);
    return result.insertedId;
  });
}

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const {title, image, address, description} = data;
    const insertedId = await createMeetup({title, image, address, description});
    if (insertedId) {
      res.status(201).json({ message: 'Meetup inserted!' });
    } else {
      res.status(422).json({ message: 'Fail to insert meetup!' });
    }
  }
}

export default handler;