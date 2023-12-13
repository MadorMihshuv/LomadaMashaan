let thailandMan;
let thailandPopUp;
let body;
let blackBackground;
let prishaBackground;

let tivitBtn;
let mukdemetBtn;
let disabilityBtn;
let resignationBtn;
let dismissalBtn;
let dismissalBtn2;

const visible = "visible";
const hidden = "hidden";

let allDismissalButtons;
let dismissalBtnPopUp1;
let dismissalBtnPopUp2;
let dismissalBtnPopUp3;
let dismissalBtnPopUp4;
let shimuaPopUp;
let protokolPopUp;
let decisionPopUp;
let lawPopUp;
let dismissalEntered;

let continueBtn;
let backBtn;
let kodem;

let check1;
let check2;
let check3;
let check4;
let check5;

let firstEntered;
let secondEntered;
let thirdEntered;
let fourthEntered;

let ifChecked = [false , false, false, false, false];

let sectionsCount = 0;
const imageBackrounds = ['url("/assets/Prisha/פרישה\ טבעית.png")','url("/assets/Prisha/פרישה\ מוקדמת.png")','url("/assets/Prisha/פרישת\ נכות.png")', 'url("/assets/Prisha/התפטרות\ מרצון.png")', 'url("/assets/Prisha/פיטורים\ 1.png")', 'url("/assets/Prisha/פיטורים\ 2.png")'];


//Onload function
window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    DisableAndEnableButtons(true);
    blackBackground.style.animation = "hideBackground 1.5s";
    setTimeout(() => {
        DisableAndEnableButtons(false);
        blackBackground.style.visibility = "hidden";
    }, 1500);
}

window.onpopstate = function(event) {
    history.go(1);
};


//Disables or enables main buttons
function DisableAndEnableButtons(isTrue) {
    tivitBtn.disabled = isTrue;
    mukdemetBtn.disabled = isTrue;
    disabilityBtn.disabled = isTrue;
    resignationBtn.disabled = isTrue;
    dismissalBtn.disabled = isTrue;
};

//Loads all the variables
function Load(){
    tivitBtn = document.getElementById("tivit");
    mukdemetBtn = document.getElementById("mukdemet");
    disabilityBtn = document.getElementById("disability");
    resignationBtn = document.getElementById("resignation");
    dismissalBtn = document.getElementById("dismissal");

    dismissalBtn2 = document.getElementById("dismissal2");
    allDismissalButtons = document.getElementById("allDismissalButtons");
    dismissalBtnPopUp1 = document.getElementById("dismissalBtnPopUp1");
    dismissalBtnPopUp2 = document.getElementById("dismissalBtnPopUp2");
    dismissalBtnPopUp3 = document.getElementById("dismissalBtnPopUp3");
    dismissalBtnPopUp4 = document.getElementById("dismissalBtnPopUp4");
    shimuaPopUp = document.getElementById("shimua");
    decisionPopUp = document.getElementById("decision");
    protokolPopUp = document.getElementById("protokol");
    lawPopUp = document.getElementById("law");

    check1 = document.getElementById("check1");
    check2 = document.getElementById("check2");
    check3 = document.getElementById("check3");
    check4 = document.getElementById("check4");
    check5 = document.getElementById("check5");

    backBtn = document.getElementById("back");
    kodem = document.getElementById("kodem");
    continueBtn = document.getElementById("continueBtn");

    thailandMan = document.getElementById("thailandMan");
    thailandPopUp = document.getElementById("thailandPopUp");
    body = document.getElementById("body");
    blackBackground = document.getElementById("blackBackground");
    prishaBackground = document.getElementById("prishaBackground");
};

//What happens every time we enter a new page
function NextPage() {
    continueBtn.style.visibility = "hidden";
    tivitBtn.style.visibility = "hidden";
    backBtn.style.visibility = "visible";
    sectionsCount++;
    HideMainButtonsAndCheckes();
};

//What happens every time we enter a new page
function GoBack() {
    body.style.backgroundImage = 'url("/assets/Prisha/סוגי\ סיום\ העסקה.png")';
    backBtn.style.visibility = "hidden";
    kodem.style.visibility = "hidden";
    thailandMan.style.visibility = "hidden";
    thailandPopUp.style.visibility = "hidden";
    dismissalBtnHideOrShow(hidden);
    allDismissalButtons.style.visibility = "hidden";
    ShowOrHideMainButtons(visible);
    CheckWhatFinished();


    //check last page before moving a section
    if(ifChecked[0] && ifChecked[1] && ifChecked[2] && ifChecked[3] && ifChecked[4]) {
        continueBtn.style.visibility = "visible";
    }
}

function backBtnFunc() {
    DismissalPage();
    allDismissalButtons.style.visibility = "hidden";
    dismissalBtnHideOrShow(hidden);
}

