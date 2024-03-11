const menu = document.querySelector(".menu");
const openmenumobile = document.querySelector(".open-menu");
const closemenumobile = document.querySelector(".close-menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened")
}

openmenumobile.addEventListener("click", toggleMenu);
closemenumobile.addEventListener("click", toggleMenu);