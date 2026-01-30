// ========================================
// Navegación
// ========================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollTopBtn = document.getElementById('scrollTop');

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Scroll to top button
    if (currentScroll > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    lastScroll = currentScroll;
    
    // Active navigation link based on scroll position
    updateActiveNavLink();
});

// Update active navigation link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Scroll to top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Hero Stats Counter Animation
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer para animar contadores cuando estén visibles
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ========================================
// Portfolio Filter
// ========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.6s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ========================================
// Import EmailJS from CDN
// ========================================
import emailjs from 'https://esm.sh/@emailjs/browser';

// ========================================
// EmailJS Configuration
// ========================================
const EMAILJS_SERVICE_ID = "service_4fngme9";
const EMAILJS_TEMPLATE_ID = "template_6z8jqlg";
const EMAILJS_PUBLIC_KEY = "ktauY7PgF31YuvQ1B";

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

// ========================================
// Form Submission with EmailJS
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Mostrar estado de envío
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Preparar los datos del formulario
    const formData = {
        from_name: contactForm.querySelector('input[name="from_name"]').value,
        from_email: contactForm.querySelector('input[name="from_email"]').value,
        from_phone: contactForm.querySelector('input[name="from_phone"]').value,
        service_type: contactForm.querySelector('select[name="service_type"]').value,
        message: contactForm.querySelector('textarea[name="message"]').value,
    };
    
    // Enviar con EmailJS
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
        .then((response) => {
            console.log('Email enviado exitosamente:', response);
            
            // Mostrar mensaje de éxito
            showSuccessMessage('¡Mensaje enviado exitosamente! Te responderemos pronto.');
            
            // Limpiar formulario
            contactForm.reset();
            
            // Restaurar botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        })
        .catch((error) => {
            console.error('Error al enviar email:', error);
            
            // Mostrar mensaje de error
            showErrorMessage('Error al enviar el mensaje. Intenta de nuevo.');
            
            // Restaurar botón
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});

// ========================================
// Mostrar Mensaje de Éxito
// ========================================
function showSuccessMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message success-message';
    messageDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.parentElement.insertBefore(messageDiv, contactInfo);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

// ========================================
// Mostrar Mensaje de Error
// ========================================
function showErrorMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'form-message error-message';
    messageDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
    `;
    
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.parentElement.insertBefore(messageDiv, contactInfo);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        messageDiv.classList.add('fade-out');
        setTimeout(() => messageDiv.remove(), 500);
    }, 5000);
}

// ========================================
// Intersection Observer para animaciones
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Añadir delay escalonado para efecto cascada
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observar elementos para animaciones
const animatedElements = document.querySelectorAll(
    '.service-card, .portfolio-item, .team-member, .value-item, .info-item'
);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(el);
});

// ========================================
// Animación de entrada para secciones
// ========================================
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// ========================================
// Efecto parallax mejorado en tarjetas
// ========================================
document.querySelectorAll('.service-card, .portfolio-item, .team-member').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ========================================
// Smooth Scroll para todos los enlaces
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Parallax effect para hero background
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('.animated-bg');
    
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Typing Effect para Hero Title (opcional)
// ========================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========================================
// Portfolio Item Click - Modal (opcional)
// ========================================
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const title = item.querySelector('.portfolio-title').textContent;
        const description = item.querySelector('.portfolio-description').textContent;
        const category = item.querySelector('.portfolio-category').textContent;
        
        // Agregar efecto de click
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
        
        console.log('Proyecto seleccionado:', { title, description, category });
    });
});

// ========================================
// Efecto de cursor personalizado en botones
// ========================================
const buttons = document.querySelectorAll('.btn, .filter-btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function(e) {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// ========================================
// Animación de números con efecto de conteo
// ========================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ========================================
// Loading Animation
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ========================================
// Detectar si el usuario prefiere modo oscuro
// ========================================
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // El sitio ya está en modo oscuro por defecto
    console.log('Modo oscuro activado');
}

// ========================================
// Service Worker para PWA (opcional)
// ========================================
if ('serviceWorker' in navigator) {
    // Descomentar para habilitar service worker
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registrado', reg))
    //     .catch(err => console.log('Error al registrar Service Worker', err));
}

// ========================================
// Añadir clase hover a cards en mobile
// ========================================
if ('ontouchstart' in window) {
    const cards = document.querySelectorAll('.service-card, .portfolio-item, .team-member');
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-hover');
        });
        card.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('touch-hover');
            }, 300);
        });
    });
}

// ========================================
// Console Message
// ========================================
console.log('%c¡Hola Developer! 👋', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c¿Te gusta lo que ves? Contáctanos en info@amsystems.com', 'color: #f5576c; font-size: 14px;');
console.log('%cAM Systems - Transformando ideas en soluciones digitales', 'color: #4facfe; font-size: 12px;');
