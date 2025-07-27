const fs = require('fs');
const { execSync } = require('child_process');

const REPO = 'https://github.com/davidsonfellipe/im-coder.git';
const TARGET = 'public/apps/im-coder';
const TEMP = 'temp-im-coder';

try {
  console.log('🔄 Syncing im-coder...');
  
  // Remove existing directories
  if (fs.existsSync(TARGET)) {
    fs.rmSync(TARGET, { recursive: true, force: true });
  }
  if (fs.existsSync(TEMP)) {
    fs.rmSync(TEMP, { recursive: true, force: true });
  }
  
  // Clone and copy src directory
  execSync(`git clone ${REPO} ${TEMP}`);
  fs.mkdirSync(TARGET, { recursive: true });
  execSync(`cp -r ${TEMP}/src/* ${TARGET}/`);
  fs.rmSync(TEMP, { recursive: true, force: true });
  
  console.log('✅ Sync completed!');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
} 