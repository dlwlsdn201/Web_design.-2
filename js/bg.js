const body = document.querySelector("body");

const IMG_NUMBER = 4;


function handleImgLoad() {
    console.log("finished loading.");

}



function paintImage(imgNumber) {
    const image = new Image();
    image.src = `./bg/${imgNumber+1}.jpg`;
    console.log(image.src);
    image.classList.add("bgImage");
    body.prepend(image);
    image.onreadystatechange = function () {
        if (image.readyState === "complete") {
            handleImgLoad();
        };
        if (document.image) {
            this.img = new Image();
        }
    }
}

// function paintImage(imgNumber, PreImgArray) {
//     const image = new Image();
//     image.src = PreImgArray[`${imgNumber}`].src;
//     image.classList.add("bgImage");
//     body.prepend(image);
//     image.onreadystatechange = function () {
//         if (image.readyState === "complete") {
//             handleImgLoad();
//         };
//     }
// }


// function imagepreload(ary) {
//     try {
//         if (!ary) return;
//         arv = ary;
//         var arr = new Array();
//         for (var i = 0; i < arv.length; i++) {
//             arr[i] = new Image();
//             arr[i].src = arv[i];
//         }

//     } catch (e) {}
//     return arr;
// }


function RandomBG() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init() {
    const randomnumber = RandomBG();
    handleImgLoad();
    paintImage(randomnumber);
    // preImg = imagepreload(["./bg/1.jpg", "./bg/2.jpg", "./bg/3.jpg", "./bg/4.jpg"]);
    // paintImage(randomnumber, preImg);
}