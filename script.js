const contentElement = document.getElementById('education-content');
const projectsContent = document.getElementById('projects-content');

const educationItems = [
    {
        title: 'Bachelor of Engineering',
        institution: 'Chandigarh University',
        dates: '2024-2028'
    },
    // Add more education items here
];

const projectItems = [
    {
        title: 'Project 1',
        description: 'Cloning of amazon and zomato',
        technologies: 'HTML, CSS, JavaScript'
    },
    // Add more project items here
];

function renderEducationItems() {
    const educationHtml = educationItems.map(item => `
        <div>
            <h3>${item.title}</h3>
            <p>${item.institution}</p>
            <p>${item.dates}</p>
        </div>
    `).join('');
    contentElement.innerHTML = educationHtml;
}

function renderProjectItems() {
    const projectsHtml = projectItems.map(project => `
        <div class="project-item">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p>Technologies: ${project.technologies}</p>
        </div>
    `).join('');
    projectsContent.innerHTML = projectsHtml;
}

renderEducationItems();
renderProjectItems();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const nav = document.querySelector('nav');
const contentSections = document.querySelectorAll('.content-section');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    nav.classList.add(savedTheme);
    contentSections.forEach(section => section.classList.add(savedTheme));
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    contentSections.forEach(section => section.classList.toggle('dark-mode'));
    updateThemeIcon();

    // Save the theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

function updateThemeIcon() {
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

// ... (Your existing JavaScript) ...

const blogsContent = document.getElementById('blogs-content');

const blogItems = [  // Example blog data
    {
        title: 'My First Blog Post',
        content: 'My core expertise lies in frontend development, but I’m always eager to explore new technologies. I have experience working with'
    },
    // Add more blog items here
];

function renderBlogItems() {
    const blogsHtml = blogItems.map(blog => `
        <div class="blog-item">
            <h3>${blog.title}</h3>
            <p>${blog.content}</p>
        </div>
    `).join('');
    blogsContent.innerHTML = blogsHtml;
}

renderBlogItems(); // Call the function to render blogs

function typewriterEffect(element, text, speed) {
    let i = 0;
    element.textContent = ""; // Clear initial text (if any)
    const timer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(timer);
      }
    }, speed);
  }
  
  const textElement = document.getElementById('typed-text');
  const textToType = "This is the text I want to type.";
  const typingSpeed = 30; // Milliseconds per character
  
  typewriterEffect(textElement, textToType, typingSpeed);
  
  
  // Example for multiple sentences (more advanced):
  const sentences = [
    "First sentence.",
    "Second sentence.",
    "Third sentence."
  ];
  
  let currentSentenceIndex = 0;
  
  function typeNextSentence() {
      typewriterEffect(textElement, sentences[currentSentenceIndex], typingSpeed);
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length; // Loop back to the start
      setTimeout(typeNextSentence, 2000); // Wait 2 seconds between sentences
  }
  
  typeNextSentence(); // Start the typing effect

// ... (Rest of your JavaScript) ...
