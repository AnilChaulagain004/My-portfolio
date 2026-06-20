// ===================================
// Theme Toggle
// ===================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
// ===================================
// Mobile Navigation Toggle
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
// Animate hamburger menu
const spans = navToggle.querySelectorAll('span');
if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
} else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '1';
    spans[2].style.transform = '';
}
});
// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', () => {
navMenu.classList.remove('active');
const spans = navToggle.querySelectorAll('span');
spans[0].style.transform = '';
spans[1].style.opacity = '1';
spans[2].style.transform = '';
});
});
// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
const currentScroll = window.pageYOffset;
// Add shadow when scrolled
if (currentScroll > 50) {
    navbar.classList.add('scrolled');
} else {
    navbar.classList.remove('scrolled');
}

lastScroll = currentScroll;
});
// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
const href = this.getAttribute('href');
    // Don't prevent default for empty hash
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
});
});
// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
// Get form data
const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
};

// Simulate form submission (replace with actual backend call)
formStatus.textContent = 'Sending message...';
formStatus.className = 'form-status';
formStatus.style.display = 'block';

setTimeout(() => {
    // Simulate success
    formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
    formStatus.className = 'form-status success';
    
    // Reset form
    contactForm.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}, 1500);

// For actual implementation, use fetch or XMLHttpRequest:
/*
fetch('your-backend-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    formStatus.textContent = 'Message sent successfully!';
    formStatus.className = 'form-status success';
    contactForm.reset();
})
.catch(error => {
    formStatus.textContent = 'Error sending message. Please try again.';
    formStatus.className = 'form-status error';
});
*/
});
// ===================================
// Back to Top Button
// ===================================
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
backToTopButton.classList.add('visible');
} else {
backToTopButton.classList.remove('visible');
}
});
backToTopButton.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});
// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);
// Observe elements for animation
document.querySelectorAll('.project-card, .blog-card, .skill-category, .timeline-item').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(30px)';
el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
observer.observe(el);
});
// ===================================
// Active Navigation Link Highlight
// ===================================
const sections = document.querySelectorAll('section[id]');
function highlightNavigation() {
const scrollY = window.pageYOffset;
sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('active');
    } else {
        navLink?.classList.remove('active');
    }
});
}
window.addEventListener('scroll', highlightNavigation);
// ===================================
// Performance: Debounce Scroll Events
// ===================================
function debounce(func, wait = 10) {
let timeout;
return function executedFunction(...args) {
const later = () => {
clearTimeout(timeout);
func(...args);
};
clearTimeout(timeout);
timeout = setTimeout(later, wait);
};
}
// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(highlightNavigation, 10));
// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #6c757d;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #6c757d;');
