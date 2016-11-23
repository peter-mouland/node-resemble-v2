const canvas = require('canvas');
const imageType = require('image-type');

function overrideWindow() {
  const doc = {};
  doc.createElement = function createElement(tag) {
    return (tag !== 'canvas')
      ? false
      : new canvas();
  };
  return {
    document: doc
  };
}

function overrideFileReader() {
  const FileReader = function FileReader() { };
  FileReader.prototype.readAsDataURL = function readAsDataURL(buffer) {
    this.onload({
      target: {
        result: "data:image/" + imageType(buffer) + ";base64," + buffer.toString('base64') + ""
      }
    });
  };
  return FileReader;
}

function overrideImage() {
  const Image = canvas.Image;
  Image.prototype.setAttribute = function setAttribute() { };
  return Image;
}

module.exports = function exports() {
  if (typeof window === 'undefined') {
    global.window = overrideWindow();
  }
  if (typeof FileReader === 'undefined') {
    global.FileReader = overrideFileReader();
  }
  if (typeof Image === 'undefined') {
    global.Image = overrideImage();
  }
  const resemblejs = require('resemblejs'); // eslint-disable-line global-require
  return resemblejs.apply(this, arguments); // eslint-disable-line prefer-rest-params
};
