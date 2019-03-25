var openMenuBtn = document.querySelector(".nav-toggle.open");
var closeMenuBtn = document.querySelector(".nav-toggle.close");
var menuMobile = document.querySelector("nav.main-nav");
function openMenu(){
    menuMobile.style.right = "0px";
}

function closeMenu(){
    menuMobile.style.right = "-100%";
}

openMenuBtn.onclick = openMenu;
closeMenuBtn.onclick = closeMenu;