var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var background = document.getElementById("background");
var infoText = document.getElementById("information");
var infoLabel = document.getElementById("label");

infoButton.addEventListener("click", function() {
    background.style.backgroundImage="url(infoScreen.png)";
    infoButton.hidden = true
    startButton.hidden = true
    infoText.hidden = false
    infoLabel.hidden = false
});