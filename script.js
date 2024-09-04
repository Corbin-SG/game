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
var eventTitle = document.getElementById("eventTitle");
var enemyIcon = document.getElementById("enemyIcon");
var nextButton = document.getElementById("nextButton");
var eventDetails = document.getElementById("eventDetails");
let charName = "N/A";
let difficulty = "N/A";
let eventType = "N/A";
let eventName = "N/A";
let battleEnemy = "N/A";
let energyOrHP = "N/A";
let num = 0;
let negReq = 0;
let negative = false;
let enemyATK = 0;
let enemyDEF = 0;
let enemyHP = 0;
let changeATK = 0;
let changeDEF = 0;
let changeHP = 0;
let changeEnergy = 0;
let changeSpace = 0;
let maxNum = 0.0;
let minNum = 0.0;

//Character stats
let renHP = 100;
let renEnergy = 100;
let lukaHP = 100;
let lukaEnergy = 100;
let ollieHP = 100;
let ollieEnergy = 100;
let caidynHP = 100;
let caidynEnergy = 100;

//Game Variables
var maxHealth = 100;
var maxEnergy = 100;
var attackMul = 1.0;
var defenceMul = 1.0;
var playerSpot = 1.0;
var maxSpot = 1.0;

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
const regular = [
    [70, 0.5],
    [60, 11.5],
    [75, 20.5],
    [64, 31.5],
    [45, 28.5],
    [38, 40.5],
    [53, 48.5],
    [45, 57.5],
    [27, 56.5],
    [13, 66],
    [23, 76.5],
    [10, 86.25],
    [0, 81]
];
const hard = [
    [73, 0.5],
    [60, 9],
    [47, 0.75],
    [34, 8.5],
    [20, 0.25],
    [12, 10],
    [-3, 2.5],
    [-5, 16.5],
    [-5.5, 28.5],
    [2, 40.75],
    [-6, 53],
    [6, 61],
    [-5, 70.5],
    [1.5, 84.5],
    [17, 76.75],
    [30, 68],
    [35, 79],
    [45, 88.5],
    [56, 81.25],
    [74, 86.25],
    [73, 73],
    [56, 66],
    [70, 58],
    [75, 44]
];

const insane = [
    [75, -0.75],
    [75, 7.25],
    [75, 15.5],
    [75, 23.5],
    [75, 32],
    [75, 40.75],
    [62, 35.75],
    [50, 41],
    [61, 46.25],
    [47, 51.25],
    [35, 43.75],
    [29, 53],
    [20, 45.25],
    [5, 39],
    [-6, 43.75],
    [-6, 53.5],
    [7, 49.75],
    [15, 57.25],
    [33, 62.25],
    [33, 71],
    [22, 75.25],
    [13, 69.75],
    [2, 61.25],
    [-6, 69.5],
    [4, 77.75],
    [-3, 86.5],
    [12, 87],
    [28, 87.5],
    [44, 88],
    [60, 88],
    [75, 88]
]

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
    //Set difficulty
    difficulty = "Easy";
    //Set negative event ratio
    negReq = 25;
    //Set move button
    moveButton.style.left = "20%";
    moveButton.style.top = "2%";
    moveButton.style.height = "40%";
    moveButton.style.width = "60%";
    moveButton.style.fontSize = "9vw";
    //Set position
    maxSpot = 8;
    posArray = easy;
    mapIcon.style.top = posArray[0][0] + "vh";
    mapIcon.style.left = posArray[0][1] + "vw";

})

regularButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    //Set difficulty
    difficulty = "Regular";
    //Set negative event ratio
    negReq = 50;
    //Set move button
    moveButton.style.left = "2%";
    moveButton.style.top = "2%";
    moveButton.style.height = "35%";
    moveButton.style.width = "50%";
    moveButton.style.fontSize = "7vw";
    //Set position
    maxSpot = 13;
    posArray = regular;
    mapIcon.style.top = posArray[0][0] + "vh";
    mapIcon.style.left = posArray[0][1] + "vw";

})

hardButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    //Set difficulty
    difficulty = "Hard";
    //Set negative event ratio
    negReq = 60;
    //Set move button
    moveButton.style.left = "14%";
    moveButton.style.top = "87%";
    moveButton.style.width = "30%";
    moveButton.style.height = "10%";
    moveButton.style.fontSize = "3vw";
    //Set position
    maxSpot = 24;
    posArray = hard;
    mapIcon.style.top = posArray[0][0] + "vh";
    mapIcon.style.left = posArray[0][1] + "vw";
})

insaneButton.addEventListener("click", function(){
    showChar();
    hideDiff();
    //Set difficulty
    difficulty = "Insane";
    //Set negative event ratio
    negReq = 75;
    //Set move button
    moveButton.style.left = "1%";
    moveButton.style.top = "50%";
    moveButton.style.width = "35%";
    moveButton.style.height = "25%";
    moveButton.style.fontSize = "5vw";
    //Set position
    maxSpot = 31;
    posArray = insane;
    mapIcon.style.top = posArray[0][0] + "vh";
    mapIcon.style.left = posArray[0][1] + "vw";
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
    //Moves player position
    movePosition();
    //Decides which event happens
    decideEvent();

    //Moves to event screen
    hideMap();
    showEventDesc();
})

nextButton.addEventListener("click", function(){
    //Carries out randomized event
    processEvent();
    //Changes screen
    hideEventDesc();
    showMap();
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

function hideMap(){
    //Hides the move button and the map icon
    moveButton.hidden = true;
    mapIcon.hidden = true;
}

function showEventDesc(){
    //Changes background to plain gray screen
    document.body.style.backgroundImage = "url(Backgrounds/grayScreen.png)";

    //Unhides event title
    eventTitle.hidden = false;
    enemyIcon.hidden = false;
    nextButton.hidden = false;
    eventDetails.hidden = false;
}

function hideEventDesc(){
    //Hides event description items
    eventTitle.hidden = true;
    enemyIcon.hidden = true;
    nextButton.hidden = true;
    eventDetails.hidden = true;
}

function movePosition(){
    x++;
    mapIcon.style.top = posArray[x][0] + "vh";
    mapIcon.style.left = posArray[x][1] + "vw";
}

//Generates a random number then calls a function that decides event
function decideEvent(){
    //Generates number from 1-100
    num = Math.floor(Math.random() * 100) + 1;

    //Calls appropriate function
    if (difficulty == "Easy"){
        easyBattleOrEvent();
    }
    else if (difficulty == "Regular"){
        regularBattleOrEvent();
    }
    else if (difficulty == "Hard"){
        hardBattleOrEvent();
    }
    else if (difficulty == "Insane"){
        insaneBattleOrEvent();
    }

    //Generates new number from 1-100
    num = Math.floor(Math.random() * 100) + 1;

    //If event is a battle
    if (eventType == "Battle"){
        //Calls appropriate function
        if (difficulty == "Easy"){
            easyBattleEnemy();
        }
        else if (difficulty == "Regular"){
            regularBattleEnemy();
        }
        else if (difficulty == "Hard"){
            hardBattleEnemy();
        }
        else if (difficulty == "Insane"){
            insaneBattleEnemy();
        }

        //Sets event title
        if (battleEnemy == "Slime"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Slime";
            //Setting enemy icon
            enemyIcon.src = "Sprites/Slime/slimeStandby.png";
        }
        else if (battleEnemy == "Crab"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Crab";
            //Setting enemy icon
            enemyIcon.src = "Sprites/Crab/crabStandby.png";
        }
        else if (battleEnemy == "Dark Matter"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Dark Matter";
             //Setting enemy icon
            enemyIcon.src = "Sprites/DarkMatter/darkMatterStandby.png";
        }
        else if (battleEnemy == "Drone"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Drone";
             //Setting enemy icon
            enemyIcon.src = "Sprites/Drone/droneStandby.png";
        }
        else if (battleEnemy == "Snow Monster"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Snow Monster";
             //Setting enemy icon
            enemyIcon.src = "Sprites/SnowMonster/snowMonsterStandby.png";
        }
        else if (battleEnemy == "Fire Cat"){
            //Setting event title
            eventTitle.innerHTML = "<big>BATTLE:</big> Fire Cat";
             //Setting enemy icon
            enemyIcon.src = "Sprites/FireCat/fireCatStandby.png";
        }
        //Sets event description
        eventDetails.innerHTML = 
            "<big>ATK: </big>" + enemyATK +
            "<br> <big>DEF: </big>" + enemyDEF +
            "<br> <big>HP: </big>" + enemyATK;

    }
    //If event is a special event
    else if (eventType == "Special"){
        //If number generated was below the negative requirement
        if (num <= negReq){
            //Sets negative event to true
            negative = true;
        }
        //Generates new number from 1-100
        num = Math.floor(Math.random() * 100) + 1;

        //If event is negative
        if (negative == true){
            //If number generated was less than or equal to 25
            if (num <= 25){
                //Event is Restless Night
                eventName = "Restless Night";
                //Setting event title
                eventTitle.innerHTML = "Restless Night";
                //Setting event description
                eventDetails.innerHTML = "Each character's energy decreased by: " + changeEnergy;
            }
            //If number generated was more than 25 and less than or equal to 50
            else if (num > 25 && num <= 50){
                //Event is Night Attack
                eventName = "Night Attack";
                //Setting event title
                eventTitle.innerHTML = "Night Attack";
                //Setting event description
                eventDetails.innerHTML = "Each character's ATK decreased by: " + changeATK;
            }
            //If number generated was more than 50 and less than or equal to 75
            else if (num > 50 && num <= 75){
                //Event is Debuff
                eventName = "Debuff";
                //Setting event title
                eventTitle.innerHTML = "Debuff";
                //setting event description
                eventDetails.innerHTML = "Each characters max " + energyOrHP + " decreased by: " + changeDEF;
            }
            //If number generated was more than 75
            else if (num > 75){
                //Event is Chase Away
                eventName = "Chase Away";
                //Setting event title
                eventTitle.innerHTML = "Chase Away";
                //Setting event description
                eventDetails.innerHTML = "Chased you back " + changeSpace + " spaces";
            }
        }
        //If event is positive
        else{
            //If number generated was less than or equal to 20
            if (num <= 20){
                //Event is ATK Bonus
                eventName = "ATK Bonus";
                //Setting event title
                eventTitle.innerHTML = "ATK Bonus";
                //Setting event description
                eventDetails.innerHTML = "Each character's ATK increased by: " + changeATK;
            }
            //If number generated was more than 20 and less than or equal to 40
            else if (num > 20 && num <= 40){
                //Event is DEF Bonus
                eventName = "DEF Bonus";
                //Setting event title
                eventTitle.innerHTML = "DEF Bonus";
                //Setting event description
                eventDetails.innerHTML = "Each character's DEF increased by: " + changeDEF;
            }
            //If number generated was more than 40 and less than or equal to 60
            else if (num > 40 && num <= 60){
                //Event is Health Bonus
                eventName = "Health Bonus";
                //Setting event title
                eventTitle.innerHTML = "Health Bonus";
                //Setting event description
                eventDetails.innerHTML = "Each character's max HP increased by: " + changeHP;
            }
           //If number generated was more than 60 and less than or equal to 80
           else if (num > 60 && num <= 80){
                //Event is Energy Bonus
                eventName = "Energy Bonus";
                //Setting event title
                eventTitle.innerHTML = "Energy Bonus";
                //Setting event description
                eventDetails.innerHTML = "Each character's max energy increased by: " + changeEnergy;
           } 
           //If number generated was more than 80
           else if (num > 80){
                //Event is Rest Day
                eventName = "Rest Day";
                //Setting event title
                eventTitle.innerHTML = "Rest Day";
                //Setting event description
                eventDetails.innerHTML = "Each character restored to max HP and energy";
           }
        }
    }

}

function easyBattleOrEvent(){
    //If number generated was less than or equal to 50
    if (num <= 50){
        //Event is a battle
        eventType = "Battle";
    }
    //If number generated was more than 50
    else{
        //Event is a special event
        eventType = "Special";
    }
}

function regularBattleOrEvent(){
    //If number generated was less than or equal to 60
    if (num <= 60){
        //Event is a battle
        eventType = "Battle";
    }
    //If number generated was more than 60
    else{
        //Event is a special event
        eventType = "Special";
    }
}

function hardBattleOrEvent(){
    //If number generated was less than or equal to 70
    if (num <= 70){
        //Event is a battle
        eventType = "Battle";
    }
    //If number generated was more than 70
    else{
        //Event is a special event
        eventType = "Special";
    }
}

function insaneBattleOrEvent(){
    //If number generated was less than or equal to 85
    if (num <= 85){
        //Event is a battle
        eventType = "Battle";
    }
    //If number generated was more than 85
    else{
        //Event is a special event
        eventType = "Special";
    }
}

function easyBattleEnemy(){
    //If number generated was less than or equal to 25
    if (num <= 25){
        //Enemy is slime
        battleEnemy = "Slime";
    }
    //If number generated was more than 25 and less than or equal to 45
    else if (num > 25 && num <= 45){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
    }
    //If number generated was more than 45 and less than or equal to 60
    else if (num > 45 && num <= 60){
        //Enemy is Crab
        battleEnemy = "Crab";
    }
    //If number generated was more than 60 and less than or equal to 80
    else if (num > 60 && num <= 80){
        //Enemy is Drone
        battleEnemy = "Drone";
    }
    //If number generated was more than 80 and less than or equal to 90
    else if (num > 80 && num <= 90){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
    }
    //If number generated was more than 90
    else if (num > 90){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
    }
}

function regularBattleEnemy(){
    //If number generated was less than or equal to 7
    if (num <= 7){
        //Enemy is slime
        battleEnemy = "Slime";
    }
    //If number generated was more than 7 and less than or equal to 15
    else if (num > 7 && num <= 15){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
    }
    //If number generated was more than 15 and less than or equal to 65
    else if (num > 15 && num <= 65){
        //Enemy is Crab
        battleEnemy = "Crab";
    }
    //If number generated was more than 65 and less than or equal to 80
    else if (num > 65 && num <= 80){
        //Enemy is Drone
        battleEnemy = "Drone";
    }
    //If number generated was more than 80 and less than or equal to 85
    else if (num > 80 && num <= 85){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
    }
    //If number generated was more than 85
    else if (num > 85){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
    }
}

function hardBattleEnemy(){
    //If number generated was less than or equal to 10
    if (num <= 10){
        //Enemy is slime
        battleEnemy = "Slime";
    }
    //If number generated was more than 10 and less than or equal to 25
    else if (num > 10 && num <= 25){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
    }
    //If number generated was more than 25 and less than or equal to 35
    else if (num > 25 && num <= 35){
        //Enemy is Crab
        battleEnemy = "Crab";
    }
    //If number generated was more than 35 and less than or equal to 45
    else if (num > 35 && num <= 45){
        //Enemy is Drone
        battleEnemy = "Drone";
    }
    //If number generated was more than 45 and less than or equal to 95
    else if (num > 45 && num <= 95){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
    }
    //If number generated was more than 95
    else if (num > 95){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
    }
}

function insaneBattleEnemy(){
    //If number generated was less than or equal to 10
    if (num <= 10){
        //Enemy is slime
        battleEnemy = "Slime";
    }
    //If number generated was more than 10 and less than or equal to 20
    else if (num > 10 && num <= 20){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
    }
    //If number generated was more than 20 and less than or equal to 35
    else if (num > 20 && num <= 35){
        //Enemy is Crab
        battleEnemy = "Crab";
    }
    //If number generated was more than 35 and less than or equal to 45
    else if (num > 35 && num <= 45){
        //Enemy is Drone
        battleEnemy = "Drone";
    }
    //If number generated was more than 45 and less than or equal to 50
    else if (num > 45 && num <= 50){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
    }
    //If number generated was more than 50
    else if (num > 50){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
    }
}

function processEvent(){
    //If event is a special event
    if (eventType = "Special"){
        //If event is ATK Bonus
        if (eventName = "ATK Bonus"){
            atkBonus();
        }
        //If event is DEF Bonus
        else if (eventName == "DEF Bonus"){
            defBonus();
        }
        //If event is HP Bonus
        else if (eventName == "Health Bonus"){
            healthBonus();
        }
        //If event is Energy Bonus
        else if (eventName == "Energy Bonus"){
            energyBonus();
        }
        //If event is Rest Day
        else if (eventName == "Rest Day"){
            restDay();
        }
        //If event is Restless Night
        else if (eventName == "Restless Night"){
            restlessNight();
        }
        //If event is Night Attack
        else if (eventName == "Night Attack"){
            nightAttack();
        }
        //If event is Debuff
        else if (eventName == "Debuff"){

        }
        //If event is Chase Away
        else if (eventName == "Chase Away"){

        }
    }
}

function atkBonus(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 1.501;
        maxNum = 2.01;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 0.751;
        maxNum = 1.001;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 0.31;
        maxNum = 0.51;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 0.11;
        maxNum = 0.251;
    }

    //Generates random number between max and min
    changeATK = Math.random() * (maxNum - minNum) + minNum;
    //Rounds number to 2 decimal places
    changeATK = Math.round(changeATK * 100) / 100; 

    //Changes ATK multiplier
    attackMul += changeATK;
}

function defBonus(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 1.51;
        maxNum = 2.01;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 0.751;
        maxNum = 1.01;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 0.31;
        maxNum = 0.51;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 0.11;
        maxNum = 0.251;
    }

    //Generates random number between max and min
    changeDEF = Math.random() * (maxNum - minNum) + minNum;
    //Rounds number to 2 decimal places
    changeDEF = Math.round(changeDEF * 100) / 100; 

    //Changes DEF multiplier
    defenceMul += changeDEF;
}

