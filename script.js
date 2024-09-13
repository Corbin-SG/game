//Variables
var bgImage = document.getElementById("bckgroundImg");
var infoButton = document.getElementById("info");
var startButton = document.getElementById("start");
var backToMainButton = document.getElementById("backToMain");
var backFromInfo = document.getElementById("backFromInfo")
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
var enemyBattle = document.getElementById("enemyBattle");
var renBattle = document.getElementById("renBattle");
var lukaBattle = document.getElementById("lukaBattle");
var ollieBattle = document.getElementById("ollieBattle");
var caidynBattle = document.getElementById("caidynBattle");
var attackButton = document.getElementById("attackButton");
var specialButton = document.getElementById("specialButton");

//Screens
var startScr = document.getElementById("startScreen");
var infoScr = document.getElementById("infoScreen");
var diffScr = document.getElementById("diffSelect");
var charScr = document.getElementById("charSelect");
var charInfoScr = document.getElementById("charInfo");
var mapScr = document.getElementById("mapScreen");
var eventScr = document.getElementById("eventDesc");
var battleScr = document.getElementById("battleScreen");

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
let debuffValue = 0;

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
var enemyPos = [0, 0];
var renPos = [0, 0];
var lukaPos = [0, 0];
var olliePos = [0, 0];
var caidynPos = [0, 0];
var x = 0;
var posArray = [];
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
    bgImage.src = "Backgrounds/notebookScreen.png";
    startScr.hidden = true;
    infoScr.hidden = false;
});

backToMainButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/startScreen.png";
    startScr.hidden = false;
    diffScr.hidden = true;
})

backFromInfo.addEventListener("click", function(){
    bgImage.src = "Backgrounds/startScreen.png";
    startScr.hidden = false;
    infoScr.hidden = true;
})

startButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/notebookScreen.png";
    startScr.hidden = true;
    diffScr.hidden = false;
})

easyButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/secondNotebookScreen.png";
    charScr.hidden = false;
    diffScr.hidden = true;

    //Set difficulty
    difficulty = "Easy";
    //Set negative event ratio
    negReq = 25;
    //Set move button
    moveButton.style.left = "20%";
    moveButton.style.top = "2%";
    moveButton.style.height = "40%";
    moveButton.style.width = "60%";
    moveButton.style.fontSize = "600%";
    //Set position
    maxSpot = 8;
    posArray = easy;
    mapIcon.style.top = posArray[0][0] + "%";
    mapIcon.style.left = posArray[0][1] + "%";

})

regularButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/secondNotebookScreen.png";
    charScr.hidden = false;
    diffScr.hidden = true;
    //Set difficulty
    difficulty = "Regular";
    //Set negative event ratio
    negReq = 50;
    //Set move button
    moveButton.style.left = "2%";
    moveButton.style.top = "2%";
    moveButton.style.height = "35%";
    moveButton.style.width = "50%";
    moveButton.style.fontSize = "500%";
    //Set position
    maxSpot = 13;
    posArray = regular;
    mapIcon.style.top = posArray[0][0] + "%";
    mapIcon.style.left = posArray[0][1] + "%";

})

hardButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/secondNotebookScreen.png";
    charScr.hidden = false;
    diffScr.hidden = true;
    //Set difficulty
    difficulty = "Hard";
    //Set negative event ratio
    negReq = 60;
    //Set move button
    moveButton.style.left = "14%";
    moveButton.style.top = "87%";
    moveButton.style.width = "30%";
    moveButton.style.height = "10%";
    moveButton.style.fontSize = "300%";
    //Set position
    maxSpot = 24;
    posArray = hard;
    mapIcon.style.top = posArray[0][0] + "%";
    mapIcon.style.left = posArray[0][1] + "%";
})

insaneButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/secondNotebookScreen.png";
    charScr.hidden = false;
    diffScr.hidden = true;
    //Set difficulty
    difficulty = "Insane";
    //Set negative event ratio
    negReq = 75;
    //Set move button
    moveButton.style.left = "1%";
    moveButton.style.top = "50%";
    moveButton.style.width = "35%";
    moveButton.style.height = "25%";
    moveButton.style.fontSize = "400%";
    //Set position
    maxSpot = 31;
    posArray = insane;
    mapIcon.style.top = posArray[0][0] + "%";
    mapIcon.style.left = posArray[0][1] + "%";
})

backToDifficultyButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/notebookScreen.png";
    diffScr.hidden = false;
    charScr.hidden = true;

})

renButton.addEventListener("click", function(){
    //Change screen
    bgImage.src = "Backgrounds/thirdNotebookScreen.png";
    charInfoScr.hidden = false;
    charScr.hidden = true;
    //Set character & Display aspects
    charName = "Ren";
    display.src = "Sprites/Ren/renSelect.png";
    mapIcon.src = "Sprites/Ren/renSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Sword Attack</small><br> <small>50 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Smoke Attack</small><br> <small>75 Base DMG</small>";
})

lukaButton.addEventListener("click", function(){
    //Change screen
    bgImage.src = "Backgrounds/thirdNotebookScreen.png";
    charInfoScr.hidden = false;
    charScr.hidden = true;
    //Set character & Display aspects
    charName = "Luka";
    display.src = "Sprites/Luka/lukaSelect.png";
    mapIcon.src = "Sprites/Luka/lukaSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Smoke Attack</small><br> <small>30 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Enemy Debuff</small><br> <small>Decreases Enemy DEF</small>";
})

ollieButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/thirdNotebookScreen.png";
    charInfoScr.hidden = false;
    charScr.hidden = true;
    //Set character & Display aspects
    charName = "Ollie";
    display.src = "Sprites/Ollie/ollieSelect.png";
    mapIcon.src = "Sprites/Ollie/ollieSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Sword Attack</small><br> <small>45 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Rapid Sword Attack</small><br> <small>80 Base DMG</small>";
})

caidynButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/thirdNotebookScreen.png";
    charInfoScr.hidden = false;
    charScr.hidden = true;
    //Set character & Display aspects
    charName = "Caidyn";
    display.src = "Sprites/Caidyn/caidynSelect.png";
    mapIcon.src = "Sprites/Caidyn/caidynSelect.png";
    attackDesc.innerHTML = "<big>ATTACK ( Q ):</big> <br><small>Bow Attack</small><br> <small>30 Base DMG</small>";
    specialDesc.innerHTML = "<big>SPECIAL ( E ):</big> <br><small>Heal</small><br> <small>Heals Teammate With Lowest HP</small>";
})

backToChar.addEventListener("click", function(){
    //Change screen
    bgImage.src = "Backgrounds/secondNotebookScreen.png";
    charScr.hidden = false;
    charInfoScr.hidden = true;

})

confirmCharButton.addEventListener("click", function(){
    if (difficulty.localeCompare("Easy") == 0){
        bgImage.src = "Backgrounds/easyMap.png";
    }
    else if (difficulty.localeCompare("Regular") == 0){
        bgImage.src = "Backgrounds/regularMap.png";
    }
    else if (difficulty.localeCompare("Hard") == 0){
        bgImage.src = "Backgrounds/hardMap.png";
    }
    else if (difficulty.localeCompare("Insane") == 0){
        bgImage.src = "Backgrounds/insaneMap.png";
    }
    mapScr.hidden = false;
    charInfoScr.hidden = true;
})

moveButton.addEventListener("click", function(){
    bgImage.src = "Backgrounds/grayScreen.png";
    mapScr.hidden = true;
    //Moves player position
    movePosition();
    //Decides which event happens
    decideEvent();

    //Moves to event screen
    eventScr.hidden = false;
})

