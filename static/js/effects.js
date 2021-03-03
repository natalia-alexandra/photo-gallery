// header - zoom out on scroll
const bg = document.getElementById("header");
window.addEventListener("scroll", () => {
    bg.style.backgroundSize = 150 - + window.pageYOffset / 12 + '%';
    bg.style.opacity = 1 - + window.pageYOffset / 700 + '';
});

// images
let imgBx = document.querySelectorAll(".imgBx");
imgBx.forEach(popup => popup.addEventListener("click", () => {
    popup.classList.toggle("active")
}))
