const fs = require('fs');
const path = require('path');

const apiDir = path.join(__dirname, 'src/api/pay');

function getExports(apiFilePath) {
  if (!fs.existsSync(apiFilePath)) return null;
  const content = fs.readFileSync(apiFilePath, 'utf-8');
  const exportMatch = content.match(/export\s*\{([\s\S]*?)\}/);
  if (!exportMatch) return [];
  return exportMatch[1].split(',').map(s => s.trim()).filter(s => s);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file === 'index.js') {
      const relativePath = path.relative(apiDir, path.dirname(filePath));
      const exports = getExports(filePath);
      console.log(`\n=== ${relativePath} ===`);
      console.log(exports.join(', '));
    }
  }
}

walkDir(apiDir);
