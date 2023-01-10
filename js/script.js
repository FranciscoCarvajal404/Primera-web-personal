document.querySelector(".bars_menu").addEventListener("click", animateBars);

var line1_bar = document.querySelector(".line1_bars-menu");
var line2_bar = document.querySelector(".line2_bars-menu");
var line3_bar = document.querySelector(".line3_bars-menu");
var menu = document.querySelector(".menu");

function animateBars(){
    line1_bar.classList.toggle("activeline1_bars-menu");
    line2_bar.classList.toggle("activeline2_bars-menu");
    line3_bar.classList.toggle("activeline3_bars-menu");

    menu.classList.toggle("menu_active")
}