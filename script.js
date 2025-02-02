const contentElement = document.getElementById('education-content');
const projectsContent = document.getElementById('projects-content');

const educationItems = [
    {
        
        title: 'Bachelor of Engineering',
        institution: 'Chandigarh University',
        dates: '2024-2028'
    },
   
];

const projectItems = [
    {
        title: 'Project 1',
        description: 'Cloning of amazon and zomato',
        technologies: 'HTML, CSS'
    },
    
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


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;
const nav = document.querySelector('nav');
const contentSections = document.querySelectorAll('.content-section');


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


const blogsContent = document.getElementById('blogs-content');

const blogItems = [  
    {
        title: 'My First Blog Post',
        content: 'Hey there, tech enthusiasts! I am Aayushi Mishra, a passionate frontend developer, an active community member, and an aspiring innovator in the world of technology. My journey into the tech space has been nothing short of exciting, and I am here to share my experiences, skills, and aspirations with you!My core expertise lies in frontend development, but I’m always eager to explore new technologies. '
    },
   
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

renderBlogItems(); 

function typewriterEffect(element, text, speed) {
    let i = 0;
    element.textContent = ""; 
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
  const typingSpeed = 30;
  
  typewriterEffect(textElement, textToType, typingSpeed);
  
  const sentences = [
    "I'm a passionate front-end developer with a knack for creating user-friendly and visually appealing websites",
    "I thrive on learning new technologies and collaborating with others to bring innovative ideas to life",
    "Join me on my journey of continuous learning."
  ];
  
  let currentSentenceIndex = 0;
  
  function typeNextSentence() {
      typewriterEffect(textElement, sentences[currentSentenceIndex], typingSpeed);
      currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length; 
      setTimeout(typeNextSentence, 5000); 
  }
  
  typeNextSentence(); 
