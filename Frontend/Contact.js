document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuToggle.classList.toggle("active");
    });
});