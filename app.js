// You can use JavaScript to dynamically populate the projectList and handle form submission.
// For simplicity, let's assume you have a list of projects//

// Typewriter
const textToType = [
  "BCCA",
  "BSC-IT",
  "BCOM",
  "MCA",
  "BCA"
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function type() {
  const currentText = textToType[currentTextIndex];
  const speed = isDeleting ? 50 : 350;

  if (currentCharIndex < currentText.length && !isDeleting) {
    document.getElementById('typewriter-text').textContent += currentText.charAt(currentCharIndex);
    currentCharIndex++;
  } else if (currentCharIndex > 0 && isDeleting) {
    document.getElementById('typewriter-text').textContent = currentText.substring(0, currentCharIndex - 1);
    currentCharIndex--;
  } else {
    isDeleting = !isDeleting;
    currentTextIndex = (currentTextIndex + 1) % textToType.length;
  }

  setTimeout(type, speed);
}

// Start typing when the page loads
window.onload = function () {
  type();
};

// Projects 
const projects = [
  { name: 'Project 1', description: 'Description of Project 1' },
  { name: 'Project 2', description: 'Description of Project 2' },
  // Add more projects as needed
];

document.addEventListener('DOMContentLoaded', function () {
  const projectList = document.getElementById('projectList');

  // Populate project list
  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
    projectList.appendChild(projectItem);
  });

  // Add event listener for form submission
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // Handle form submission logic (e.g., send data to server)
  });
});

// toggler
document.addEventListener('DOMContentLoaded', function () {
  const menuToggler = document.querySelector('.menu-toggler');
  const navLinks = document.querySelector('nav ul');

  menuToggler.addEventListener('click', function () {
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';

    setTimeout(function () {
      menuToggler.classList.toggle('hidden');
    }, 100);
  });
});


