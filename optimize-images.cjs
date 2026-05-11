const sharp = require("sharp");

const images = [
  {
    input: "./public/images/hero-bg.png",
    output: "./public/images/hero-bg.webp",
    width: 1920,
  },
  {
    input: "./public/images/sitebg.png",
    output: "./public/images/sitebg.webp",
    width: 1920,
  },
  {
    input: "./public/preview.jpg",
    output: "./public/preview.webp",
    width: 1400,
  },
  {
    input: "./public/images/logo.png",
    output: "./public/images/logo.webp",
    width: 600,
  },
  {
    input: "./public/images/f5pc-branding.png",
    output: "./public/images/f5pc-branding.webp",
    width: 1000,
  }
];

async function optimize() {
  for (const image of images) {
    await sharp(image.input)
      .resize({ width: image.width })
      .webp({ quality: 82 })
      .toFile(image.output);

    console.log(`Optimized: ${image.output}`);
  }
}

optimize();