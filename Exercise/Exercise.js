let body;
let continueBtn;

let FinishedBackground;
let mapBackground;

let rightButton;
let wrongButton;

let trueAnswer;
let falseAnswer;

let firstAnswer;
let secondAnswer;
let thirdAnswer;
let fourthAnswer;

const backgroundImages = [ 'url("../assets/Exercise/שאלה\ 1\ הקדמה.png")','url("../assets/Exercise/שאלה\ 2\ הקדמה\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 3\ הקדמה\ אמריקאית.png")','url("../assets/Exercise/שאלה\ 1\ קליטה.png")' ,'url("../assets/Exercise/שאלה\ 2\ קליטה\ אמריקאית.png")' ,'url("../assets/Exercise/שאלה\ 3\ קליטה\ אמריקאית.png")' , 'url("../assets/Exercise/שאלה\ 1\ שכר.png")', 'url("../assets/Exercise/שאלה\ 2\ שכר\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 3\ שכר.png")', 'url("../assets/Exercise/שאלה1\ סוק\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 2\ סוק\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 1\ פרט.png")', 'url("../assets/Exercise/שאלה2\ פרט\ אמריקאית.png")', 'url("../assets/Exercise/שאלה3\ פרט\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 4\ פרט.png")', 'url("../assets/Exercise/שאלה\ 5\ פרט.png")', 'url("../assets/Exercise/שאלה\ 1\ עוס\.png")', 'url("../assets/Exercise/שאלה\ 2\ עוס\ אמריקאית.png")', 'url("../assets/Exercise/שאלה\ 1\ פרישה.png")', 'url("../assets/Exercise/שאלה\ 2\ \ אמריקאית\ פרישה.png")', 'url("../assets/Exercise/שאלה\ 3\ פרישה.png")', 'url("../assets/Exercise/שאלה\ 4\ פרישה\ אמריקאית.png")'];
const trueBackground = ["../assets/Exercise/שאלה\ 1\ הקדמה\ נכון.png","../assets/Exercise/נכון\ \ 1\ קליטה.png" , "../assets/Exercise/נכון\ \ 1\ שכר.png", "../assets/Exercise/נכון\ 3\ שכר.png", "../assets/Exercise/נכון\ 1\ פרט.png", "../assets/Exercise/נכון\ \ 4\ פרט.png", "../assets/Exercise/נכון\ 5\ פרט.png", "../assets/Exercise/לא\ נכון\ 1\ עוס.png", "../assets/Exercise/נכון\ 1\ פרישה.png", "../assets/Exercise/נכון\ 3\ פרישה.png"];
const falseBackground = ["../assets/Exercise/שאלה\ 1\ הקדמה\ לא\ נכון.png", "../assets/Exercise/לא\ נכון\ 1\ קליטה.png", "../assets/Exercise/לא\ נכון\ 1שכר.png", "../assets/Exercise/לא\ נכון\ 3\ שכר.png", "../assets/Exercise/לא\ נכון\ 1\ פרט.png", "../assets/Exercise/לא\ נכון\ 4\ פרט.png", "../assets/Exercise/לא\ נכון\ 5\ פרט.png", "../assets/Exercise/נכון\ \ 1\ עוס.png", "../assets/Exercise/לא\ נכון\ 1\ עוס.png", "../assets/Exercise/לא\ נכון\ 1\ פרישה.png", "../assets/Exercise/לא\ נכון\ 3\ פרישה.png"];
const allAnswers = ["right", "4", "3", "right", "1", "4" , "wrong", "1", "wrong", "2", "2", "wrong", "2", "4", "right", "right", "wrong", "3", "right", "4", "wrong", "1"];
const keyBackgrounds = ["../assets/TheEnd/מפתח\ הקדמה.png", "../assets/TheEnd/מפתח\ קליטה.png", "../assets/TheEnd/מפתח\ תנאי\ העסקה.png" , "../assets/TheEnd/מפתח\ קידומים\ והטבות.png", "../assets/TheEnd/מפתח\ זכויות\ וזכאויות.png", "../assets/TheEnd/מפתח\ השירות\ הסוציאלי.png", "../assets/TheEnd/מפתח\ פרישה.png"];

window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    blackBackground.style.animation = "hideBackground 2.5s";

    body.style.backgroundImage = backgroundImages[sessionStorage.getItem("questionNum")];
    IsAmericanQuestion();
}

window.onpopstate = function(event) {
    history.go(1);
};

//Loads all the variables
function Load() {
    body = document.getElementById("body");
    continueBtn = document.getElementById("continueBtn");

    FinishedBackground = document.getElementById("FinishedBackground");
    mapBackground = document.getElementById("mapBackground");

    rightButton = document.getElementById("rightButton");
    wrongButton = document.getElementById("wrongButton");

    trueAnswer = document.getElementById("trueAnswer");
    falseAnswer = document.getElementById("falseAnswer");

    firstAnswer = document.getElementById("firstAnswer");
    secondAnswer = document.getElementById("secondAnswer");
    thirdAnswer = document.getElementById("thirdAnswer");
    fourthAnswer = document.getElementById("fourthAnswer");
};

