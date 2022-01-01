
/*addEventListener("scroll",() => {

    document.querySelector(".plan1").style.top = -window.scrollY * 0.3 + 60 + "px";
    document.querySelector(".plan1").style.transform = "rotate(" + (20 + window.scrollY * 0.01) + "deg)";
    document.querySelector(".plan1").style.left = (700 + -window.scrollY * 0.2) + "px";

    document.querySelector(".plan2").style.top = -window.scrollY * 0.5 + "px";
    document.querySelector(".plan2").style.transform = "rotate(" + (230 + window.scrollY * 0.05) + "deg)";
    document.querySelector(".plan2").style.left = (120 + window.scrollY * 0.2) + "px";

    document.querySelector(".plan3").style.top = -window.scrollY * 0.7 + 350 + "px";
    document.querySelector(".plan3").style.transform = "rotate(" + (80 + -window.scrollY * 0.02) + "deg)";

    document.querySelector(".plan4").style.top = -window.scrollY * 0.90 + 400 + "px";
    document.querySelector(".plan4").style.transform = "rotate(" + (130 + -window.scrollY * 0.01) + "deg)";

    document.querySelector(".plan5").style.top = -window.scrollY * 0.95 + 450 + "px";
    document.querySelector(".plan5").style.transform = "rotate(" + (100 + -window.scrollY * 0.04) + "deg)";
})*/
/*
class Parallax {
    constructor(planName, profondeur, constante){
        this.planName = planName;
        this.profondeur = profondeur;
        this.constante = constante;
    }
    
}
function move(){
    document.querySelector(Parallax.planName).style.top = -window.scrollY * Parallax.profondeur + Parallax.constante + "px";
}
let plan1 = Parallax("plan1", 0.3, 60);

addEventListener("scroll",() => {
    plan1.move()
})*/

var scrollPos = window.scrollY

addEventListener("scroll",() => {

    document.querySelector(".plan1").style.top = -window.scrollY * 0.3 + 60 + "px";
    document.querySelector(".plan1").style.transform = "rotate(" + (20 + window.scrollY * 0.01) + "deg)";
    document.querySelector(".plan1").style.left = (700 + -window.scrollY * 0.2) + "px";

    document.querySelector(".plan2").style.top = -window.scrollY * 0.4 + "px";
    document.querySelector(".plan2").style.transform = "rotate(" + (230 + window.scrollY * 0.05) + "deg)";
    document.querySelector(".plan2").style.left = (120 + window.scrollY * 0.2) + "px";

    document.querySelector(".plan3").style.top = -window.scrollY * 0.5 + 350 + "px";
    document.querySelector(".plan3").style.transform = "rotate(" + (80 + -window.scrollY * 0.02) + "deg)";

    document.querySelector(".plan4").style.top = -window.scrollY * 0.6 + 400 + "px";
    document.querySelector(".plan4").style.transform = "rotate(" + (130 + -window.scrollY * 0.01) + "deg)";

    document.querySelector(".plan5").style.top = -window.scrollY * 0.7 + 450 + "px";
    document.querySelector(".plan5").style.transform = "rotate(" + (100 + -window.scrollY * 0.04) + "deg)";

    
    if(window.scrollY - scrollPos < 0){
        console.log(document.querySelector("navbar"));
        console.log("ok");
    }

    scrollPos = window.scrollY;
})

