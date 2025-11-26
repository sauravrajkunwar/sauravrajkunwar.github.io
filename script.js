// Page fade-in
window.onload = () => {
    document.body.classList.add("loaded");
    revealOnScroll();
    applySavedTheme();
    updateDarkModeIcon();
};

// Scroll reveal effect
function revealOnScroll() {
    const elements = document.querySelectorAll(".fade-slide");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
}

/* ----------------------------------------------------
   DARK MODE TOGGLE SYSTEM
---------------------------------------------------- */

// Toggle dark mode on click
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return; // safety

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save choice
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateDarkModeIcon();
    });
});

// Load saved theme
function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    }
}

// Change icon based on mode
function updateDarkModeIcon() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    if (document.body.classList.contains("dark-mode")) {
        toggle.textContent = "☀️"; // light icon
    } else {
        toggle.textContent = "🌙"; // dark icon
    }
}
