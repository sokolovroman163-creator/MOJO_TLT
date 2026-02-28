const fs = require('fs');
const path = require('path');

const srcDir = ['C:', 'Users', 'sokol', '.gemini', 'antigravity', 'brain', 'eb868ee8-2b26-48c0-b73b-31496ffd08a1'].join('\\');
const destDir = 'e:\\АНТИГРАВИТИ\\sait Mojo\\images';

const filesToCopy = [
    { src: 'mojo_hero_mural_bg_1772279237070.png', dest: 'hero_bg.png' },
    { src: 'mojo_premium_hookah_1772278879605.png', dest: 'premium_hookah.png' },
    { src: 'mojo_aroma_berries_1772278896019.png', dest: 'aroma_berries.png' },
    { src: 'mojo_logo_1772277839311.png', dest: 'logo.png' },
    // Интерьеры из присланных вами фото (выбираем лучшие ракурсы)
    { src: 'media__1772277549556.jpg', dest: 'interior_1.jpg' },
    { src: 'media__1772277549543.jpg', dest: 'interior_2.jpg' },
    { src: 'media__1772277665243.jpg', dest: 'interior_3.jpg' }
];

filesToCopy.forEach(file => {
    try {
        fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
        console.log(`Скопирован: ${file.dest}`);
    } catch (e) {
        console.error(`Ошибка копирования ${file.src}:`, e.message);
    }
});
