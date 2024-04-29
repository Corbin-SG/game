var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var backToMainButton = document.getElementById("backToMain");
var howToButton = document.getElementById("howTo");
var infoText = document.getElementById("information");
var infoLabel = document.getElementById("label");

infoButton.addEventListener("click", function() {
    document.body.style.backgroundImage ="url(infoScreen.png)";
    document.body.style.border = "2vw solid #26153A"
    infoButton.hidden = true
    startButton.hidden = true
    infoText.hidden = false
    infoLabel.hidden = false
    backToMainButton.hidden = false
    howToButton.hidden = false
});

backToMainButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(startScreen.png)";
    document.body.style.border = "none";
    infoButton.hidden = false
    startButton.hidden = false
    infoText.hidden = true
    infoLabel.hidden = true
    backToMainButton.hidden = true
    howToButton.hidden = true
})