const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

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
