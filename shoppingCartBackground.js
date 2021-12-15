let images = [
    "https://ae01.alicdn.com/kf/H434a60e6809e459589e24ee77ef8b116I/New-fall-winter-men-s-overprint-Hoodie-Zip-sweatshirt-casual-sports-men-s-sweatpants-2021.jpg_220x220xz.jpg_.webp",
    "https://ae04.alicdn.com/kf/H44287d2463ed4666a607e87446276690e.jpg_120x120Q90.jpg_.webp",
    "https://ae04.alicdn.com/kf/HTB1AP4IaUrrK1RkSne1q6ArVVXaG.jpg_120x120Q90.jpg_.webp",
    "https://ae04.alicdn.com/kf/HTB1DQ57XZvrK1Rjy0Feq6ATmVXaK.jpg_120x120Q90.jpg_.webp",
    "https://ae04.alicdn.com/kf/H9e0735d43c424650a674eab3265c260bV.jpg_120x120Q90.jpg_.webp",
    "https://ae01.alicdn.com/kf/Hbcc21db2f4ce4a619cf0b7ca24616cdfM.jpg"
];

function setBackground(images, section1div2) {
    setInterval(function() {
        var index = Math.floor(Math.random() * images.length);
        var target = document.querySelector("#section1div2");
        target.style.backgroundImage = "url(" + images[index] + ")";

    }, 5000);
}
setBackground(images, section1div2);