// Page fade-in
window.onload = () => {
    document.body.classList.add("loaded");
    revealOnScroll();
    applySavedTheme();
    updateDarkModeLabel();
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

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateDarkModeLabel();
    });
});

function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    }
}

function updateDarkModeLabel() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;

    toggle.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}
