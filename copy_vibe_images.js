const fs = require('fs');
const path = require('path');

const srcDir = path.join('C:', 'Users', 'sokol', '.gemini', 'antigravity', 'brain', 'eb868ee8-2b26-48c0-b73b-31496ffd08a1');
const destDir = path.join('e:', 'АНТИГРАВИТИ', 'sait Mojo', 'images');

const filesToCopy = [
    { src: 'mojo_vibe_decor_1772280751061.png', dest: 'vibe_1.png' },
    { src: 'mojo_vibe_art_1772280767236.png', dest: 'vibe_2.png' },
    { src: 'mojo_vibe_smoke_1772280790443.png', dest: 'vibe_3.png' }
];

filesToCopy.forEach(file => {
    try {
        fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
        console.log(`Скопирован: ${file.dest}`);
    } catch (e) {
        console.error(`Ошибка копирования ${file.src}:`, e.message);
    }
});
