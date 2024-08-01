// Carousel Script
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });
    slides[currentSlide].style.display = 'block';
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 3000); // Change image every 3 seconds
}

// Start the slideshow
showSlide();

// Form Validation Script
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest = document.getElementById('interest').value;
    
    if (!name || !email || interest === 'Select option') {
        alert('Please fill out all fields.');
        return false;
    }
    return true;
}
