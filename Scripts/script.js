var scrollPos = window.scrollY;
var lastPos = 0;
var first;


addEventListener("scroll",() => {
    /* Gestion du parallax */
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

 
})

