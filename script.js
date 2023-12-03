//https://www.youtube.com/watch?v=4YQ4svkETS0&ab_channel=TraversyMedia
var i = 0;
var images = [];
var time = 5000;

images[0] = "image1.jpg";
images[1] = "image2.jpg";
images[2] = "image3.jpg";

function slideShow() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideShow()", time);
}

window.onload = slideShow