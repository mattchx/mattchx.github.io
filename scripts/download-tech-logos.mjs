import { promises as fs } from 'fs';
import fs_standard from 'fs';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const logoUrls = {
  'nodejs': 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
  'javascript': 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png',
  'html5': 'https://www.w3.org/html/logo/downloads/HTML5_Badge.svg',
  'css3': 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg',
  'typescript': 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
  'aws': 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
  'nextjs': 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
  'git': 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
  'mongodb': 'https://www.mongodb.com/assets/images/global/leaf.png',
  'firebase': 'https://cdn.worldvectorlogo.com/logos/firebase-1.svg',
  'react-native': 'https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/master/images/react-native-logo.png',
  'sql': 'https://www.svgrepo.com/show/331760/sql-database-generic.svg',
  'sqlite': 'https://cdn.worldvectorlogo.com/logos/sqlite.svg'
};

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      const assetsDir = join(__dirname, '..', 'assets', 'tech');
      const filePath = join(assetsDir, filename);

      fs.mkdir(assetsDir, { recursive: true })
        .then(() => {
          const fileStream = fs_standard.createWriteStream(filePath);
          response.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Downloaded: ${filename}`);
            resolve();
          });
        })
        .catch(reject);
    }).on('error', reject);
  });
};

async function downloadAllLogos() {
  try {
    const downloads = Object.entries(logoUrls).map(([name, url]) => {
      const extension = url.endsWith('.svg') ? 'svg' : 'png';
      return downloadImage(url, `${name}.${extension}`);
    });

    await Promise.all(downloads);
    console.log('All logos downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
}

downloadAllLogos();