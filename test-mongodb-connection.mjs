import { MongoClient, ServerApiVersion } from 'mongodb';
import fs from 'fs';
import path from 'path';

// Read .env.local file
function loadEnv() {
  const envPath = path.join(process.cwd(), '.env.local');
  const envContent = fs.readFileSync(envPath, 'utf-8');
  const env = {};
  envContent.split('\n').forEach(line => {
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts) {
        env[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
  return env;
}

const envVars = loadEnv();
const uri = envVars.MONGODB_URI;

if (!uri) {
  console.error('❌ MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

console.log('🔍 Testing MongoDB Connection...\n');
console.log(`📍 Connection URI: ${uri.replace(/:[^@]*@/, ':****@')}`);
console.log('');

async function testConnection() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    connectTimeoutMS: 10000,
    socketTimeoutMS: 10000,
  });

  try {
    console.log('⏳ Attempting to connect...');
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!\n');

    // Ping the database
    const admin = client.db('admin');
    const pingResult = await admin.command({ ping: 1 });
    console.log('✅ Ping successful:', pingResult);

    // List databases
    const databases = await admin.listDatabases();
    console.log('\n📊 Available Databases:');
    databases.databases.forEach(db => {
      console.log(`   - ${db.name}`);
    });

    // Check infodra database
    const infodraDb = client.db('infodra');
    const collections = await infodraDb.listCollections().toArray();
    console.log('\n📋 Collections in "infodra" database:');
    if (collections.length > 0) {
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
    } else {
      console.log('   (No collections yet)');
    }

    // Check candidates collection specifically
    try {
      const candidatesCollection = infodraDb.collection('candidates');
      const count = await candidatesCollection.countDocuments();
      console.log(`\n📝 Documents in "candidates" collection: ${count}`);
    } catch (e) {
      console.log('\n📝 "candidates" collection does not exist yet');
    }

    console.log('\n🎉 All tests passed! MongoDB connection is working correctly.\n');

  } catch (error) {
    console.error('\n❌ Connection Failed:\n');
    console.error(`Error: ${error.message}`);
    if (error.code) console.error(`Code: ${error.code}`);
    if (error.syscall) console.error(`Syscall: ${error.syscall}`);
    
    console.error('\n🔧 Troubleshooting Tips:');
    console.log('1. Check your MongoDB Atlas IP Whitelist (Security → Network Access)');
    console.log('2. Verify your .env.local contains the correct MONGODB_URI');
    console.log('3. Ensure your credentials (username/password) are correct');
    console.log('4. Check if your internet connection is working');
    console.log('5. Try temporarily allowing all IPs (0.0.0.0/0) in MongoDB Atlas Network Access');
    
    process.exit(1);
  } finally {
    await client.close();
  }
}

testConnection();
