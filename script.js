let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-inner img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const newTransformValue = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
