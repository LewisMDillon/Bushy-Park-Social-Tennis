/* jshint esversion: 11 */

let menuToggle = document.getElementById("menu-toggle");
let menuItems = document.querySelectorAll(".menu li");
let main = document.getElementsByTagName("main")[0];

// clicking the menu items should close the burger menu
menuItems.forEach(item => {
    item.addEventListener("click", function() {
        closeMenu();
    });
});

// clicking anywhere on the <main> should close the burger menu
main.addEventListener("click", function() {
    closeMenu();
});

// function to close the collapsible burger menu
function closeMenu() {
    menuToggle.checked = false;
}
