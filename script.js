// Page fade-in
window.onload = () => {
    document.body.classList.add("loaded");
    revealOnScroll();
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
