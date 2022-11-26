var btn = document.querySelector("#btn");
var closebtn = document.querySelector("#close");
var overlay = document.querySelector("#overlay");
var box = document.querySelector("#box")

btn.addEventListener("click",function(){
    overlay.style.opacity = 1;
    box.style.top = "10%";
    overlay.style.pointerEvents = "initial";
});
closebtn.addEventListener("click",function(){
    box.style.top = "-10%";
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = 0;
    
});