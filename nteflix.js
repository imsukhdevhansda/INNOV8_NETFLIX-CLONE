document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            // Close other open FAQs
            faqs.forEach(item => {
                if (item !== faq) {
                    item.classList.remove("open");
                }
            });
            // Toggle the clicked FAQ
            faq.classList.toggle("open");
        });
    });
});

// Get Started Start

document.querySelector('.netflix-form').addEventListener('submit', function (e) {
    const emailInput = document.querySelector('input[name="email"]').value;
    
    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address.');
        e.preventDefault();  // Prevent form submission if the email is invalid
    }
});

// Get Started End