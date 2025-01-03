// lib/mongodb.js
import { MongoClient } from 'mongodb';
import { cache } from 'react';

const uri = process.env.MONGODB_URI;
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongodb URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const getClient = cache(async () => {
  const client = await clientPromise;
  return client;
});

export default clientPromise;