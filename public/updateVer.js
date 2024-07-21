/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, 'manifest.json');

fs.readFile(manifestPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading manifest.json:', err);
    return;
  }

  try {
    const manifest = JSON.parse(data);

    if (manifest.version) {
      let version = parseFloat(manifest.version);
      version += 0.1;
      manifest.version = version.toFixed(1); // 소수점 한 자리로 고정
    } else {
      console.error('No version field found in manifest.json');
      return;
    }

    fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing manifest.json:', err);
        return;
      }
      console.log('manifest.json version updated to', manifest.version);
    });
  } catch (e) {
    console.error('Error parsing manifest.json:', e);
  }
});
