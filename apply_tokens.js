const fs = require('fs');
const path = require('path');

const replacements = {
  '\\[#C2410C\\]': 'brand-dark',
  '\\[#FF5C00\\]': 'brand-light',
  '\\[#ea580c\\]': 'brand-hover',
  '\\[#FF8A00\\]': 'brand-yellow',
  '\\[#0F172A\\]': 'surface-dark',
  '\\[#0B1120\\]': 'surface-darker',
  '\\[#FAFAFA\\]': 'surface-light',
  '\\[#FFFCF8\\]': 'surface-cream',
  '\\[0_0_20px_rgba\\(194,65,12,0\\.3\\)\\]': 'glow-primary',
  '\\[0_0_30px_rgba\\(194,65,12,0\\.5\\)\\]': 'glow-primary-hover',
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      for (const [key, value] of Object.entries(replacements)) {
        const regex = new RegExp(key, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, value);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated tokens in: ${fullPath}`);
      }
    }
  });
}

processDirectory(path.join(process.cwd(), 'components'));
processDirectory(path.join(process.cwd(), 'app'));
console.log('Token replacement complete.');
