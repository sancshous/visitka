// src/utils/importImages.js
async function importAll(r) {
    const images = {};
    const modules = await Promise.all(
      r.keys().map(async (key) => {
        const module = await import('/src/assets/images/lesson1/' + key.slice(2));
        images[key.slice(2)] = module.default;
      })
    );
    return images;
  }
  
  const images = await importAll(import.meta.globEager('/src/assets/images/lesson1/*.png'));
  
  export default images;
  