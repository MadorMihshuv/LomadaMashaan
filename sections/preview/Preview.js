let backBtn;
let nextBtn;
let continueBtn;

let previewBackground;
let blackBackground;
let body;

let pageNum;

let popUp1;
let popUp2;
let popUp3;
let popUp4;
let popUpBtn1;
let popUpBtn2;
let popUpBtn3;
let popUpBtn4;

let popUp1Entered;
let popUp2Entered;
let popUp3Entered;
let popUp4Entered;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Preview/בואו\ נכיר.png")' , 'url("/assets/Preview/תחומי\ האחריות\ של\ מרכז\ תעצ.png")' ,'url("/assets/Preview/מיהו\ עובד\ צהל\ בלי\ כפתורים.png")','url("/assets/Preview/דרגות\ תקן.png")', 'url("/assets/Preview/עבודה\ עם\ מערכות\ צהל.png")' , 'url("/assets/Preview/דור\ א\ דור\ ב.png")' , 'url("/assets/Preview/כניסה\ לקביעות.png")'];



//Onload function
window.onload = function() {
    history.pushState(null,null, location.href);
    Load();
    blackBackground.style.animation = "hideBackground 1.5s";
}

window.onpopstate = function(event) {
    history.go(1);
}

//Onload function
function Load() {
    pageNum = 0;
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");
    previewBackground = document.getElementById("previewBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");

    popUp1 = document.getElementById("popUp1");
    popUp2 = document.getElementById("popUp2");
    popUp3 = document.getElementById("popUp3");
    popUp4 = document.getElementById("popUp4");
    popUpBtn1 = document.getElementById("popUpBtn1");
    popUpBtn2 = document.getElementById("popUpBtn2");
    popUpBtn3 = document.getElementById("popUpBtn3");
    popUpBtn4 = document.getElementById("popUpBtn4");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 7){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 2:
                popUpBtn1.style.visibility = "visible";
                popUpBtn2.style.visibility = "visible";
                popUpBtn3.style.visibility = "visible";
                popUpBtn4.style.visibility = "visible";
                popUpBtn1.style.animation = "haasakaEffect 0.8s forwards";
                popUpBtn2.style.animation = "haasakaEffect 0.8s 0.8s forwards";
                popUpBtn3.style.animation = "haasakaEffect 0.8s 1.6s forwards";
                popUpBtn4.style.animation = "haasakaEffect 0.8s 2.4s forwards";
                nextBtn.style.visibility = "hidden";
                setTimeout(() => {
                    popUpBtn1.style.animation = "0";
                    popUpBtn2.style.animation = "0";
                    popUpBtn3.style.animation = "0";
                    popUpBtn4.style.animation = "0";
                }, 4800);
                break;
            case 3:
                popUpBtn1.style.visibility = "hidden";
                popUpBtn2.style.visibility = "hidden";
                popUpBtn3.style.visibility = "hidden";
                popUpBtn4.style.visibility = "hidden";
                break;
            case 6:
                continueBtn.style.visibility = "visible";
                nextBtn.style.visibility = "hidden";
                break;
            default:
                break;
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '1') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 2);
        previewBackground.style.visibility = "visible";
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
    console.log(pageNum);
    switch(pageNum) {
        case 0:
            backBtn.style.visibility = "hidden";
        case 1:
            popUpBtn1.style.visibility = "hidden";
            popUpBtn2.style.visibility = "hidden";
            popUpBtn3.style.visibility = "hidden";
            popUpBtn4.style.visibility = "hidden";
            break;
        case 2:
            popUpBtn1.style.visibility = "visible";
            popUpBtn2.style.visibility = "visible";
            popUpBtn3.style.visibility = "visible";
            popUpBtn4.style.visibility = "visible";
            break;
        case 5:
            continueBtn.style.visibility = "hidden";
            break;
        default:
            break;
    }
}

function PopUp1() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp1.style.visibility = "visible";
    popUp1Entered = true;
    body.addEventListener("click" , ExitPopUp , true);
}

function PopUp2() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp2.style.visibility = "visible";
    popUp2Entered = true;
    body.addEventListener("click" , ExitPopUp, true);
}

function PopUp3() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp3.style.visibility = "visible";
    popUp3Entered = true;
    body.addEventListener("click" , ExitPopUp, true);
}

function PopUp4() {
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.85";
    popUp4.style.visibility = "visible";
    popUp4Entered = true;
    body.addEventListener("click" , ExitPopUp, true);
}

function ExitPopUp() {
    blackBackground.style.visibility = "hidden";
    popUp1.style.visibility = "hidden";
    popUp2.style.visibility = "hidden";
    popUp3.style.visibility = "hidden";
    popUp4.style.visibility = "hidden";
    if(popUp1Entered && popUp2Entered && popUp3Entered && popUp4Entered) {
        nextBtn.style.visibility = "visible";
    }
    else {
        nextBtn.style.visibility = "hidden";
    }
}