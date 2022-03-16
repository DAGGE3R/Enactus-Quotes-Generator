let backgroundImgBlack;
let backgroundImgWhite;
let font;
let fontIta;
let currentIndex = 0;
let images = [];
let savedQuote = {
    author: null,
    text: null,
};
let currentBackground;
let currentColor;

function preload() {
    backgroundImgBlack = loadImage("./Assets/Darkquote.png");
    backgroundImgWhite = loadImage("./Assets/Lightquote.png");
    font = loadFont("./Montserrat/static/Montserrat-Medium.ttf");
    fontIta = loadFont("./Montserrat/static/Montserrat-BoldItalic.ttf");
    currentBackground = backgroundImgBlack;
    currentColor = "#ffffff";
}

function setup() {
    let canvas = createCanvas(500, 500);
    document.getElementById("save").onclick = () => {
        saveCanvas(canvas, "quote", "jpg");
    };
}

const render = () => {
    loadImage(images[currentIndex], (img) => {
        image(img, 300, 110, 188, 255);
        image(currentBackground, 0, 0, 500, 500);
        textSize(15);
        fill(currentColor);
        textFont(font);
        text(savedQuote.text, 65, 210, 230, 200);
        fill("#fdc21a");
        textFont(fontIta);
        text(savedQuote.author, 140, 315, 200, 100);
    });
};

function draw() {
  document.getElementById("currImg").innerHTML =
  "image index : " + currentIndex;
    document.getElementById("mode").onclick = () => {
        if (currentBackground === backgroundImgBlack) {
            currentBackground = backgroundImgWhite;
            currentColor = "#5a5b5c";
            document.getElementById("currMode").innerHTML =
                "selected mode : " + "Light";
        } else {
            currentBackground = backgroundImgBlack;
            currentColor = "#FFFFFF";
            document.getElementById("currMode").innerHTML =
                "selected mode : " + "Dark";
        }
        render();
    };
    document.getElementById("btn").onclick = async () => {
        image(currentBackground, 0, 0, 500, 500);
        const quote = await getResp();
        const fetchedImages = await getImages(quote.author);
        if (fetchedImages)
            images = fetchedImages.map((image) => image.original);
        if (quote) {
            savedQuote = { text: quote.text, author: quote.author };
            render();
        }
    };
    document.getElementById("next").onclick = () => {
        if (currentIndex === images.length - 1) currentIndex = 0;
        else currentIndex++;
        console.log(images[currentIndex]);
        document.getElementById("currImg").innerHTML =
        "image index : " + currentIndex;
        render();
    };
    document.getElementById("prev").onclick = () => {
        if (currentIndex === 0) currentIndex = images.length - 1;
        else currentIndex--;
        document.getElementById("currImg").innerHTML =
        "image index : " + currentIndex;
        render();
    };
}
