const fs = require('fs');
const path = require('path');

const srcDir = path.join('C:', 'Users', 'sokol', '.gemini', 'antigravity', 'brain', 'eb868ee8-2b26-48c0-b73b-31496ffd08a1');
const destDir = path.join('e:', 'АНТИГРАВИТИ', 'sait Mojo', 'images');

const filesToCopy = [
    { src: 'mojo_aroma_citrus_1772280329478.png', dest: 'aroma_citrus.png' },
    { src: 'mojo_booking_img_1772280343501.png', dest: 'booking_img.png' }
];

filesToCopy.forEach(file => {
    try {
        fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
        console.log(`Скопирован: ${file.dest}`);
    } catch (e) {
        console.error(`Ошибка копирования ${file.src}:`, e.message);
    }
});
