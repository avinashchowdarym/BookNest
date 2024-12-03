// Select the book container
const bookContainer = document.querySelector('.book-container');
// Select all book elements
const books = Array.from(document.querySelectorAll('.books'));

// Clone the books 100 times to ensure a continuous sliding effect
for (let i = 0; i < 100; i++) {
  books.forEach((book) => {
    const clone = book.cloneNode(true);
    bookContainer.appendChild(clone);  
  });
}

// Variables for sliding
let indexChoice = 0;          // Track the current book index
const slideWidth = books[0].offsetWidth; // Width of one book (assumes all are same)
const delay = 2000;     // 2 seconds delay between slides
let isHovered = false;  // Track hover state

// Function to slide books
function slideBooks() {
  if (isHovered) return; // Pause sliding if hovered

  indexChoice++; // Move to the next book
  bookContainer.style.transform = `translateX(-${indexChoice * slideWidth}px)`;
  bookContainer.style.transition = 'transform 0.5s ease-in-out';

  // If all clones are slid, reset the index to create an infinite effect
  if (indexChoice >= books.length * 100) {
    bookContainer.style.transition = 'none'; // Temporarily disable transition
    indexChoice = 0; // Reset index
    bookContainer.style.transform = `translateX(0)`;
  }
}

// Set an interval to slide books every 2 seconds
let interval = setInterval(slideBooks, delay);

// Pause the sliding on hover
bookContainer.addEventListener('mouseover', () => (isHovered = true));

// Resume the sliding when hover is removed
bookContainer.addEventListener('mouseout', () => (isHovered = false));
