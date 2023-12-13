let backBtn;
let nextBtn;
let continueBtn;

let sacharBackground;
let blackBackground;
let body;
let pageNum;

let popUp1;
let popUp2;
let popUp3;
let popUpBtn1;
let popUpBtn2;
let popUpBtn3;
let popUpBtnZohar1;
let popUpBtnZohar2;
let popUpBtnZohar3;

let astronaut;
let visibleOrHidden;

let drihut;
let hilit;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Sachar/תוספות\ והסכמי\ שכר.png")' ,'url("/assets/Sachar/שעות\ העסקה.png")','url("/assets/Sachar/שעות\ נוספת.png")','url("/assets/Sachar/תנאי\ העסקה\ ושכר.png")','url("/assets/Sachar/תנאים\ סוציאלים.png")'];


//Onload function
window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    drihut.style.animation = "DrihutAnimation 1.5s 0.5s forwards";
    hilit.style.animation = "HilitAnimation 1.5s 1.5s forwards";
    blackBackground.style.animation = "hideBackground 1.5s";
}

window.onpopstate = function(event) {
    history.go(1);
};

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");
    sacharBackground = document.getElementById("sacharBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");

    popUp1 = document.getElementById("popUp1");
    popUp2 = document.getElementById("popUp2");
    popUp3 = document.getElementById("popUp3");
    popUpBtn1 = document.getElementById("popUpBtn1");
    popUpBtn2 = document.getElementById("popUpBtn2");
    popUpBtn3 = document.getElementById("popUpBtn3");
    popUpBtnZohar1 = document.getElementById("popUpBtnZohar1");
    popUpBtnZohar2 = document.getElementById("popUpBtnZohar2");
    popUpBtnZohar3 = document.getElementById("popUpBtnZohar3");

    astronaut = document.getElementById("astronaut");

    drihut = document.getElementById("drihut");
    hilit = document.getElementById("hilit");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 5){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 1:
                drihut.style.visibility = "hidden";
                hilit.style.visibility = "hidden";
                break;
            case 2:
                astronaut.style.visibility = "visible";
                astronaut.style.animation = "astronautComeIn 3.5s forwards";
                break;
            case 3:
                astronaut.style.visibility = "hidden";
                popUpBtn1.style.visibility = "visible";
                popUpBtn2.style.visibility = "visible";
                popUpBtn3.style.visibility = "visible";
                popUpBtn1.style.animation = "PopUpEffect 0.8s forwards";
                popUpBtn2.style.animation = "PopUpEffect 0.8s 0.8s forwards";
                popUpBtn3.style.animation = "PopUpEffect 0.8s 1.6s forwards";
                setTimeout(() => {
                    popUpBtn1.style.animation = "0";
                    popUpBtn2.style.animation = "0";
                    popUpBtn3.style.animation = "0";
                }, 2400);
                break;
            case 4:
                popUp1.style.visibility = "hidden";
                popUp2.style.visibility = "hidden";
                popUp3.style.visibility = "hidden";
                popUpBtn1.style.visibility = "hidden";
                popUpBtn2.style.visibility = "hidden";
                popUpBtn3.style.visibility = "hidden";
                popUpBtnZohar1.style.visibility = "hidden";
                popUpBtnZohar2.style.visibility = "hidden";
                popUpBtnZohar3.style.visibility = "hidden";
                continueBtn.style.visibility = "visible";
                nextBtn.style.visibility = "hidden";
                break;
            default:
                break;
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '3') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 4);
        sacharBackground.style.visibility = "visible";
        questionBackground.style.visibility = "visible";
        questionBackground.style.animation = "fadeInQuestions 1.5s forwards";
        setTimeout(() => {
            questionBackground.style.visibility = "hidden";
            window.location.href = "/Exercise/Exercise.html";
        }, 3000);
    }
}

//Goes back on the pages of the sections
function GoBack() {
    pageNum--;
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    nextBtn.style.visibility = "visible";
    switch(pageNum) {
        case 0:
            backBtn.style.visibility = "hidden";
            drihut.style.visibility = "visible";
            hilit.style.visibility = "visible";
            break;
        case 1:
            astronaut.style.visibility = "hidden";
            break;
        case 2:
            popUpBtn1.style.visibility = "hidden";
            popUpBtn2.style.visibility = "hidden";
            popUpBtn3.style.visibility = "hidden";
            popUp1.style.visibility = "hidden";
            popUp2.style.visibility = "hidden";
            popUp3.style.visibility = "hidden";
            astronaut.style.visibility = "visible";
            break;
        case 3:
            popUpBtn1.style.visibility = "visible";
            popUpBtn2.style.visibility = "visible";
            popUpBtn3.style.visibility = "visible";
            continueBtn.style.visibility = "hidden";
            break;
        default:
            break;
    }
}

function PopUp1() {
    popUp1.style.visibility = "visible";
    popUpBtn1.style.visibility = "hidden";
    popUp1.addEventListener("click" , ExitPopUp1 , true);
}

function PopUp2() {
    popUp2.style.visibility = "visible";
    popUpBtn2.style.visibility = "hidden";
    popUp2.addEventListener("click" , ExitPopUp2, true);
}

function PopUp3() {
    popUp3.style.visibility = "visible";
    popUpBtn3.style.visibility = "hidden";
    popUp3.addEventListener("click" , ExitPopUp3, true);
}

function ExitPopUp1() {
    popUpBtn1.style.visibility = "visible";
    popUp1.style.visibility = "hidden";
}

function ExitPopUp2() {
    popUpBtn2.style.visibility = "visible";
    popUp2.style.visibility = "hidden";
}

function ExitPopUp3() {
    popUpBtn3.style.visibility = "visible";
    popUp3.style.visibility = "hidden";
}