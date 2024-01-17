let backBtn;
let nextBtn;
let continueBtn;

let blackBackground;
let questionBackground;
let body;
let klitaBackground;

let pageNum;

let stage1;
let stage2;
let stage3;
let stage4;
let stage5;
let stage6;
let stage7;
let stage8;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Klita/קליטת\ העובד.png")', 'url("/assets/Klita/היכרות\ וקליטת\ העובד.png")' ,'url("/assets/Klita/תפקיד\ הקצין.png")'];

//Onload function
window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    HideOrShowStages(visible);
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
    klitaBackground = document.getElementById("klitaBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");
    
    questionBackground = document.getElementById("questionBackground");

    stage1 = document.getElementById("stage1");
    stage2 = document.getElementById("stage2");
    stage3 = document.getElementById("stage3");
    stage4 = document.getElementById("stage4");
    stage5 = document.getElementById("stage5");
    stage6 = document.getElementById("stage6");
    stage7 = document.getElementById("stage7");
    stage8 = document.getElementById("stage8");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 3){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 1:
                HideOrShowStages(hidden);
                break;
            case 2:
                nextBtn.style.visibility = "hidden";
                continueBtn.style.visibility = "visible";
                break;
            default:
                break;
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '2') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 3);
        klitaBackground.style.visibility = "visible";
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
            HideOrShowStages(visible);
            break;
        case 1:
            continueBtn.style.visibility = "hidden";
            break;
        default:
            break;
    }
}

function HideOrShowStages(hideOrShow) {
    stage1.style.visibility = `${hideOrShow}`;
    stage2.style.visibility = `${hideOrShow}`;
    stage3.style.visibility = `${hideOrShow}`;
    stage4.style.visibility = `${hideOrShow}`;
    stage5.style.visibility = `${hideOrShow}`;
    stage6.style.visibility = `${hideOrShow}`;
    stage7.style.visibility = `${hideOrShow}`;
    stage8.style.visibility = `${hideOrShow}`;

    stage1.style.animation = "stagesComeIn 1s 0.5s forwards";
    stage2.style.animation = "stagesComeIn 1s 2s forwards";
    stage3.style.animation = "stagesComeIn 1s 3s forwards";
    stage4.style.animation = "stagesComeIn 1s 4s forwards";
    stage5.style.animation = "stagesComeIn 1s 5s forwards";
    stage6.style.animation = "stagesComeIn 1s 6s forwards";
    stage7.style.animation = "stagesComeIn 1s 7s forwards";
    stage8.style.animation = "stagesComeIn 1s 8s forwards";
}