function Finish() {
    sessionStorage.setItem("sectionNum" , 8);
    prishaBackground.style.visibility = "visible";
    questionBackground.style.visibility = "visible";
    questionBackground.style.animation = "fadeInQuestions 1.5s forwards";
    setTimeout(() => {
        questionBackground.style.visibility = "hidden";
        window.location.href = "/Exercise/Exercise.html";
    }, 3000);
}

//Checks which chapters are done
function CheckWhatFinished() {
    if(ifChecked[0]) {
        check1.style.visibility = "visible";
    }
    if(ifChecked[1]) {
        check2.style.visibility = "visible";
    }
    if(ifChecked[2]) {
        check3.style.visibility = "visible";
    }
    if(ifChecked[3]) {
        check4.style.visibility = "visible";
        dismissalEntered = true;
    }
    if(ifChecked[4]) {
        check5.style.visibility = "visible";
    }
}

//Hide all the buttons of the main part
function HideMainButtonsAndCheckes() {
    ShowOrHideMainButtons(hidden);
    dismissalBtn2.style.visibility = "hidden";

    check1.style.visibility = "hidden";
    check2.style.visibility = "hidden";
    check3.style.visibility = "hidden";
    check4.style.visibility = "hidden";
    check5.style.visibility = "hidden";
}

//Show all the buttons of the main part
function ShowOrHideMainButtons(showOrHide) {
    tivitBtn.style.visibility = `${showOrHide}`;
    mukdemetBtn.style.visibility = `${showOrHide}`;
    disabilityBtn.style.visibility = `${showOrHide}`;
    resignationBtn.style.visibility = `${showOrHide}`;
    dismissalBtn.style.visibility = `${showOrHide}`;
}

//Loads the Prisha Tivit Chapter
function TivitPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[0]}`;
    ifChecked[0] = true;
    thailandMan.style.visibility = "visible";
    thailandMan.style.animation = "thailandManCome 2.5s forwards";
    thailandPopUp.style.animation = "thailandPopUp 3.5s 1.5s forwards";
    thailandPopUp.style.visibility = "visible";
}

//Loads the Prisha Tivit Chapter
function MukdemetPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[1]}`;
    ifChecked[1] = true;
}

//Loads the Prisha Disability Chapter
function DisabilityPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[2]}`;
    ifChecked[2] = true;
}

//Loads the Prisha Dismissal Chapter
function DismissalPage() {
    NextPage();
    backBtn.style.visibility = "hidden";
    kodem.style.visibility = "hidden";
    dismissalBtn2.style.visibility = "visible";
    body.style.backgroundImage = `${imageBackrounds[4]}`;
}

//Loads the Prisha second Dismissal page
function DismissalSecondPage() {
    NextPage();
    kodem.style.visibility = "visible";
    back.style.visibility = "hidden";
    allDismissalButtons.style.visibility = "visible";
    dismissalBtnHideOrShow(visible);
    body.style.backgroundImage = `${imageBackrounds[5]}`;
    ifChecked[3] = true;
    if(dismissalEntered) {
        back.style.visibility = "visible";
    }
    else {
        back.style.visibility = "hidden";
    }
}

function dismissalBtnHideOrShow(showOrHide) {
    dismissalBtnPopUp1.style.visibility = `${showOrHide}`;;
    dismissalBtnPopUp2.style.visibility = `${showOrHide}`;;
    dismissalBtnPopUp3.style.visibility = `${showOrHide}`;;
    dismissalBtnPopUp4.style.visibility = `${showOrHide}`;;
}

//Loads the Prisha Resignation Chapter
function ResignationPage() {
    NextPage();
    body.style.backgroundImage = `${imageBackrounds[3]}`;
    ifChecked[4] = true;
}

function ShimuaPopUp() {
    firstEntered = true;
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    shimuaPopUp.style.visibility = "visible";
    body.addEventListener("click" , HidePopUp, true);
}

function ProtokolPopUp() {
    secondEntered = true;
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    protokolPopUp.style.visibility = "visible";
    body.addEventListener("click" , HidePopUp, true);
}

function DecisionPopUp() {
    thirdEntered = true;
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    decisionPopUp.style.visibility = "visible";
    body.addEventListener("click" , HidePopUp, true);
}

function LawPopUp() {
    fourthEntered = true;
    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "0.8";
    lawPopUp.style.visibility = "visible";
    body.addEventListener("click" , HidePopUp, true);
}

function HidePopUp() {
    blackBackground.style.visibility = "hidden";
    shimuaPopUp.style.visibility = "hidden";
    decisionPopUp.style.visibility = "hidden";
    protokolPopUp.style.visibility = "hidden";
    lawPopUp.style.visibility = "hidden";
    if((fourthEntered && thirdEntered && secondEntered && firstEntered)) {
        back.style.visibility = "visible";
    }
    else {
        back.style.visibility = "hidden";
    }
}