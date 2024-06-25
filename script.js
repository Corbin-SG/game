//Variables
var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var backToMainButton = document.getElementById("backToMain");
var backToDifficultyButton = document.getElementById("backToDifficulty");
var backToCharButton = document.getElementById("backToChar");
var confirmCharButton = document.getElementById("confirmChar");
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
var moveButton = document.getElementById("iconLabel");
var infoText = document.getElementById("information");
var infoLabel = document.getElementById("label");
var displaySprite = document.getElementById("display");
var charConfirmHead = document.getElementById("abilityHead");
var attackDesc = document.getElementById("attack");
var specialDesc = document.getElementById("special");
var mapIcon = document.getElementById("mapIcon");
let charName = "N/A";
let difficulty = "N/A";

//Game Variables
var health = 0;
var attackMul = 1;
var defenceMul = 1;
var playerSpot = 1;
var maxSpot = 1;

//Space Positions
var x = 0;
var posArray = [];
var currentPos = 0;
const easy = [
    [70, 0.5], 
    [70, 13.5], 
    [70, 26.5], 
    [70, 39.5], 
    [70, 52.5], 
    [70, 65.5], 
    [70, 78.5], 
    [70, 90]
];

infoButton.addEventListener("click", function() {
    hideStart();
    showInfo();
});

backToMainButton.addEventListener("click", function(){
    showStart();
    hideInfoDiff();
})

startButton.addEventListener("click", function(){
    showDiff();
    hideStart();
})

easyButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    difficulty = "Easy";
    moveButton.style.left = "20%";
    moveButton.style.top = "2%";
    maxSpot = 8;
    posArray = easy;
    mapIcon.style.top = posArray[0][0] + "vh";
    mapIcon.style.left = posArray[0][1] + "vw";

})

regularButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    difficulty = "Regular";
})

hardButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    difficulty = "Hard";
})

insaneButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    difficulty = "Insane";
})

backToDifficultyButton.addEventListener("click", function(){
    showDiff();
    hideChar();

})

renButton.addEventListener("click", function(){
    //Change screen
    showCharConfirm();
    hideChar();
    //Set character & Display aspects
    charName = "Ren";
    display.src = "Sprites/Ren/renSelect.png";
    mapIcon.src = "Sprites/Ren/renSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Sword Attack</small><br> <small>50 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Smoke Attack</small><br> <small>75 Base DMG</small>";
})

lukaButton.addEventListener("click", function(){
    //Change screen
    showCharConfirm();
    hideChar();
    //Set character & Display aspects
    charName = "Luka";
    display.src = "Sprites/Luka/lukaSelect.png";
    mapIcon.src = "Sprites/Luka/lukaSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Smoke Attack</small><br> <small>30 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Enemy Debuff</small><br> <small>Decreases Enemy DEF</small>";
})

ollieButton.addEventListener("click", function(){
    //Change screen
    showCharConfirm();
    hideChar();
    //Set character & Display aspects
    charName = "Ollie";
    display.src = "Sprites/Ollie/ollieSelect.png";
    mapIcon.src = "Sprites/Ollie/ollieSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Sword Attack</small><br> <small>45 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Rapid Sword Attack</small><br> <small>80 Base DMG</small>";
})

caidynButton.addEventListener("click", function(){
    //Change screen
    showCharConfirm();
    hideChar();
    //Set character & Display aspects
    charName = "Caidyn";
    display.src = "Sprites/Caidyn/caidynSelect.png";
    mapIcon.src = "Sprites/Caidyn/caidynSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Bow Attack</small><br> <small>30 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Heal</small><br> <small>Heals Teammate With Lowest HP</small>";
})

backToChar.addEventListener("click", function(){
    //Change screen
    showChar();
    hideCharConfirm();

})

confirmCharButton.addEventListener("click", function(){
    showMap();
    hideCharConfirm();
})

moveButton.addEventListener("click", function(){
    movePosition();
})

function showCharConfirm(){
    document.body.style.backgroundImage = "url(Backgrounds/thirdNotebookScreen.png";
    display.hidden = false
    backToCharButton.hidden = false
    confirmCharButton.hidden = false
    attackDesc.hidden = false
    specialDesc.hidden = false
    charConfirmHead.hidden = false
}

function hideCharConfirm(){
    display.hidden = true
    backToCharButton.hidden = true
    confirmCharButton.hidden = true
    attackDesc.hidden = true
    specialDesc.hidden = true
    charConfirmHead.hidden = true
}

function showInfo(){
    document.body.style.backgroundImage ="url(Backgrounds/notebookScreen.png)";
    infoText.hidden = false
    infoLabel.hidden = false
    backToMainButton.hidden = false
    howToButton.hidden = false
}

function hideStart(){
    infoButton.hidden = true
    startButton.hidden = true
}

function showStart(){
    document.body.style.backgroundImage = "url(Backgrounds/startScreen.png)";
    document.body.style.border = "none";
    infoButton.hidden = false
    startButton.hidden = false
}

function hideInfoDiff(){
    infoText.hidden = true
    infoLabel.hidden = true
    backToMainButton.hidden = true
    howToButton.hidden = true
    easyButton.hidden = true
    regularButton.hidden = true
    hardButton.hidden = true
    insaneButton.hidden = true
    storyButton.hidden = true
}

function showDiff(){
    document.body.style.backgroundImage = "url(Backgrounds/notebookScreen.png)";
    backToMainButton.hidden = false
    easyButton.hidden = false
    regularButton.hidden = false
    hardButton.hidden = false
    insaneButton.hidden = false
    storyButton.hidden = false
}

function hideDiff(){
    backToMainButton.hidden = true
    easyButton.hidden = true
    regularButton.hidden = true
    hardButton.hidden = true
    insaneButton.hidden = true
    storyButton.hidden = true
}

function showChar(){
    document.body.style.backgroundImage = "url(Backgrounds/secondNotebookScreen.png)";
    backToDifficultyButton.hidden = false
    renButton.hidden = false
    lukaButton.hidden = false
    ollieButton.hidden = false
    caidynButton.hidden = false
}

function hideChar(){
    backToDifficultyButton.hidden = true
    renButton.hidden = true
    lukaButton.hidden = true
    ollieButton.hidden = true
    caidynButton.hidden = true
}

function showMap(){
    if (difficulty.localeCompare("Easy") == 0){
        document.body.style.backgroundImage = "url(Backgrounds/easyMap.png)";
    }
    else if (difficulty.localeCompare("Regular") == 0){
        document.body.style.backgroundImage = "url(Backgrounds/regularMap.png)";
    }
    else if (difficulty.localeCompare("Hard") == 0){
        document.body.style.backgroundImage = "url(Backgrounds/hardMap.png)";
    }
    else if (difficulty.localeCompare("Insane") == 0){
        document.body.style.backgroundImage = "url(Backgrounds/insaneMap.png)";
    }

    moveButton.hidden = false;
    mapIcon.hidden = false;
}

function movePosition(){
    x++;
    mapIcon.style.top = posArray[x][0] + "vh";
    mapIcon.style.left = posArray[x][1] + "vw";
}