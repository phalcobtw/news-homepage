const navbar = document.querySelector(".navbar");
const openMenuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".menu-button-close");

document.addEventListener("DOMContentLoaded", () => {
  console.log(window.innerWidth);
});

window.addEventListener("resize", onresize);

openMenuButton.addEventListener("click", () => {
  navbar.classList.add("open");
  navbar.style.display = "block";
});

closeMenuButton.addEventListener("click", () => {
  navbar.classList.remove("open");
  navbar.style.display = "none";
});

var onresize = function () {
  let width = document.body.clientWidth;
  if (width >= 600) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
};
