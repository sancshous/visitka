// src/utils/importImages.js

// Используйте import.meta.glob для динамического импорта всех изображений
const images = import.meta.globEager('@/assets/images/**/*.png');

export default images;
