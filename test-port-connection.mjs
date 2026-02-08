import net from 'net';

console.log('🔍 Testing Network Connection to MongoDB Port 27017\n');

const mongoHost = 'infodra.mhgyzyc.mongodb.net';
const mongoPort = 27017;

const socket = net.createConnection({
  host: mongoHost,
  port: mongoPort,
  timeout: 10000,
});

socket.on('connect', () => {
  console.log(`✅ Successfully connected to ${mongoHost}:${mongoPort}`);
  console.log('✅ Network connection is working!\n');
  socket.destroy();
  process.exit(0);
});

socket.on('error', (err) => {
  console.log(`❌ Connection Error: ${err.message}`);
  console.log(`Code: ${err.code}\n`);
  
  if (err.code === 'ECONNREFUSED') {
    console.log('🔧 Troubleshooting:');
    console.log('   • MongoDB port (27017) is explicitly refusing connections');
    console.log('   • Could be: Firewall rule, ISP blocking, or MongoDB Atlas settings');
  } else if (err.code === 'ENOTFOUND') {
    console.log('🔧 Troubleshooting:');
    console.log('   • DNS cannot resolve the MongoDB host');
  } else if (err.code === 'ETIMEDOUT') {
    console.log('🔧 Troubleshooting:');
    console.log('   • Connection timeout - host is not responding');
    console.log('   • Could be network latency or firewall silently dropping packets');
  }
  
  process.exit(1);
});

socket.on('timeout', () => {
  console.log('⏱️ Connection Timeout');
  console.log('   The MongoDB server is not responding within 10 seconds');
  socket.destroy();
  process.exit(1);
});

console.log(`Attempting to connect to ${mongoHost}:${mongoPort}...\n`);