//Check if the answer is right or wrong
function CheckAnswer(whatChose) {
    if(whatChose === allAnswers[sessionStorage.getItem("questionNum")]) {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        trueAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
    else {
        rightButton.style.visibility = "hidden";
        wrongButton.style.visibility = "hidden";
        falseAnswer.style.visibility = "visible";
        continueBtn.style.visibility = "visible";
    }
};

function GoNextQuestion() {
    sessionStorage.setItem("questionNum", parseInt(sessionStorage.getItem("questionNum")) + 1 );
    switch(sessionStorage.getItem("questionNum")) {
        case "3":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "6":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "9":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "11":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "16":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "18":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        case "22":
            FinishedBackground.src = keyBackgrounds[parseInt(sessionStorage.getItem("sectionNum")-2)];
            BeforeGoingNext();
            break;
        default:
            body.style.backgroundImage = backgroundImages[sessionStorage.getItem("questionNum")];
            IsAmericanQuestion();
            break;
    }
}

function BeforeGoingNext() {
    mapBackground.style.visibility = "visible";
    FinishedBackground.style.visibility = "visible";
    FinishedBackground.style.animation = "fadeInQuestions 6s forwards";
    setTimeout(() => {
        FinishedBackground.style.visibility = "hidden";
        window.location.href = "../MainPage.html";
    }, 4000);
}

function IsAmericanQuestion() {
    if(backgroundImages[sessionStorage.getItem("questionNum")].includes('אמריקאית')) {
        SetAmericanPage();
    }
    else {
        SetPage();
    }
}

function SetAmericanPage() {
    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "hidden";
    wrongButton.style.visibility = "hidden";
    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "visible";
    secondAnswer.style.visibility = "visible";
    thirdAnswer.style.visibility = "visible";
    fourthAnswer.style.visibility = "visible";
    
    firstAnswer.classList.add('americanAnswers');
    secondAnswer.classList.add('americanAnswers');
    thirdAnswer.classList.add('americanAnswers');
    fourthAnswer.classList.add('americanAnswers');

    firstAnswer.classList.remove('americanAnswersRed');
    secondAnswer.classList.remove('americanAnswersRed');
    thirdAnswer.classList.remove('americanAnswersRed');
    fourthAnswer.classList.remove('americanAnswersRed');

    firstAnswer.disabled = false;
    secondAnswer.disabled = false;
    thirdAnswer.disabled = false;
    fourthAnswer.disabled = false;
}

function SetPage() {
    sessionStorage.setItem("trueOrFalseNum", parseInt(sessionStorage.getItem("trueOrFalseNum")) + 1 );
    falseAnswer.src = falseBackground[sessionStorage.getItem("trueOrFalseNum")];
    trueAnswer.src = trueBackground[sessionStorage.getItem("trueOrFalseNum")];

    continueBtn.style.visibility = "hidden";
    rightButton.style.visibility = "visible";
    wrongButton.style.visibility = "visible";

    falseAnswer.style.visibility = "hidden";
    trueAnswer.style.visibility = "hidden";

    firstAnswer.style.visibility = "hidden";
    secondAnswer.style.visibility = "hidden";
    thirdAnswer.style.visibility = "hidden";
    fourthAnswer.style.visibility = "hidden";
}

function CheckAmericanAnswer(whatChose) {
    if(whatChose === allAnswers[sessionStorage.getItem("questionNum")]) {
        ArrangeAnswers();
        continueBtn.style.visibility = "visible";
    }
    else {
        ArrangeAnswers();
        continueBtn.style.visibility = "visible";
    }
};

function ArrangeAnswers() {
    firstAnswer.disabled = true;
    secondAnswer.disabled = true;
    thirdAnswer.disabled = true;
    fourthAnswer.disabled = true;

    firstAnswer.classList.add('americanAnswersRed');
    secondAnswer.classList.add('americanAnswersRed');
    thirdAnswer.classList.add('americanAnswersRed');
    fourthAnswer.classList.add('americanAnswersRed');

    firstAnswer.classList.remove('americanAnswers');
    secondAnswer.classList.remove('americanAnswers');
    thirdAnswer.classList.remove('americanAnswers');
    fourthAnswer.classList.remove('americanAnswers');

    switch(allAnswers[sessionStorage.getItem("questionNum")]) {
        case "1":
            firstAnswer.classList.add('americanAnswersGreen');
            firstAnswer.classList.remove('americanAnswersRed');
            break;
        case "2":
            secondAnswer.classList.add('americanAnswersGreen');
            secondAnswer.classList.remove('americanAnswersRed');
            break;
        case "3":
            thirdAnswer.classList.add('americanAnswersGreen');
            thirdAnswer.classList.remove('americanAnswersRed');
            break;
        case "4":
            fourthAnswer.classList.add('americanAnswersGreen');
            fourthAnswer.classList.remove('americanAnswersRed');
            break;
    }
}