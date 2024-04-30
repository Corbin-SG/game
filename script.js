var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var backToMainButton = document.getElementById("backToMain");
var howToButton = document.getElementById("howTo");
var easyButton = document.getElementById("easy");
var regularButton = document.getElementById("regular");
var hardButton = document.getElementById("hard");
var insaneButton = document.getElementById("insane");
var storyButton = document.getElementById("story");
var infoText = document.getElementById("information");
var infoLabel = document.getElementById("label");

infoButton.addEventListener("click", function() {
    document.body.style.backgroundImage ="url(notebookScreen.png)";
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
    easyButton.hidden = true
    regularButton.hidden = true
    hardButton.hidden = true
    insaneButton.hidden = true
    storyButton.hidden = true
})

startButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(notebookScreen.png)";
    infoButton.hidden = true
    startButton.hidden = true
    backToMainButton.hidden = false
    easyButton.hidden = false
    regularButton.hidden = false
    hardButton.hidden = false
    insaneButton.hidden = false
    storyButton.hidden = false
})