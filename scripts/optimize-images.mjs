import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const files = fs.readdirSync(publicDir);

for (const file of files) {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  if (!stats.isFile()) continue;

  if (stats.size > 500 * 1024) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      console.log(`Optimizing ${file} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`);
      const inputBuffer = fs.readFileSync(filePath);
      let pipeline = sharp(inputBuffer).resize({ width: 1200, withoutEnlargement: true });
      
      let outputBuffer;
      if (ext === '.png') {
        outputBuffer = await pipeline.png({ compressionLevel: 9, quality: 80 }).toBuffer();
      } else {
        outputBuffer = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
      }

      if (outputBuffer.length < stats.size) {
        fs.writeFileSync(filePath, outputBuffer);
        const newStats = fs.statSync(filePath);
        console.log(`-> Saved: ${(newStats.size / 1024).toFixed(1)} KB (reduced by ${(((stats.size - newStats.size) / stats.size) * 100).toFixed(1)}%)`);
      } else {
        console.log(`-> Kept original (no compression gain)`);
      }
    }
  }
}
console.log('Image optimization completed.');
