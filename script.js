// Optional dynamic heading or animation logic can go here
// Example: Typing animation for headline

const headline = document.querySelector('.headline');
const text = "Creative Web Developer turning ideas into digital magic.";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    headline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// Clear existing text first then type
headline.textContent = '';
typeWriter();
