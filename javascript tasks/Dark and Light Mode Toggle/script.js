let isDark = false;

let body = document.body;
let sections = document.querySelectorAll(".section");
let themeBtn = document.getElementById("themeBtn");

function applyTheme() {
    if (isDark) {
        body.style.backgroundColor = "#121212";
        body.style.color = "white";

        sections.forEach(sec => {
            sec.style.backgroundColor = "#1e1e1e";
            sec.style.color = "white";
            sec.style.borderColor = "#333";
        });

        themeBtn.textContent = "Switch to Light Mode";
    } 
    else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

        sections.forEach(sec => {
            sec.style.backgroundColor = "white";
            sec.style.color = "black";
            sec.style.borderColor = "#ccc";
        });

        themeBtn.textContent = "Switch to Dark Mode";
    }
}
themeBtn.addEventListener("click", function() {
    isDark = !isDark;
    applyTheme();
});

applyTheme();
