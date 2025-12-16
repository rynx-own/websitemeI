// Main JavaScript for Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.className = 'fas fa-sun';
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Navigation Menu Toggle
    const navMenuBtn = document.getElementById('navMenuBtn');
    const navDropdown = document.getElementById('navDropdown');
    
    navMenuBtn.addEventListener('click', function() {
        navDropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenuBtn.contains(e.target) && !navDropdown.contains(e.target)) {
            navDropdown.classList.remove('active');
        }
    });
    
    // Close dropdown when clicking a link
    document.querySelectorAll('.nav-dropdown-link').forEach(link => {
        link.addEventListener('click', function() {
            navDropdown.classList.remove('active');
        });
    });
    
    // Initialize skills data
    const skillsData = [
        { name: 'JavaScript', level: 90, icon: 'fa-brands fa-js' },
        { name: 'React', level: 85, icon: 'fa-brands fa-react' },
        { name: 'TypeScript', level: 70, icon: 'fa-solid fa-code' },
        { name: 'Python', level: 50, icon: 'fa-brands fa-python' }
    ];
    
    const techLogos = [
        { name: 'JavaScript', icon: 'fa-brands fa-js', link: '#' },
        { name: 'Python', icon: 'fa-brands fa-python', link: '#' },
        { name: 'HTML5', icon: 'fa-brands fa-html5', link: '#' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt', link: '#' },
        { name: 'React', icon: 'fa-brands fa-react', link: '#' },
        { name: 'Node.js', icon: 'fa-brands fa-node-js', link: '#' },
        { name: 'Database', icon: 'fa-solid fa-database', link: '#' },
        { name: 'Git', icon: 'fa-brands fa-git-alt', link: '#' }
    ];
    
    // Populate skills section
    populateSkills();
    populateTechLogos();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll hint functionality
    const scrollHint = document.querySelector('.scroll-hint-new');
    if (scrollHint) {
        scrollHint.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
    
    // Function to populate skills
    function populateSkills() {
        const skillsContainer = document.querySelector('#skills .row');
        if (!skillsContainer) return;
        
        skillsData.forEach(skill => {
            const skillCol = document.createElement('div');
            skillCol.className = 'col-12 mb-4';
            
            skillCol.innerHTML = `
                <div class="d-flex justify-content-between mb-2">
                    <span>${skill.name}</span>
                    <span>${skill.level}%</span>
                </div>
                <div class="progress" style="height: 8px; background-color: var(--gray);">
                    <div class="progress-bar" 
                         role="progressbar" 
                         style="width: ${skill.level}%; background-color: var(--primary);"
                         aria-valuenow="${skill.level}" 
                         aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                </div>
            `;
            
            skillsContainer.appendChild(skillCol);
        });
    }
    
    // Function to populate technology logos
    function populateTechLogos() {
        const logoGrid = document.querySelector('.logo-grid');
        if (!logoGrid) return;
        
        techLogos.forEach(tech => {
            const logoLink = document.createElement('a');
            logoLink.className = 'tech-logo';
            logoLink.href = tech.link;
            logoLink.target = '_blank';
            logoLink.title = tech.name;
            
            logoLink.innerHTML = `
                <i class="${tech.icon}"></i>
                <span class="logo-label">${tech.name}</span>
            `;
            
            logoGrid.appendChild(logoLink);
        });
    }
    
    // Initialize tooltips for social logos
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Scroll Animation Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        animationObserver.observe(element);
    });
});
