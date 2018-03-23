const { clipboard, nativeImage } = require('electron');

clipboard.writeText("hello Yugo");

clipboard.writeText("hello Yugo2");

console.log(clipboard.readText());

let img = nativeImage.createFromPath('main-process/lover.png');

clipboard.writeImage(img);

const imgDataURL = clipboard.readImage().toDataURL();


const img3 = new Image();

img3.src = imgDataURL;

document.body.appendChild(img3);