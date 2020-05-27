const body = document.querySelector("body");

const IMG_NUMBER = 4;


function handleImgLoad() {
    console.log("finished loading.");
    console.log("Hi");
}


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./bg/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    image.onreadystatechange = function () {
        if (image.readyState === "complete") {
            handleImgLoad();
        };
    }
}

function RandomBG() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomnumber = RandomBG();
    paintImage(randomnumber);
    handleImgLoad();
}

init();