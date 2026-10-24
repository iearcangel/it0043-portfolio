/* =================================
   FEATURE 1: NAVIGATION TOGGLE
================================= */

// Keeps the mobile navigation synchronized with its toggle button.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

// Provides one consistent way to close the menu across all interactions.
function closeMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

// Allows users to open and close the mobile navigation.
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            mainNav.classList.add("is-open");
            menuToggle.setAttribute("aria-expanded", "true");
        }
    });

    // Closes the menu after a user selects a page.
    mainNav.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    // Prevents the menu from staying open after an outside click.
    document.addEventListener("click", function (event) {
        if (
            mainNav.classList.contains("is-open") &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Keeps the navigation in its desktop state after resizing.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}
