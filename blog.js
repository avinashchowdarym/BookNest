document.addEventListener("DOMContentLoaded", function () {
    const articlesContainer = document.querySelector(".articles");
    const articles = document.querySelectorAll(".article");
    const totalArticles = articles.length;
    let currentIndex = 0;
    let slidingInterval;

    // Function to clone all articles and append them 100 times to create the loop
    function cloneArticles() {
        for (let i = 0; i < 100; i++) {
            articles.forEach(article => {
                const clone = article.cloneNode(true);  // Clone each article
                articlesContainer.appendChild(clone);  // Append it to the container
            });
        }
    }

    // Function to slide articles
    function slideArticles() {
        const articleWidth = articles[0].offsetWidth; // Get the width of a single article box

        // Move the container to the left by one article's width
        articlesContainer.style.transform = `translateX(-${(currentIndex + 1) * articleWidth}px)`;

        currentIndex++;

        // Check if all articles have been displayed (slid past the original set of articles)
        if (currentIndex >= totalArticles * 100) {
            setTimeout(() => {
                // Move the container back to the start without transition (to avoid jump)
                articlesContainer.style.transition = "none";
                articlesContainer.style.transform = "translateX(0)";

                // Reset the index
                currentIndex = 0;

                // Re-enable the transition for smooth sliding again
                setTimeout(() => {
                    articlesContainer.style.transition = "transform 1s ease";
                }, 50);
            }, 2000); // Pause for 2 seconds before resetting position
        }
    }

    // Function to start sliding
    function startSliding() {
        slidingInterval = setInterval(slideArticles, 2000); // Slide every 3 seconds
    }

    // Function to stop sliding
    function stopSliding() {
        clearInterval(slidingInterval); // Stop sliding
    }

    // Clone all articles 100 times
    cloneArticles();

    // Start the sliding loop
    startSliding();

    // Pause sliding on hover
    articlesContainer.addEventListener("mouseenter", function () {
        stopSliding(); // Stop sliding when hovered
    });

    // Resume sliding after mouse leaves
    articlesContainer.addEventListener("mouseleave", function () {
        startSliding(); // Resume sliding
    });
});
