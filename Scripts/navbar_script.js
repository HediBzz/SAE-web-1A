var scrollPos = window.scrollY;
addEventListener("scroll",() => {
    if(window.scrollY - scrollPos < 0){

        var shadow = document.querySelector("nav-bar").shadowRoot;
        if(true){

            if(first == false){
                first = true;
                lastPos = 70;
            }
            lastPos = lastPos + window.scrollY - scrollPos;
            
            if(lastPos >= 0){

                shadow.querySelector("#navbar").style.top = window.scrollY - lastPos + "px";
            }
            else{
                shadow.querySelector("#navbar").style.top = window.scrollY + "px";
            }
        }
    }
    else{
        first = false
    }

    scrollPos = window.scrollY;
})