document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check if localStorage supports dark mode setting
    if (!localStorage.getItem("dark-mode")) {
        localStorage.setItem("dark-mode", "disabled");  // Default light mode
    }

    // Apply stored preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.textContent = "☀️";
    }

    // Toggle dark mode
    toggleButton.addEventListener("click", function() {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.textContent = "☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.textContent = "🌙";
        }
    });
});

const scrollToTopButton = document.getElementById("scrollToTop");

// Show button when scrolling down
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top when button is clicked
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
