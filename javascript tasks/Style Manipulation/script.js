let text = document.getElementById("textBlock");
let currentFontSize = 16;

function changeBackground() {
    text.style.backgroundColor = "#9e8425ff"; 
}

function increaseFont() {
    currentFontSize += 2; 
    text.style.fontSize = currentFontSize + "px";
}

function centerText() {
    text.style.textAlign = "center";
}

function resetStyle() {
    text.style.backgroundColor = "white";
    text.style.fontSize = "16px";
    text.style.textAlign = "left";
    currentFontSize = 16;
}
