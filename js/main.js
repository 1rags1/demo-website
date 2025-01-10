// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '▲'; // Simple arrow for minimalistic look
backToTopButton.id = 'backToTop';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.fontSize = '18px';
backToTopButton.style.color = '#fff';
backToTopButton.style.background = 'linear-gradient(135deg, #ffa500, #ff7b00)';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
        backToTopButton.style.opacity = '1';
        backToTopButton.style.transform = 'scale(1)';
    } else {
        backToTopButton.style.opacity = '0';
        backToTopButton.style.transform = 'scale(0.8)';
        setTimeout(() => {
            if (window.scrollY <= 300) {
                backToTopButton.style.display = 'none';
            }
        }, 300);
    }
});
// Modal logic for pricing plans
const pricingPlans = document.querySelectorAll('.pricing .plan');
const modal = document.getElementById('pricingModal');
const modalTitle = document.getElementById('modal-title');
const modalDetails = document.getElementById('modal-details');
const closeModal = document.querySelector('.modal-content .close');

// Plan details
const planDetails = {
    "Basic Plan": "The Basic Plan includes essential maintenance and updates to keep your website running smoothly. Perfect for small businesses.",
    "Pro Plan": "The Pro Plan offers advanced features, priority support, and additional customization options for your growing business.",
    "Premium Plan": "The Premium Plan includes full customization, 24/7 support, and all premium features for an unparalleled experience."
};

// Show modal on plan click
pricingPlans.forEach(plan => {
    plan.addEventListener('click', () => {
        const title = plan.querySelector('h3').innerText;
        modalTitle.innerText = title;
        modalDetails.innerText = planDetails[title] || "Details not available.";
        modal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
