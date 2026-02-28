const fs = require('fs');
const path = require('path');

const srcDir = path.join('C:', 'Users', 'sokol', '.gemini', 'antigravity', 'brain', 'eb868ee8-2b26-48c0-b73b-31496ffd08a1');
const destDir = path.join('e:', 'АНТИГРАВИТИ', 'sait Mojo', 'images');

const filesToCopy = [
    { src: 'mojo_hookah_brand_1772280020240.png', dest: 'aroma_hookah.png' },
    { src: 'mojo_smoke_man_1772280034871.png', dest: 'aroma_smoke.png' },
    { src: 'mojo_tea_coffee_1772280050830.png', dest: 'aroma_tea.png' },
    { src: 'mojo_sparks_bg_1772280064531.png', dest: 'bg_sparks.png' }
];

filesToCopy.forEach(file => {
    try {
        fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
        console.log(`Скопирован: ${file.dest}`);
    } catch (e) {
        console.error(`Ошибка копирования ${file.src}:`, e.message);
    }
});
