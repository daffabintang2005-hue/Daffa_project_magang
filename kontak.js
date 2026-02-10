// Kontak Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            clearErrors();
            
            // Validate form
            const isValid = validateForm();
            
            if (isValid) {
                // Simulate form submission
                simulateFormSubmission();
            }
        });
    }
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // Name validation
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            showError('nameError', 'Nama lengkap harus diisi');
            nameInput.classList.add('error');
            isValid = false;
        } else if (nameInput.value.trim().length < 3) {
            showError('nameError', 'Nama minimal 3 karakter');
            nameInput.classList.add('error');
            isValid = false;
        }
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim()) {
            showError('emailError', 'Email harus diisi');
            emailInput.classList.add('error');
            isValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError('emailError', 'Format email tidak valid');
            emailInput.classList.add('error');
            isValid = false;
        }
        
        // Subject validation
        const subjectSelect = document.getElementById('subject');
        if (!subjectSelect.value) {
            showError('subjectError', 'Subjek harus dipilih');
            subjectSelect.classList.add('error');
            isValid = false;
        }
        
        // Message validation
        const messageInput = document.getElementById('message');
        if (!messageInput.value.trim()) {
            showError('messageError', 'Pesan harus diisi');
            messageInput.classList.add('error');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            showError('messageError', 'Pesan minimal 10 karakter');
            messageInput.classList.add('error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }
    
    // Clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
        formInputs.forEach(input => {
            input.classList.remove('error');
        });
    }
    
    // Simulate form submission
    function simulateFormSubmission() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Hide form
            contactForm.style.display = 'none';
            
            // Show success message
            successMessage.style.display = 'block';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 5 seconds
            setTimeout(() => {
                contactForm.style.display = 'block';
                successMessage.style.display = 'none';
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        }, 2000);
    }
    
    // Google Maps interaction
    const mapPlaceholder = document.getElementById('mapPlaceholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            window.open('https://maps.app.goo.gl/pgyqPFSSRhBMAV688', '_blank');
        });
        
        // Add hover effect
        mapPlaceholder.style.cursor = 'pointer';
        mapPlaceholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        mapPlaceholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Animate info cards on scroll
    const infoCards = document.querySelectorAll('.info-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
    
    // Animate desa cards
    const desaCards = document.querySelectorAll('.desa-card');
    desaCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        const desaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        desaObserver.observe(card);
    });
    
    // Add interactive effect to map instructions
    const instructions = document.querySelectorAll('.instruction');
    instructions.forEach(instruction => {
        instruction.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        instruction.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            // Remove non-numeric characters
            let value = this.value.replace(/\D/g, '');
            
            // Format as Indonesian phone number
            if (value.length > 0) {
                if (value.length <= 4) {
                    value = value;
                } else if (value.length <= 8) {
                    value = value.replace(/(\d{4})(\d+)/, '$1-$2');
                } else {
                    value = value.replace(/(\d{4})(\d{4})(\d+)/, '$1-$2-$3');
                }
            }
            
            this.value = value;
        });
    }
});