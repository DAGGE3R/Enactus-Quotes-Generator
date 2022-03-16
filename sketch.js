let backgroundImg;
let currentIndex = 0;
let images = [];
function preload() {
  backgroundImg = loadImage("./Assets/Darkquote.png");
}

function setup() {
  let canvas = createCanvas(500, 500);
  background(backgroundImg);
  document.getElementById("save").onclick = () => {
    saveCanvas(canvas, "quote", "jpg");
  };
}

function draw() {
  document.getElementById("btn").onclick = async () => {
    background(backgroundImg);
    const quote = await getResp();
    const fetchedImages = await getImages(quote.author);
    if (fetchedImages) images = fetchedImages.map((image) => image.original);
    if (quote) {
      textSize(15);
      text(quote.text, 10, 30);
      text(quote.author, 10, 50);
    }
  };
  document.getElementById("next").onclick = () => {
    if (currentIndex === images.length - 1) currentIndex = 0;
    else currentIndex++;
    console.log(images[currentIndex]);
    loadImage(images[currentIndex], (img) => {
      image(img, 100, 100, 100, 100);
    });
  };
  document.getElementById("prev").onclick = () => {
    if (currentIndex === 0) currentIndex = images.length - 1;
    else currentIndex--;

    loadImage(images[currentIndex], (img) => {
      image(img, 100, 100, 100, 100);
    });
  };
}
