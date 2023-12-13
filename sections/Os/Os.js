let backBtn;
let nextBtn;
let continueBtn;

let osBackground;
let blackBackground;
let body;

let pageNum;

let snow1;
let snow2;
let snow3;
let snow4;

let secondSnow1;
let secondSnow2;
let secondSnow3;

let ice1;
let ice2;
let ice3;

let title;
let text1;
let text2;
let text3;

let secondTitle;
let secondText1;
let secondText2;
let secondText3;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Os/השירות\ הסוציאלי.png")' ,'url("/assets/Os/עוסיות.png")','url("/assets/Os/ימי\ מחלה\ חריגים\ ריק.png")','url("/assets/Os/קרן\ סיוע\ כלכלית.png")','url("/assets/Os/הורים\ לילדים\ עם\ מוגבלות.png")'];

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
    osBackground = document.getElementById("osBackground");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    continueBtn = document.getElementById("continueBtn");

    snow1 = document.getElementById("snow1");
    snow2 = document.getElementById("snow2");
    snow3 = document.getElementById("snow3");
    snow4 = document.getElementById("snow4");

    secondSnow1 = document.getElementById("secondSnow1");
    secondSnow2 = document.getElementById("secondSnow2");
    secondSnow3 = document.getElementById("secondSnow3");

    title = document.getElementById("title");
    text1 = document.getElementById("text1");
    text2 = document.getElementById("text2");
    text3 = document.getElementById("text3");
    text4 = document.getElementById("text4");

    secondTitle = document.getElementById("secondTitle");
    secondText1 = document.getElementById("secondText1");
    secondText2 = document.getElementById("secondText2");
    secondText3 = document.getElementById("secondText3");
    
    ice1 = document.getElementById("ice1");
    ice2 = document.getElementById("ice2");
    ice3 = document.getElementById("ice3");
    ice4 = document.getElementById("ice4");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 5){
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        if(pageNum === 1) {
            ice1.style.visibility = "visible";
            ice2.style.visibility = "visible";
            ice3.style.visibility = "visible";
            ice4.style.visibility = "visible";
            ice1.style.animation = "iceAnimation 1s forwards";
            ice2.style.animation = "iceAnimation 1s 1s forwards";
            ice3.style.animation = "iceAnimation 1s 2s forwards";
            ice4.style.animation = "iceAnimation 1s 3s forwards";
        }
        else if(pageNum === 2) {
            ice1.style.visibility = "hidden";
            ice2.style.visibility = "hidden";
            ice3.style.visibility = "hidden";
            ice4.style.visibility = "hidden";
            HideOrShowSnowAndText(visible);
        }
        else if(pageNum === 3) {
            HideOrShowSnowAndText(hidden);
            HideOrShowSecondSnowAndText(visible);
        }
        else if(pageNum === 4) {
            HideOrShowSecondSnowAndText(hidden);
            continueBtn.style.visibility = "visible";
            nextBtn.style.visibility = "hidden";
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '6') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 7);
        osBackground.style.visibility = "visible";
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
        ice1.style.visibility = "hidden";
        ice2.style.visibility = "hidden";
        ice3.style.visibility = "hidden";
        ice4.style.visibility = "hidden";
    }
    else if(pageNum === 1) {
        ice1.style.visibility = "visible";
        ice2.style.visibility = "visible";
        ice3.style.visibility = "visible";
        ice4.style.visibility = "visible";
        HideOrShowSnowAndText(hidden);
    }
    else if(pageNum === 2){
        HideOrShowSecondSnowAndText(hidden);
        HideOrShowSnowAndText(visible);
    }
    else if(pageNum === 3) {
        HideOrShowSecondSnowAndText(visible);
        continueBtn.style.visibility = "hidden";
    }
}

function HideOrShowSnowAndText(hideOrShow) {
    snow1.style.visibility = `${hideOrShow}`;
    snow2.style.visibility = `${hideOrShow}`;
    snow3.style.visibility = `${hideOrShow}`;

    title.style.visibility = `${hideOrShow}`;
    text1.style.visibility = `${hideOrShow}`;
    text2.style.visibility = `${hideOrShow}`;
    text3.style.visibility = `${hideOrShow}`;

    title.style.animation = "textFadeIn 1s forwards";
    text1.style.animation = "textFadeIn 1s 1s forwards";
    text2.style.animation = "textFadeIn 1s 2s forwards";
    text3.style.animation = "textFadeIn 1s 3s forwards";
    snow1.style.animation = "snowAnimation 1s 1s forwards";
    snow2.style.animation = "snowAnimation 1s 2s forwards";
    snow3.style.animation = "snowAnimation 1s 3s forwards";
}

function HideOrShowSecondSnowAndText(hideOrShow) {
    secondSnow1.style.visibility = `${hideOrShow}`;
    secondSnow2.style.visibility = `${hideOrShow}`;
    secondSnow3.style.visibility = `${hideOrShow}`;

    secondTitle.style.visibility = `${hideOrShow}`;
    secondText1.style.visibility = `${hideOrShow}`;
    secondText2.style.visibility = `${hideOrShow}`;
    secondText3.style.visibility = `${hideOrShow}`;

    secondTitle.style.animation = "textFadeIn 1s forwards";
    secondText1.style.animation = "textFadeIn 1s 1s forwards";
    secondText2.style.animation = "textFadeIn 1s 2s forwards";
    secondText3.style.animation = "textFadeIn 1s 3s forwards";
    secondSnow1.style.animation = "snowAnimation 1s 1s forwards";
    secondSnow2.style.animation = "snowAnimation 1s 2s forwards";
    secondSnow3.style.animation = "snowAnimation 1s 3s forwards";
}