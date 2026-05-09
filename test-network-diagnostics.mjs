import { createConnection } from 'net';
import { resolve4 } from 'dns';
import { promisify } from 'util';

const dns_resolve = promisify(resolve4);

console.log('🔍 Network Diagnostic Tests\n');

// 1. Test DNS Resolution
async function testDNS() {
  console.log('1️⃣ Testing DNS Resolution for MongoDB Host...');
  try {
    const ips = await dns_resolve('infodra.mhgyzyc.mongodb.net');
    console.log(`   ✅ DNS Resolution successful`);
    console.log(`   📍 Resolved IPs: ${ips.join(', ')}`);
    return true;
  } catch (error) {
    console.log(`   ❌ DNS Resolution failed: ${error.message}`);
    return false;
  }
}

// 2. Test Network Connectivity to MongoDB Port
async function testNetworkConnection() {
  console.log('\n2️⃣ Testing Network Connection to MongoDB (Port 27017)...');
  return new Promise((resolve) => {
    const socket = createConnection({
      host: 'infodra.mhgyzyc.mongodb.net',
      port: 27017,
      timeout: 5000,
    });

    socket.on('connect', () => {
      console.log('   ✅ Network connection successful');
      socket.destroy();
      resolve(true);
    });

    socket.on('error', (error) => {
      console.log(`   ❌ Network connection failed: ${error.message}`);
      resolve(false);
    });

    socket.on('timeout', () => {
      console.log('   ❌ Connection timeout - MongoDB host is not reachable');
      socket.destroy();
      resolve(false);
    });
  });
}

// 3. Check Internet Connection
async function testInternetConnection() {
  console.log('\n3️⃣ Testing General Internet Connection...');
  return new Promise((resolve) => {
    const socket = createConnection({
      host: 'google.com',
      port: 80,
      timeout: 5000,
    });

    socket.on('connect', () => {
      console.log('   ✅ Internet connection is working');
      socket.destroy();
      resolve(true);
    });

    socket.on('error', (error) => {
      console.log(`   ❌ Internet connection issue: ${error.message}`);
      resolve(false);
    });

    socket.on('timeout', () => {
      console.log('   ❌ Internet connection timeout');
      socket.destroy();
      resolve(false);
    });
  });
}

async function runDiagnostics() {
  const internetOk = await testInternetConnection();
  const dnsOk = await testDNS();
  const networkOk = await testNetworkConnection();

  console.log('\n📋 Summary:');
  console.log(`   Internet Connection: ${internetOk ? '✅ OK' : '❌ Failed'}`);
  console.log(`   DNS Resolution: ${dnsOk ? '✅ OK' : '❌ Failed'}`);
  console.log(`   MongoDB Port 27017: ${networkOk ? '✅ Reachable' : '❌ Not Reachable'}`);

  if (!networkOk) {
    console.log('\n📌 Possible Solutions:');
    if (internetOk && dnsOk) {
      console.log('   • The MongoDB host is DNS-resolvable but port 27017 is blocked');
      console.log('   • Your IP address may not be whitelisted in MongoDB Atlas');
      console.log('   • Your firewall/ISP may be blocking the connection');
      console.log('   • Try adding your IP to MongoDB Atlas Network Access settings');
    } else if (internetOk && !dnsOk) {
      console.log('   • DNS cannot resolve the MongoDB host');
      console.log('   • Check your internet connection');
      console.log('   • Verify the MongoDB URI is correct');
    } else {
      console.log('   • No internet connection detected');
      console.log('   • Please check your network connectivity');
    }
  }
}

runDiagnostics();
