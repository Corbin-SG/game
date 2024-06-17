var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var backToMainButton = document.getElementById("backToMain");
var backToDifficultyButton = document.getElementById("backToDifficulty");
var howToButton = document.getElementById("howTo");
var easyButton = document.getElementById("easy");
var regularButton = document.getElementById("regular");
var hardButton = document.getElementById("hard");
var insaneButton = document.getElementById("insane");
var storyButton = document.getElementById("story");
var renButton = document.getElementById("ren");
var lukaButton = document.getElementById("luka");
var ollieButton = document.getElementById("ollie");
var caidynButton = document.getElementById("caidyn");
var infoText = document.getElementById("information");
var infoLabel = document.getElementById("label");

infoButton.addEventListener("click", function() {
    document.body.style.backgroundImage ="url(Backgrounds/notebookScreen.png)";
    infoButton.hidden = true
    startButton.hidden = true
    infoText.hidden = false
    infoLabel.hidden = false
    backToMainButton.hidden = false
    howToButton.hidden = false
});

backToMainButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(Backgrounds/startScreen.png)";
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
    document.body.style.backgroundImage = "url(Backgrounds/notebookScreen.png)";
    infoButton.hidden = true
    startButton.hidden = true
    backToMainButton.hidden = false
    easyButton.hidden = false
    regularButton.hidden = false
    hardButton.hidden = false
    insaneButton.hidden = false
    storyButton.hidden = false
})

easyButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(Backgrounds/secondNotebookScreen.png)";
    backToMainButton.hidden = true
    easyButton.hidden = true
    regularButton.hidden = true
    hardButton.hidden = true
    insaneButton.hidden = true
    storyButton.hidden = true
    backToDifficultyButton.hidden = false
    renButton.hidden = false
    lukaButton.hidden = false
    ollieButton.hidden = false
    caidynButton.hidden = false
})

backToDifficultyButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(Backgrounds/notebookScreen.png)";
    backToDifficultyButton.hidden = true
    renButton.hidden = true
    lukaButton.hidden = true
    ollieButton.hidden = true
    caidynButton.hidden = true
    backToMainButton.hidden = false
    easyButton.hidden = false
    regularButton.hidden = false
    hardButton.hidden = false
    insaneButton.hidden = false
    storyButton.hidden = false

})

renButton.addEventListener("click", function(){
    document.body.style.backgroundImage = "url(Backgrounds/thirdNotebookScreen.png";
    backToDifficultyButton.hidden = true
    renButton.hidden = true
    lukaButton.hidden = true
    ollieButton.hidden = true
    caidynButton.hidden = true
})