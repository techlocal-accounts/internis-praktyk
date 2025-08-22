// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.phone || !data.date) {
            showMessage('Vul asseblief alle vereiste velde in.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showMessage('Vul asseblief \'n geldige e-pos adres in.', 'error');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(data.phone)) {
            showMessage('Vul asseblief \'n geldige telefoonnommer in.', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual endpoint)
        try {
            // Disable submit button during submission
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Stuur tans...';
            
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // For demo purposes, we'll just log the data and show success
            console.log('Form submission data:', data);
            
            // In production, you would send this to your backend:
            // const response = await fetch('/api/appointments', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(data)
            // });
            
            // Show success message
            showMessage('Dankie! U afspraakversoek is suksesvol gestuur. Ons sal u binnekort kontak.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Stuur Bespreking';
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('Daar was \'n fout met die stuur van u versoek. Probeer asseblief weer.', 'error');
            
            // Re-enable submit button
            const submitBtn = contactForm.querySelector('.btn-submit');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Stuur Bespreking';
        }
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Set minimum date for appointment booking to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
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

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Update WhatsApp number when available
// This should be updated with the actual WhatsApp number when provided
const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
const whatsappNumber = '27000000000'; // Replace with actual number when available

whatsappLinks.forEach(link => {
    // Update href with actual number
    link.href = `https://wa.me/${whatsappNumber}`;
    
    // Optional: Add default message
    const defaultMessage = encodeURIComponent('Hallo, ek wil graag \'n afspraak maak.');
    link.href += `?text=${defaultMessage}`;
});

// Form field animation
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
});

// Add loading state for page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
});

// Handle browser back button for mobile menu
window.addEventListener('popstate', () => {
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Email form data (for demo purposes)
// In production, this would be sent to a backend service
function sendEmailNotification(data) {
    // Create email body
    const emailBody = `
        Nuwe Afspraakversoek:
        
        Naam: ${data.name}
        E-pos: ${data.email}
        Telefoon: ${data.phone}
        Datum: ${data.date}
        Tyd: ${data.time || 'Nie gespesifiseer'}
        Rede: ${data.reason || 'Nie gespesifiseer'}
        Boodskap: ${data.message || 'Geen'}
    `;
    
    // In production, this would be sent to your email service
    // For now, we'll just log it
    console.log('Email notification would be sent to devin@techlocal.co.za:', emailBody);
    
    // You could also use a service like EmailJS or FormSubmit
    // to send emails directly from the frontend
}