const fs = require('fs');
const path = require('path');
const Tesseract = require('tesseract.js');

const tessdataPath = path.resolve(__dirname, '../../tessdata');

exports.ocrImage = async (imagePath) => {
  fs.mkdirSync(tessdataPath, { recursive: true });

  const result = await Tesseract.recognize(imagePath, 'eng', {
    cachePath: tessdataPath,
    langPath: 'https://cdn.jsdelivr.net/npm/@tesseract.js-data/eng/4.0.0_best_int',
  });

  return result.data.text;
};