nextButton.addEventListener("click", function(){
    //Changes screen
    if (difficulty.localeCompare("Easy") == 0){
        bgImage.src = "Backgrounds/easyMap.png";
    }
    else if (difficulty.localeCompare("Regular") == 0){
        bgImage.src = "Backgrounds/regularMap.png";
    }
    else if (difficulty.localeCompare("Hard") == 0){
        bgImage.src = "Backgrounds/hardMap.png";
    }
    else if (difficulty.localeCompare("Insane") == 0){
        bgImage.src = "Backgrounds/insaneMap.png";
    }
    eventScr.hidden = true;
    processBattle();
    mapScr.hidden = false;
})

function showBattle(){
    //Changing background
    /* if (difficulty.localeCompare("Easy") == 0){
        bgImage.src = "Backgrounds/easyBattle.png"
        enemyPos = [46, 63];
        renPos = [70, 73];
    }
    else if (difficulty.localeCompare("Regular") == 0){
        bgImage.src = "Backgrounds/regularBattle.png";
    }
    else if (difficulty.localeCompare("Hard") == 0){
        bgImage.src = "Backgrounds/hardBattle.png";
    }
    else if (difficulty.localeCompare("Insane") == 0){
        bgImage.src = "Backgrounds/insaneBattle.png";
    } */

    //TEST
    bgImage.src = "Backgrounds/easyBattle.png";

    //Unhiding map sprites/buttons
    enemyBattle.hidden = false;
    renBattle.hidden = false;
    lukaBattle.hidden = false;
    ollieBattle.hidden = false;
    caidynBattle.hidden = false;
    attackButton.hidden = false;
    specialButton.hidden = false;

}