function healthBonus(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 30;
        maxNum = 40;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 20;
        maxNum = 25;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 10;
        maxNum = 15;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 5;
        maxNum = 10;
    }

    //Generates random number between max and min
    changeHP = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    //Changes max HP
    maxHealth += changeHP;
}

function energyBonus(){
     //If difficulty is easy
     if (difficulty == "Easy"){
        minNum = 30;
        maxNum = 40;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 20;
        maxNum = 25;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 10;
        maxNum = 15;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 5;
        maxNum = 10;
    }

    //Generates random number between max and min
    changeEnergy = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    //Changes max energy multiplier
    maxEnergy += changeEnergy;
}

function restDay(){
    //Sets characters' HP and Energy to max value
    renHP = maxHealth;
    renEnergy = maxEnergy;
    lukaHP = maxHealth;
    lukaEnergy = maxEnergy;
    ollieHP = maxHealth;
    ollieEnergy = maxEnergy;
    caidynHP = maxHealth;
    caidynEnergy = maxEnergy;
}

function restlessNight(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 1;
        maxNum = 5;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 5;
        maxNum = 10;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 15;
        maxNum = 20;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 25;
        maxNum = 30;
    }

    //Generates random number between max and min
    changeEnergy = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    //Changes energy levels
    renEnergy -= changeEnergy;
    lukaEnergy -= changeEnergy;
    ollieEnergy -= changeEnergy;
    caidynEnergy -= changeEnergy;
}

function nightAttack(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 1;
        maxNum = 5;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 5;
        maxNum = 10;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 15;
        maxNum = 20;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 25;
        maxNum = 30;
    }

    //Generates random number between max and min
    changeHP = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    //Changes characters' health
    renHP -= changeHP;
    lukaHP -= changeHP;
    ollieHP -= changeHP;
    caidynHP -= changeHP;
}