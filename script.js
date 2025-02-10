let currentIndex = 0;

function showSlide(index) {
    const testimonialList = document.querySelector(".testimonial-list");
    const testimonials = document.querySelectorAll(".testimonial");
    const totalTestimonials = testimonials.length;
    
    if (index >= totalTestimonials) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalTestimonials - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 340; 
    testimonialList.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);
