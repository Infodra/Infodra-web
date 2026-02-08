import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not defined");
}

interface MongoGlobal {
  conn: MongoClient | null;
  promise: Promise<MongoClient> | null;
}

// Create a type that includes mongo so we can use it as a global variable
declare global {
  var mongo: MongoGlobal | undefined;
}

let cached: MongoGlobal = global.mongo || { conn: null, promise: null };

if (!global.mongo) {
  global.mongo = cached;
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };

    cached.promise = MongoClient.connect(uri!, opts);
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export async function getDatabase() {
  const client = await connectToDatabase();
  return client.db("infodra_db");
}
