

let genColor
let genColorBg
let genColorBg02
let genColorFe
const colorSwatch = document.getElementById("color_swatch");
const colorHsla = document.getElementById("color_hsla");
const colorApplyBttn = document.getElementById("color_applicator");


// generates random number
function randomNum(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// generates colors
function  randomColor(){
    let randomH = randomNum(0, 360);
    genColor = "hsla(" + randomH + ", 70%, 60%, 1.0)";
    genColorBg = "hsla(" + randomH + ", 20%, 15%, 1.0)";
    genColorBg02 = "hsla(" + randomH + ", 20%, 22%, 1.0)";
    genColorFe = "hsla(" + randomH + ", 5%, 80%, 1.0)";
};

colorApplyBttn.addEventListener("click", function() {
    randomColor();
    colorHsla.innerHTML = genColor;
    colorSwatch.style.setProperty("background", genColor);

    root.style.setProperty("--background", genColorBg);
    root.style.setProperty("--background_01", genColorBg02);
    root.style.setProperty("--foreground", genColorFe);
});