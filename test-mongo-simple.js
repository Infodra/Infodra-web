const { MongoClient, ServerApiVersion } = require('mongodb');

// Get URI from environment or use the one provided
const uri = process.env.MONGODB_URI || "mongodb+srv://Infodra:Infodra0226@infodra.mhgyzyc.mongodb.net/?appName=Infodra";

console.log('🔍 Testing MongoDB Connection...\n');
console.log(`📍 URI: ${uri.replace(/:[^@]*@/, ':****@')}\n`);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log('⏳ Connecting to MongoDB...');
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    const result = await client.db("admin").command({ ping: 1 });
    console.log("✅ Pinged your deployment. You successfully connected to MongoDB!");
    console.log(`Response: ${JSON.stringify(result)}\n`);
    
    // List databases
    const databases = await client.db("admin").admin().listDatabases();
    console.log('📊 Available Databases:');
    databases.databases.forEach(db => {
      console.log(`   - ${db.name}`);
    });
    
    console.log('\n✅ MongoDB Connection Test Successful! 🎉');
    
  } catch (error) {
    console.error('\n❌ Connection Failed:');
    console.error(`Error: ${error.message}`);
    console.error(`Code: ${error.code}`);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
