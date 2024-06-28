// src/utils/importImages.js

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export default importAll(require.context('@/assets/images/lesson1', false, /\.(png|jpe?g|svg)$/));
  