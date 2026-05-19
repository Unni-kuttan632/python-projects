const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");
const themeToggles = document.querySelectorAll("[data-theme-toggle]");
const themeLabels = document.querySelectorAll("[data-theme-label]");
const themeSelects = document.querySelectorAll("[data-theme-select]");
const themeChoices = document.querySelectorAll("[data-theme-choice]");
const availableThemes = ["dark", "light", "ocean", "earth", "fantasy"];

const applyTheme = (theme) => {
    const selectedTheme = availableThemes.includes(theme) ? theme : "dark";
    const isLight = theme === "light";
    document.body.classList.remove("light-theme", "ocean-theme", "earth-theme", "fantasy-theme");
    document.body.classList.toggle("light-theme", isLight);
    document.body.classList.toggle("ocean-theme", selectedTheme === "ocean");
    document.body.classList.toggle("earth-theme", selectedTheme === "earth");
    document.body.classList.toggle("fantasy-theme", selectedTheme === "fantasy");
    themeLabels.forEach((label) => {
        label.textContent = isLight ? "Dark" : "Light";
    });
    themeToggles.forEach((toggle) => {
        toggle.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
    });
    themeSelects.forEach((select) => {
        select.value = selectedTheme;
    });
    themeChoices.forEach((choice) => {
        const isActive = choice.dataset.themeChoice === selectedTheme;
        choice.classList.toggle("active", isActive);
        choice.setAttribute("aria-pressed", String(isActive));
    });
};

const savedTheme = localStorage.getItem("portfolioTheme") || "dark";
applyTheme(savedTheme);

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        const isOpen = navLinks.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formFeedback.textContent = "Thanks! Your message has been received locally.";
        contactForm.reset();
        setTimeout(() => {
            formFeedback.textContent = "";
        }, 5000);
    });
}

themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
        localStorage.setItem("portfolioTheme", nextTheme);
        applyTheme(nextTheme);
    });
});

themeSelects.forEach((select) => {
    select.addEventListener("change", () => {
        localStorage.setItem("portfolioTheme", select.value);
        applyTheme(select.value);
    });
});

themeChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const theme = choice.dataset.themeChoice;
        localStorage.setItem("portfolioTheme", theme);
        applyTheme(theme);
    });
});
