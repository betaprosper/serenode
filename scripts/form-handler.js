document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const contactForm = document.getElementById('contactForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(signupForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                interests: formData.getAll('interests')
            };

            const messageDiv = document.getElementById('formMessage');

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                messageDiv.textContent = 'Thank you for joining! We\'ll keep you updated on our community launch.';
                messageDiv.className = 'form-message success';
                signupForm.reset();

                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            } catch (error) {
                messageDiv.textContent = 'Something went wrong. Please try again.';
                messageDiv.className = 'form-message error';
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            const messageDiv = document.getElementById('contactFormMessage');

            try {
                await new Promise(resolve => setTimeout(resolve, 1000));

                messageDiv.textContent = 'Thank you for reaching out! We\'ll get back to you soon.';
                messageDiv.className = 'form-message success';
                contactForm.reset();

                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            } catch (error) {
                messageDiv.textContent = 'Something went wrong. Please try again.';
                messageDiv.className = 'form-message error';
            }
        });
    }

    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});
