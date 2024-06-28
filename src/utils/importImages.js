// src/utils/importImages.js

// Используем import.meta.glob для динамического импорта всех изображений
const importAll = import.meta.glob('@/assets/images/**/*.png', { eager: true });

let images = {};

for (const path in importAll) {
  images[path.replace('/assets/images/', '')] = importAll[path].default;
}

export default images;
