// Select the hamburger icon and the nav menu
const menuBtn = document.getElementById("menu-btn");
const navUl = document.querySelector("nav ul");

// When you click the hamburger button, show/hide the menu
menuBtn.addEventListener("click", () => {
    // If menu is visible, hide it; if hidden, show it.
    const isVisible = navUl.style.display === "flex";
    navUl.style.display = isVisible ? "none" : "flex";
});