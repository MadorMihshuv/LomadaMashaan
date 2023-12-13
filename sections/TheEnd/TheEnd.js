let endGif;

let blackBackground;
let body;

let pageNum;

const visible = "visible";
const hidden = "hidden";

const imageBackrounds = ['url("/assets/Klita/היכרות\ וקליטת\ העובד.png")' ,'url("/assets/Klita/קליטת\ העובד\ בלי\ חצים.png")','url("/assets/Klita/דור\ א\ דור\ ב.png")'];

//Onload function
window.onload = function() {
    Load();
    history.pushState(null,null, location.href);
    endGif.style.animation = "showGif 3s forwards";
    questionBackground.style.animation = "fadeInQuestions 1.5s forwards";
}

window.onpopstate = function(event) {
    history.go(1);
};

//Onload function
function Load() {
    endGif = document.getElementById("endGif");
    pageNum = 0;
    body = document.getElementById("body");
}