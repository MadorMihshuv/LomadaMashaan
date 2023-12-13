let backBtn;
let nextBtn;
let returnBtn;
let continueBtn;
let zhuyotCheckOved;
let zhuyotCheckOvedet;

let coffee;
let blackBackground;
let pratBackground;
let body;

let submarine;
let submarineLight;

let jellyfish1;
let jellyfish2;
let jellyfish3;

let teunot1;
let teunot2;
let teunot3;
let teunot4;

let bubble1;
let bubble2;
let bubble3;
let bubble4;

let pageNum;

let boyPearl;
let girlPearl;

let halad1;
let halad2;
let halad3;
let halad4;
let starFish1;
let starFish2;
let starFish3;
let starFish4;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Prat/אינדיקציות\ שנתיות.png")' ,'url("/assets/Prat/ימי\ השתלמות\ בשכר.png")','url("/assets/Prat/היתר\ עבודה\ פרטית\ בלי\ בועות.png")', 'url("/assets/Prat/זכויות\ בחופשתת\ לידה.png")', 'url("/assets/Prat/חלת\ לאחר\ חלד.png")', 'url("/assets/Prat/זכויות\ הורה.png")', 'url("/assets/Prat/רכב\ שירות.png")', 'url("/assets/Prat/אחזקת\ רכב\ בלי\ צוללת.png")', 'url("/assets/Prat/זמן\ נסיעה\.png")', 'url("/assets/Prat/הלוואות.png")' , 'url("/assets/Prat/תאונות\ עבודה\ \ 1.png")' , 'url("/assets/Prat/תאונות\ עבודה\ 2.png")'];


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
    zhuyotCheckOved = false;
    zhuyotCheckOvedet = false;
    body = document.getElementById("body");
    coffee = document.getElementById("coffee");

    submarine = document.getElementById("submarine");
    submarineLight = document.getElementById("submarineLight");

    jellyfish1 = document.getElementById("jellyfish1");
    jellyfish2 = document.getElementById("jellyfish2");
    jellyfish3 = document.getElementById("jellyfish3");

    backBtn = document.getElementById("backBtn");
    nextBtn = document.getElementById("nextBtn");
    returnBtn = document.getElementById("returnBtn");
    continueBtn = document.getElementById("continueBtn");
    blackBackground = document.getElementById("blackBackground");
    pratBackground = document.getElementById("pratBackground");

    bubble1 = document.getElementById("bubble1");
    bubble2 = document.getElementById("bubble2");
    bubble3 = document.getElementById("bubble3");
    bubble4 = document.getElementById("bubble4");

    boyPearl = document.getElementById("boyPearl");
    girlPearl = document.getElementById("girlPearl");

    halad1 = document.getElementById("halad1");
    halad2 = document.getElementById("halad2");
    halad3 = document.getElementById("halad3");
    halad4 = document.getElementById("halad4");
    starFish1 = document.getElementById("starFish1");
    starFish2 = document.getElementById("starFish2");
    starFish3 = document.getElementById("starFish3");
    starFish4 = document.getElementById("starFish4");

    teunot1 = document.getElementById("teunot1");
    teunot2 = document.getElementById("teunot2");
    teunot3 = document.getElementById("teunot3");
    teunot4 = document.getElementById("teunot4");
}

