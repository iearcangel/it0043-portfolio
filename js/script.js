
/* =================================
   FEATURE 1: NAVIGATION TOGGLE
================================= */

// Keeps the mobile navigation synchronized with its toggle button.
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

// Provides one consistent way to close the menu.
function closeMenu() {
    if (!menuToggle || !mainNav) return;

    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
}

// Allows users to open and close the mobile navigation.
if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            mainNav.classList.add("is-open");
            menuToggle.setAttribute("aria-expanded", "true");
        }
    });

    // Closes the menu after selecting a page.
    mainNav.addEventListener("click", function (event) {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    // Closes the menu after clicking outside.
    document.addEventListener("click", function (event) {
        if (
            mainNav.classList.contains("is-open") &&
            !mainNav.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    // Keeps navigation in desktop state after resizing.
    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

/* =================================
   FEATURE 2: CONTACT FORM VALIDATION
================================= */

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const subjectInput = document.querySelector("#subject");
    const messageInput = document.querySelector("#message");

    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const subjectError = document.querySelector("#subject-error");
    const messageError = document.querySelector("#message-error");

    const formStatus = document.querySelector("#form-status");

    // Displays an error message beside an input.
    function showError(input, errorElement, message) {
        if (input && errorElement) {
            errorElement.textContent = message;
            input.setAttribute("aria-invalid", "true");
        }
    }

    // Removes the error message beside an input.
    function clearError(input, errorElement) {
        if (input && errorElement) {
            errorElement.textContent = "";
            input.removeAttribute("aria-invalid");
        }
    }

    // Checks whether an email has a valid format.
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Checks the name field.
    function validateName() {
        if (!nameInput.value.trim()) {
            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );
            return false;
        }

        clearError(nameInput, nameError);
        return true;
    }

    // Checks the email field for ANY email input.
    function validateEmail() {
        const email = emailInput.value.trim();

        if (!email) {
            showError(
                emailInput,
                emailError,
                "Please enter your email address."
            );
            return false;
        }

        if (!isValidEmail(email)) {
            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );
            return false;
        }

        clearError(emailInput, emailError);
        return true;
    }

    // Checks the subject field.
    function validateSubject() {
        if (!subjectInput.value.trim()) {
            showError(
                subjectInput,
                subjectError,
                "Please enter a subject."
            );
            return false;
        }

        clearError(subjectInput, subjectError);
        return true;
    }

    // Checks the message field.
    function validateMessage() {
        if (!messageInput.value.trim()) {
            showError(
                messageInput,
                messageError,
                "Please enter your message."
            );
            return false;
        }

        clearError(messageInput, messageError);
        return true;
    }

    // Removes errors while the user types.
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    subjectInput.addEventListener("input", validateSubject);
    messageInput.addEventListener("input", validateMessage);

    // Validates the entire form before submission.
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        const isFormValid =
            isNameValid &&
            isEmailValid &&
            isSubjectValid &&
            isMessageValid;

        if (!isFormValid) {
            formStatus.textContent =
                "Please correct the errors before submitting.";

            return;
        }

        formStatus.textContent =
            "Your form is valid!";

        // This form validates inputs only.
        // Sending emails requires an email service or backend.
    });
}
