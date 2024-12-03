// Select the new item container
const itemContainer = document.querySelector('.choice-content');
// Select all item elements
const items = Array.from(document.querySelectorAll('.choice'));

// Clone the items 100 times to ensure a continuous sliding effect
for (let i = 0; i < 100; i++) {
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    itemContainer.appendChild(clone);  
  });
}

// Variables for sliding
let currentIndex = 0;          // Track the current item index
const itemWidth = items[0].offsetWidth; // Width of one item (assumes all are the same)
const slideInterval = 2000;     // 2 seconds delay between slides
let isItemHovered = false;  // Track hover state

// Function to slide items
function slideItems() {
  if (isItemHovered) return; // Pause sliding if hovered

  currentIndex++; // Move to the next item
  itemContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  itemContainer.style.transition = 'transform 0.5s ease-in-out';

  // If all clones are slid, reset the index to create an infinite effect
  if (currentIndex >= items.length * 100) {
    itemContainer.style.transition = 'none'; // Temporarily disable transition
    currentIndex = 0; // Reset index
    itemContainer.style.transform = `translateX(0)`;
  }
}

// Set an interval to slide items every 2 seconds
let itemInterval = setInterval(slideItems, slideInterval);

// Pause the sliding on hover
itemContainer.addEventListener('mouseover', () => (isItemHovered = true));

// Resume the sliding when hover is removed
itemContainer.addEventListener('mouseout', () => (isItemHovered = false));
