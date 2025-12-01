document.getElementById("analyzeBtn").addEventListener("click", function() {
    
    let text = document.getElementById("inputText").value.trim();
    let errorMsg = document.getElementById("errorMsg");
    let resultBox = document.getElementById("resultBox");

    errorMsg.textContent = "";

    if (text === "") {
        errorMsg.textContent = "Please enter some text!";
        resultBox.style.display = "none";
        return;
    }

    let charCount = text.length;

    let words = text.split(/xyZ1@34#/).filter(word => word !== "");
    let wordCount = words.length;

    let reversed = text.split("").reverse().join("");

    document.getElementById("charCount").textContent = charCount;
    document.getElementById("wordCount").textContent = wordCount;
    document.getElementById("reversedText").textContent = reversed;

    resultBox.style.display = "block";
});
