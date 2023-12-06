const navbar = document.querySelector(".navbar");
const openMenuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".menu-button-close");
const header = document.querySelector(".header");
const mainContent = document.querySelector(".main-content");
const body = document.querySelector("body");
const bgmenu = document.querySelector(".backgroundmenu");

document.addEventListener("DOMContentLoaded", () => {
  console.log(window.innerWidth);
});

window.addEventListener("resize", onresize);

openMenuButton.addEventListener("click", () => {
  navbar.classList.add("open");
  navbar.style.display = "block";
  bgmenu.classList.add("bgopen");
  bgmenu.style.display = "block";
});

bgmenu.addEventListener("click", () => {
  navbar.classList.remove("open");
  navbar.style.display = "none";
  bgmenu.classList.remove("bgopen");
  bgmenu.style.display = "none";
});

closeMenuButton.addEventListener("click", () => {
  navbar.classList.remove("open");
  navbar.style.display = "none";
  bgmenu.classList.remove("bgopen");
  bgmenu.style.display = "none";
});

var onresize = function () {
  let width = document.body.clientWidth;
  if (width >= 600) {
    navbar.style.display = "flex";
    /* bgmenu.style.display = "none"; */
  } else {
    navbar.style.display = "none";
  }
};

window.addEventListener("scroll", () => {
  if (
    mainContent.getBoundingClientRect().top < 0 /* &&
    document.body.clientWidth < 600 */
  ) {
    header.classList.add("fijo");
    body.classList.add("body-scroll");
  } else {
    header.classList.remove("fijo");
    body.classList.remove("body-scroll");
  }
});
