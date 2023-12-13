let goBtn;
let startBtn;
let body;
let firstTime;

let redDot1;
let redDot2;
let redDot3;
let redDot4;
let redDot5;
let redDot6;
let redDot7;

const backgroundImages = ['url("./assets/עמוד\ פתיחה\ הקדמה\ 1-\ סופי.png")', 'url("./assets/עמוד\ פתיחה\ קליטה\ 2-\ סופי.png")', 'url("./assets/עמוד\ פתיחה\ תנאי\ העסקה\ \ 3-\ סופי.png")', 'url("./assets/עמוד\ פתיחה\ קידומים\ והטבות-4\ סופי.png")', 'url("./assets/עמוד_פתיחה_זכויות_וזכאויות_5_סופי.png")', 'url("./assets/עמוד_פתיחה_השירות_הסוציאלי_6_סופי.png")', 'url("./assets/עמוד\ פתיחה\ פרישה\ 7-סופי.png")'];


window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    body.style.animation = "fadeInQuestions 1s forwards";
    
    switch(sessionStorage.getItem("sectionNum")) {
        case "2":
            body.style.backgroundImage = backgroundImages[1];
            blackBackground.style.animation = "hideBackground 1.5s";

            
            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            break;
        case "3":
            body.style.backgroundImage = backgroundImages[2];
            blackBackground.style.animation = "hideBackground 1.5s";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            break;
        case "4":
            body.style.backgroundImage = backgroundImages[3];
            blackBackground.style.animation = "hideBackground 1.5s";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            redDot4.style.visibility = "visible";
            break;
        case "5":
            body.style.backgroundImage = backgroundImages[4];
            blackBackground.style.animation = "hideBackground 1.5s";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            redDot4.style.visibility = "visible";
            redDot5.style.visibility = "visible";
            break;
        case "6":
            body.style.backgroundImage = backgroundImages[5];
            blackBackground.style.animation = "hideBackground 1.5s";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            redDot4.style.visibility = "visible";
            redDot5.style.visibility = "visible";
            redDot6.style.visibility = "visible";
            break;
        case "7":
            body.style.backgroundImage = backgroundImages[6];
            blackBackground.style.animation = "hideBackground 1.5s";

            redDot1.style.visibility = "visible";
            redDot2.style.visibility = "visible";
            redDot3.style.visibility = "visible";
            redDot4.style.visibility = "visible";
            redDot5.style.visibility = "visible";
            redDot6.style.visibility = "visible";
            redDot7.style.visibility = "visible";
            break;
        case "8":
            window.location.href = "./sections/TheEnd/TheEnd.html";
        default:
            sessionStorage.setItem("questionNum", 0);
            sessionStorage.setItem("trueOrFalseNum", -1 );
            sessionStorage.setItem("sectionNum" , 1);
            body.style.backgroundImage = backgroundImages[0];
            break;
    }
}

window.onpopstate = function(event) {
    history.go(1);
};

//Loads all the variables
function Load() {
    startBtn = document.getElementById("startBtn");
    goBtn = document.getElementById("goBtn");
    body = document.getElementById("body");

    redDot1 = document.getElementById("redDot1");
    redDot2 = document.getElementById("redDot2");
    redDot3 = document.getElementById("redDot3");
    redDot4 = document.getElementById("redDot4");
    redDot5 = document.getElementById("redDot5");
    redDot6 = document.getElementById("redDot6");
    redDot7 = document.getElementById("redDot7");
};

//Loads the section map
function SectionMap() {
    window.location.href = "./sections/Preview/Preview.html";
};

//Loads the section page
function SectionPage() {
    switch(sessionStorage.getItem("sectionNum")) {
        case "2":
            window.location.href = "./sections/Klita/Klita.html";
            break;
        case "3":
            window.location.href = "./sections/Sachar/Sachar.html";
            break;
        case "4":
            window.location.href = "./sections/Sok/Sok.html";
            break;
        case "5":
            window.location.href = "./sections/Prat/Prat.html";
            break;
        case "6":
            window.location.href = "./sections/Os/Os.html";
            break;
        case "7":
            window.location.href = "./sections/Prisha/Prisha.html";
            break;
        default:
            window.location.href = "./sections/Preview/Preview.html";
            break;
    }
};

function Section1() {
    window.location.href = "./sections/Preview/Preview.html";
};

function Section2() {
    window.location.href = "./sections/Klita/Klita.html";
};


function Section3() {
    window.location.href = "./sections/Sachar/Sachar.html";
};


function Section4() {
    window.location.href = "./sections/Sok/Sok.html";
};


function Section5() {
    window.location.href = "./sections/Prat/Prat.html";
};


function Section6() {
    window.location.href = "./sections/Os/Os.html";
};

function Section7() {
    window.location.href = "./sections/Prisha/Prisha.html";
};

