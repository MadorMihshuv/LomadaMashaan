let backBtn;
let nextBtn;
let continueBtn;

let sokBackground;
let blackBackground;
let body;

let pageNum;

let log1;
let log2;
let log3;

let flower1;
let flower2;
let flower3;
let flower4;
let flower5;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Sok/דירוגי\ שכר.png")' ,'url("/assets/Sok/לימודים.png")','url("/assets/Sok/קידום\ בדרגות\ שכר.png")'];

//Onload function
window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
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
    sokBackground = document.getElementById("sokBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");

    log1 = document.getElementById("log1");
    log2 = document.getElementById("log2");
    log3 = document.getElementById("log3");

    flower1 = document.getElementById("flower1");
    flower2 = document.getElementById("flower2");
    flower3 = document.getElementById("flower3");
    flower4 = document.getElementById("flower4");
    flower5 = document.getElementById("flower5");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 3){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        if(pageNum === 1) {
            log1.style.visibility = "visible";
            log2.style.visibility = "visible";
            log3.style.visibility = "visible";
            log1.style.animation = "log1Move 1s";
            log2.style.animation = "log2Move 1s 1s";
            log3.style.animation = "log3Move 1s 2s";
        }
        else if(pageNum === 2) {
            log1.style.visibility = "hidden";
            log2.style.visibility = "hidden";
            log3.style.visibility = "hidden";
            continueBtn.style.visibility = "visible";
            nextBtn.style.visibility = "hidden";
            HideOrShowFlowersAndText(visible);
            text1.style.animation = "textFadeIn 1s forwards";
            text2.style.animation = "textFadeIn 1s 1s forwards";
            text3.style.animation = "textFadeIn 1s 2s forwards";
            text4.style.animation = "textFadeIn 1s 3s forwards";
            flower1.style.animation = "flowersAnimation 1s forwards";
            flower2.style.animation = "flowersAnimation 1s 1s forwards";
            flower3.style.animation = "flowersAnimation 1s 2s forwards";
            flower4.style.animation = "flowersAnimation 1s 3s forwards";
        }
        else if(pageNum === 3) {
            HideOrShowFlowersAndText(hidden);
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '4') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 5);
        sokBackground.style.visibility = "visible";
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
    if(pageNum === 0){
        backBtn.style.visibility = "hidden";
        log1.style.visibility = "hidden";
        log2.style.visibility = "hidden";
        log3.style.visibility = "hidden";
    }
    else if(pageNum === 1) {
        continueBtn.style.visibility = "hidden";
        log1.style.visibility = "visible";
        log2.style.visibility = "visible";
        log3.style.visibility = "visible";
        HideOrShowFlowersAndText(hidden);
    }
    else if(pageNum === 2){
        HideOrShowFlowersAndText(visible);
    }
}

function HideOrShowFlowersAndText(hideOrShow) {
    flower1.style.visibility = `${hideOrShow}`;
    flower2.style.visibility = `${hideOrShow}`;
    flower3.style.visibility = `${hideOrShow}`;
    flower4.style.visibility = `${hideOrShow}`;

    text1.style.visibility = `${hideOrShow}`;
    text2.style.visibility = `${hideOrShow}`;
    text3.style.visibility = `${hideOrShow}`;
    text4.style.visibility = `${hideOrShow}`;
}