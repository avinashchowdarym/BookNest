// Get the choice-content container and all book choices
const choiceContent = document.querySelector('.choice-content');
const choices = Array.from(document.querySelectorAll('.choice-content .choice-1, .choice-content .choice-2, .choice-content .choice-3, .choice-content .choice-4, .choice-content .choice-5, .choice-content .choice-6'));

// Clone the choices 100 times to simulate infinite sliding
for (let i = 0; i < 100; i++) {
    choices.forEach((choice) => {
        const clone = choice.cloneNode(true); // Clone each choice
        choiceContent.appendChild(clone);     // Append the clone to the container
    });
}

// Variables for controlling the sliding
let indexChoice = 0;
const slideWidthChoice = choices[0].offsetWidth; 
const delayChoice = 2000; 
let isHoveredChoice = false; 

// Function to slide the choices
function slideBooksChoice() {
    if (isHoveredChoice) return; // Pause the slider when hovered

    indexChoice++; 
    choiceContent.style.transform = `translateX(-${indexChoice * slideWidthChoice}px)`; // Move the container
    choiceContent.style.transition = 'transform 0.5s ease-in-out';

    // Reset the sliding once it reaches the end of the cloned elements
    if (indexChoice >= choices.length * 100) {
        choiceContent.style.transition = 'none'; 
        indexChoice = 0; // Reset the index
        choiceContent.style.transform = `translateX(0)`; 
    }
}

// Start the sliding with an interval
let intervalChoice = setInterval(slideBooksChoice, delayChoice);

// Pause the sliding when the mouse hovers over the container
choiceContent.addEventListener('mouseover', () => (isHoveredChoice = true));

// Resume the sliding when the mouse leaves the container
choiceContent.addEventListener('mouseout', () => (isHoveredChoice = false));