//Loads the next page of the section
function GoNext() {
    pageNum++;
    backBtn.style.visibility = "visible";
    if(pageNum !== 12) {
        body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
        switch(pageNum) {
            case 1:
                coffee.style.visibility = "visible";
                coffee.style.animation = "fadeCoffee 1.8s forwards";
                break;
            case 2:
                coffee.style.visibility = "hidden";
                HideOrShowBubbles(visible);
                bubble1.style.animation = "bubblesAnimation 0.8s forwards";
                bubble2.style.animation = "bubblesAnimation 0.8s 0.8s forwards";
                bubble3.style.animation = "bubblesAnimation 0.8s 1.6s forwards";
                bubble4.style.animation = "bubblesAnimation 0.8s 2.4s forwards";

                break;
            case 3:
                HideOrShowBubbles(hidden);
                boyPearl.style.visibility = "visible";
                girlPearl.style.visibility = "visible";
                if(zhuyotCheckOved && zhuyotCheckOvedet){
                    nextBtn.style.visibility = "visible";
                }
                else {
                    nextBtn.style.visibility = "hidden";
                }
                break;
            case 4:
                boyPearl.style.visibility = "hidden";
                girlPearl.style.visibility = "hidden";
                HideOrShowHalad(visible);
                AnimationOfHalad();
                break;
            case 5:
                HideOrShowHalad(hidden);
                break;
            case 7:
                blackBackground.style.visibility = "visible";
                blackBackground.style.opacity = "0.8";
                blackBackground.style.animation = "lightUp 2s forwards";
                submarine.style.visibility = "visible";
                submarineLight.style.visibility = "visible";
                submarine.style.animation = "submarineComeIn 2s forwards";
                submarineLight.style.animation = "showLight 1.5s 1.5s forwards";
                break;
            case 8:
                blackBackground.style.visibility = "hidden";
                jellyfish1.style.visibility = "visible";
                jellyfish2.style.visibility = "visible";
                jellyfish3.style.visibility = "visible";
                submarine.style.visibility = "hidden";
                submarineLight.style.visibility = "hidden";
                break;
            case 9:
                jellyfish1.style.visibility = "hidden";
                jellyfish2.style.visibility = "hidden";
                jellyfish3.style.visibility = "hidden";
                break;
            case 10:
                HideOrShowTeunot(visible);
                teunot1.style.animation = "teunotAnimation 0.7s forwards";
                teunot2.style.animation = "teunotAnimation 0.7s 0.7s forwards";
                teunot3.style.animation = "teunotAnimation 0.7s 1.4s forwards";
                teunot4.style.animation = "teunotAnimation 0.7s 2.1s forwards";
                break;
            case 11:
                HideOrShowTeunot(hidden);
                continueBtn.style.visibility = "visible";
                nextBtn.style.visibility = "hidden";
                break;
            default:
                break;
        }
    }
    else if(sessionStorage.getItem("sectionNum") !== '5') {
        window.location.href = "/MainPage.html";
    }
    else {
        sessionStorage.setItem("sectionNum" , 6);
        pratBackground.style.visibility = "visible";
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
            coffee.style.visibility = "hidden";
            backBtn.style.visibility = "hidden";
            break;
        case 1:
            coffee.style.visibility = "visible";
            HideOrShowBubbles(hidden);
            break;
        case 2:
            HideOrShowBubbles(visible);
            boyPearl.style.visibility = "hidden";
            girlPearl.style.visibility = "hidden";
            break;
        case 3:
            boyPearl.style.visibility = "visible";
            girlPearl.style.visibility = "visible";
            nextBtn.style.visibility = "visible";
            HideOrShowHalad(hidden);
            break;
        case 4:
            HideOrShowHalad(visible);
            break;
        case 6:
            submarine.style.visibility = "hidden";
            submarineLight.style.visibility = "hidden";
            break;
        case 7:
            submarine.style.visibility = "visible";
            submarineLight.style.visibility = "visible";
            jellyfish1.style.visibility = "hidden";
            jellyfish2.style.visibility = "hidden";
            jellyfish3.style.visibility = "hidden";
            break;
        case 8:
            jellyfish1.style.visibility = "visible";
            jellyfish2.style.visibility = "visible";
            jellyfish3.style.visibility = "visible";
            break;
        case 9: 
            HideOrShowTeunot(hidden);
            break;
        case 10:
            continueBtn.style.visibility = "hidden";
            HideOrShowTeunot(visible);
            break;
        default:
            break;
    }
}

function AnimationOfHalad() {
    starFish1.style.animation = "starfish1Animation 2.5s forwards";
    starFish2.style.animation = "starfish2Animation 2.5s 1s forwards";
    starFish3.style.animation = "starfish3Animation 2.5s 2s forwards";
    starFish4.style.animation = "starfish4Animation 2.5s 3s forwards";
    halad1.style.animation = "halad1Animation 3s forwards";
    halad2.style.animation = "halad2Animation 3s 1s forwards";
    halad3.style.animation = "halad3Animation 3s 2s forwards";
    halad4.style.animation = "halad4Animation 3s 3s forwards"; 
}

function HideOrShowBubbles(hideOrShow) {
    bubble1.style.visibility = `${hideOrShow}`;
    bubble2.style.visibility = `${hideOrShow}`;
    bubble3.style.visibility = `${hideOrShow}`;
    bubble4.style.visibility = `${hideOrShow}`;
}

function HideOrShowTeunot(hideOrShow) {
    teunot1.style.visibility = `${hideOrShow}`;
    teunot2.style.visibility = `${hideOrShow}`;
    teunot3.style.visibility = `${hideOrShow}`;
    teunot4.style.visibility = `${hideOrShow}`;
}

function HideOrShowHalad(hideOrShow) {
    halad1.style.visibility = `${hideOrShow}`;
    halad2.style.visibility = `${hideOrShow}`;
    halad3.style.visibility = `${hideOrShow}`;
    halad4.style.visibility = `${hideOrShow}`;
    starFish1.style.visibility = `${hideOrShow}`;
    starFish2.style.visibility = `${hideOrShow}`;
    starFish3.style.visibility = `${hideOrShow}`;
    starFish4.style.visibility = `${hideOrShow}`;
}


function zhuyotOvedPage() {
    body.style.backgroundImage = 'url("/assets/Prat/זכויות\ העובד.png")';
    boyPearl.style.visibility = "hidden";
    girlPearl.style.visibility = "hidden";
    returnBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
    backBtn.style.visibility = "hidden";
    zhuyotCheckOved = true;
}

function zhuyotOvedetPage() {
    body.style.backgroundImage = 'url("/assets/Prat/זכויות\ העובדות.png")';
    girlPearl.style.visibility = "hidden";
    boyPearl.style.visibility = "hidden";
    returnBtn.style.visibility = "visible";
    nextBtn.style.visibility = "hidden";
    backBtn.style.visibility = "hidden";
    zhuyotCheckOvedet = true;
}


function ReturnBack() {
    body.style.backgroundImage = `${imageBackrounds[pageNum]}`;
    returnBtn.style.visibility = "hidden";
    backBtn.style.visibility = "visible";
    girlPearl.style.visibility = "visible";
    boyPearl.style.visibility = "visible";
    if(zhuyotCheckOved && zhuyotCheckOvedet){
        nextBtn.style.visibility = "visible";
    }
    else {
        nextBtn.style.visibility = "hidden";
    }
}