function movePosition(){
    x++;
    mapIcon.style.top = posArray[x][0] + "%";
    mapIcon.style.left = posArray[x][1] + "%";
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
        //Generates enemy health
        enemyHP = Math.floor(Math.random() * (maxNum - minNum) ) + minNum;
        //Sets event description
        eventDetails.innerHTML = 
            "<big>HP: </big>" + enemyHP +
            "<br> <big>DEF: </big>" + enemyDEF;

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
                //Processing event
                restlessNight();
                //Setting event description
                eventDetails.innerHTML = "Each character's energy decreased by: " + changeEnergy;
                enemyIcon.src = "Sprites/eventIcons/restlessNightIcon.png";
            }
            //If number generated was more than 25 and less than or equal to 50
            else if (num > 25 && num <= 50){
                //Event is Night Attack
                eventName = "Night Attack";
                //Setting event title
                eventTitle.innerHTML = "Night Attack";
                //Processing event
                nightAttack();
                //Setting event description
                eventDetails.innerHTML = "Each character's ATK decreased by: " + changeATK;
                enemyIcon.src = "Sprites/eventIcons/nightAttackIcon.png";
            }
            //If number generated was more than 50 and less than or equal to 75
            else if (num > 50 && num <= 75){
                //Event is Debuff
                eventName = "Debuff";
                //Setting event title
                eventTitle.innerHTML = "Debuff";
                //Processing event
                debuffEvent();
                //setting event description
                eventDetails.innerHTML = "Each characters max " + energyOrHP + " decreased by: " + debuffValue;
                enemyIcon.src = "Sprites/eventIcons/debuffIcon.png";
            }
            //If number generated was more than 75
            else if (num > 75){
                //Event is Chase Away
                eventName = "Chase Away";
                //Setting event title
                eventTitle.innerHTML = "Chase Away";
                //Processing event
                chaseAway();
                //Setting event description
                eventDetails.innerHTML = "Chased you back " + changeSpace + " spaces";
                enemyIcon.src = "Sprites/eventIcons/chaseAwayIcon.png";
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
                //Processing event
                atkBonus();
                //Setting event description
                eventDetails.innerHTML = "Each character's ATK increased by: " + changeATK;
                enemyIcon.src = "Sprites/eventIcons/attackBonusIcon.png";
            }
            //If number generated was more than 20 and less than or equal to 40
            else if (num > 20 && num <= 40){
                //Event is DEF Bonus
                eventName = "DEF Bonus";
                //Setting event title
                eventTitle.innerHTML = "DEF Bonus";
                //Processing event
                defBonus();
                //Setting event description
                eventDetails.innerHTML = "Each character's DEF increased by: " + changeDEF;
                enemyIcon.src = "Sprites/eventIcons/defenceBonusIcon.png";
            }
            //If number generated was more than 40 and less than or equal to 60
            else if (num > 40 && num <= 60){
                //Event is Health Bonus
                eventName = "Health Bonus";
                //Setting event title
                eventTitle.innerHTML = "Health Bonus";
                //Processing event
                healthBonus();
                //Setting event description
                eventDetails.innerHTML = "Each character's max HP increased by: " + changeHP;
                enemyIcon.src = "Sprites/eventIcons/healthBonusIcon.png";
            }
           //If number generated was more than 60 and less than or equal to 80
           else if (num > 60 && num <= 80){
                //Event is Energy Bonus
                eventName = "Energy Bonus";
                //Setting event title
                eventTitle.innerHTML = "Energy Bonus";
                //Processing event
                energyBonus();
                //Setting event description
                eventDetails.innerHTML = "Each character's max energy increased by: " + changeEnergy;
                enemyIcon.src = "Sprites/eventIcons/energyBonusIcon.png";
           } 
           //If number generated was more than 80
           else if (num > 80){
                //Event is Rest Day
                eventName = "Rest Day";
                //Setting event title
                eventTitle.innerHTML = "Rest Day";
                //Processing event
                restDay();
                //Setting event description
                eventDetails.innerHTML = "Each character restored to max HP and energy";
                enemyIcon.src = "Sprites/eventIcons/restDayIcon.png";
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
        //Max and min health values
        maxNum = 500;
        minNum = 300;
    }
    //If number generated was more than 25 and less than or equal to 45
    else if (num > 25 && num <= 45){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
        //Max and min health values
        maxNum = 250;
        minNum = 150;
    }
    //If number generated was more than 45 and less than or equal to 60
    else if (num > 45 && num <= 60){
        //Enemy is Crab
        battleEnemy = "Crab";
        //Max and min health values
        maxNum = 600;
        minNum = 400;
    }
    //If number generated was more than 60 and less than or equal to 80
    else if (num > 60 && num <= 80){
        //Enemy is Drone
        battleEnemy = "Drone";
        //Max and min health values
        maxNum = 100;
        minNum = 150;
    }
    //If number generated was more than 80 and less than or equal to 90
    else if (num > 80 && num <= 90){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
        //Max and min health values
        maxNum = 300;
        minNum = 150;
    }
    //If number generated was more than 90
    else if (num > 90){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
        //Max and min health values
        maxNum = 100;
        minNum = 250;
    }
}

function regularBattleEnemy(){
    //If number generated was less than or equal to 7
    if (num <= 7){
        //Enemy is slime
        battleEnemy = "Slime";
        //Max and min health values
        maxNum = 700;
        minNum = 500;
    }
    //If number generated was more than 7 and less than or equal to 15
    else if (num > 7 && num <= 15){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
        //Max and min health values
        maxNum = 350;
        minNum = 250;
    }
    //If number generated was more than 15 and less than or equal to 65
    else if (num > 15 && num <= 65){
        //Enemy is Crab
        battleEnemy = "Crab";
        //Max and min health values
        maxNum = 800;
        minNum = 600;
    }
    //If number generated was more than 65 and less than or equal to 80
    else if (num > 65 && num <= 80){
        //Enemy is Drone
        battleEnemy = "Drone";
        //Max and min health values
        maxNum = 200;
        minNum = 150;
    }
    //If number generated was more than 80 and less than or equal to 85
    else if (num > 80 && num <= 85){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
        //Max and min health values
        maxNum = 500;
        minNum = 300;
    }
    //If number generated was more than 85
    else if (num > 85){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
        //Max and min health values
        maxNum = 400;
        minNum = 250;
    }
}

