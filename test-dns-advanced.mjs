import { getServers, setServers, resolve4 } from 'dns';
import { promisify } from 'util';
import { execSync } from 'child_process';

const dns_resolve = promisify(resolve4);

console.log('🔍 Advanced DNS & Network Diagnostics\n');

// Show current DNS servers
console.log('📡 Current DNS Servers:');
const dnsServers = getServers();
dnsServers.forEach(server => {
  console.log(`   - ${server}`);
});

// Test DNS with different servers
async function testDNSServers() {
  console.log('\n🧪 Testing DNS Resolution with Different Servers...\n');
  
  const mongoDBHost = 'infodra.mhgyzyc.mongodb.net';
  
  // Test with system default DNS
  console.log('1️⃣ System Default DNS:');
  try {
    const ips = await dns_resolve(mongoDBHost);
    console.log(`   ✅ Success: ${ips.join(', ')}`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }

  // Test with Google DNS (8.8.8.8)
  console.log('\n2️⃣ Google DNS (8.8.8.8):');
  try {
    setServers(['8.8.8.8']);
    const ips = await dns_resolve(mongoDBHost);
    console.log(`   ✅ Success: ${ips.join(', ')}`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }

  // Test with Cloudflare DNS (1.1.1.1)
  console.log('\n3️⃣ Cloudflare DNS (1.1.1.1):');
  try {
    setServers(['1.1.1.1']);
    const ips = await dns_resolve(mongoDBHost);
    console.log(`   ✅ Success: ${ips.join(', ')}`);
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }

  // Reset to default
  setServers(dnsServers);
}

// Check if MongoDB Atlas is accessible via nslookup
function testNslookup() {
  console.log('\n🔎 Attempting nslookup...\n');
  try {
    const result = execSync('nslookup infodra.mhgyzyc.mongodb.net').toString();
    console.log(result);
  } catch (error) {
    console.log(`nslookup failed: ${error.message}`);
  }
}

async function runDiagnostics() {
  await testDNSServers();
  testNslookup();

  console.log('\n📌 Recommendations:');
  console.log('   1. Check if your ISP/Firewall is blocking MongoDB Atlas domains');
  console.log('   2. Try using a VPN to bypass network restrictions');
  console.log('   3. Contact your network administrator if on a corporate network');
  console.log('   4. Ensure MongoDB Atlas IP whitelist includes your IP address');
  console.log('   5. Add alternative DNS servers to your network settings');
}

runDiagnostics().catch(console.error);
