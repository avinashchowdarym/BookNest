document.addEventListener("DOMContentLoaded", () => {
    const bookContents = document.querySelectorAll(".book-content");
    const container = document.querySelector(".book-details");
    let currentIndex = 0;
    let slideInterval;

    // Set up styles for proper layout
    container.style.position = "relative";
    container.style.overflow = "hidden";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.height = `${bookContents[0].offsetHeight}px`;

    // Set initial positions of book-content boxes
    function initializePositions() {
        bookContents.forEach((content, index) => {
            content.style.position = "absolute";
            content.style.transition = "transform 1s ease-in-out";
            content.style.width = "80%";
            if (index === currentIndex) {
                content.style.transform = "translateX(0)"; // Centered
            } else if (index === (currentIndex + 1) % bookContents.length) {
                content.style.transform = "translateX(100%)"; // Right
            } else if (index === (currentIndex - 1 + bookContents.length) % bookContents.length) {
                content.style.transform = "translateX(-100%)"; // Left
            } else {
                content.style.transform = "translateX(200%)"; // Off-screen
            }
        });
    }

    // Function to slide to the next content
    function slideNext() {
        currentIndex = (currentIndex + 1) % bookContents.length;
        initializePositions();
    }

    // Initialize positions and start infinite sliding
    initializePositions();
    slideInterval = setInterval(slideNext, 3000); // 2-second pause + 1-second transition

    // Stop the sliding on hover
    container.addEventListener("mouseenter", () => {
        clearInterval(slideInterval); // Stop sliding
    });

    // Resume the sliding when mouse leaves
    container.addEventListener("mouseleave", () => {
        slideInterval = setInterval(slideNext, 3000); // Restart the sliding
    });
});