function hardBattleEnemy(){
    //If number generated was less than or equal to 10
    if (num <= 10){
        //Enemy is slime
        battleEnemy = "Slime";
        //Max and min health values
        maxNum = 1000;
        minNum = 700;
    }
    //If number generated was more than 10 and less than or equal to 25
    else if (num > 10 && num <= 25){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
        //Max and min health values
        maxNum = 500;
        minNum = 350;
    }
    //If number generated was more than 25 and less than or equal to 35
    else if (num > 25 && num <= 35){
        //Enemy is Crab
        battleEnemy = "Crab";
        //Max and min health values
        maxNum = 1000;
        minNum = 800;
    }
    //If number generated was more than 35 and less than or equal to 45
    else if (num > 35 && num <= 45){
        //Enemy is Drone
        battleEnemy = "Drone";
        //Max and min health values
        maxNum = 350;
        minNum = 200;
    }
    //If number generated was more than 45 and less than or equal to 95
    else if (num > 45 && num <= 95){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
        //Max and min health values
        maxNum = 750;
        minNum = 500;
    }
    //If number generated was more than 95
    else if (num > 95){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
        //Max and min health values
        maxNum = 700;
        minNum = 400;
    }
}

function insaneBattleEnemy(){
    //If number generated was less than or equal to 10
    if (num <= 10){
        //Enemy is slime
        battleEnemy = "Slime";
        //Max and min health values
        maxNum = 1500;
        minNum = 1000;
    }
    //If number generated was more than 10 and less than or equal to 20
    else if (num > 10 && num <= 20){
        //Enemy is Dark Matter
        battleEnemy = "Dark Matter";
        //Max and min health values
        maxNum = 750;
        minNum = 500;
    }
    //If number generated was more than 20 and less than or equal to 35
    else if (num > 20 && num <= 35){
        //Enemy is Crab
        battleEnemy = "Crab";
        //Max and min health values
        maxNum = 1700;
        minNum = 1000;
    }
    //If number generated was more than 35 and less than or equal to 45
    else if (num > 35 && num <= 45){
        //Enemy is Drone
        battleEnemy = "Drone";
        //Max and min health values
        maxNum = 500;
        minNum = 350;
    }
    //If number generated was more than 45 and less than or equal to 50
    else if (num > 45 && num <= 50){
        //Enemy is Snow Monster
        battleEnemy = "Snow Monster";
        //Max and min health values
        maxNum = 1100;
        minNum = 750;
    }
    //If number generated was more than 50
    else if (num > 50){
        //Enemy is Fire Cat
        battleEnemy = "Fire Cat";
        //Max and min health values
        maxNum = 1000;
        minNum = 700;
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

function debuffEvent(){
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

    //Generates random nunmber (1 or 2)
    num = Math.floor(Math.random() * (2 - 1 + 1) ) + 1;

    //If number is 1
    if (num == 1){
        //Debuff HP
        energyOrHP = "HP";
        //Generates random number between max and min
        debuffValue = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

        //Changes max HP
        maxHealth -= debuffValue;
    }
    //If number is 2
    if (num == 2){
        //Debuff energy
        energyOrHP = "Energy";
        //Generates random number between max and min
        debuffValue = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

        //Changes max energy multiplier
        maxEnergy -= debuffValue;
    }
}

function chaseAway(){
    //If difficulty is easy
    if (difficulty == "Easy"){
        minNum = 1;
        maxNum = 2;
    }
    //If difficulty is regular
    else if (difficulty == "Regular"){
        minNum = 3;
        maxNum = 4;
    }
    //If difficulty is hard
    else if (difficulty == "Hard"){
        minNum = 4;
        maxNum = 6;
    }
    //If difficulty is insane
    else if (difficulty == "Insane"){
        minNum = 6;
        maxNum = 10;
    }

    //Generates random number between max and min
    changeSpace = Math.floor(Math.random() * (maxNum - minNum + 1) ) + minNum;

    x -= changeSpace;
    mapIcon.style.top = posArray[x][0] + "%";
    mapIcon.style.left = posArray[x][1] + "%";
}

function processBattle(){

}