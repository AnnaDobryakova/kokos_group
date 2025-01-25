let currentSlide = 0
const slides = document.querySelector('.intro__slides');
const totalSlides = document.querySelectorAll('.intro__slide').length;
const nextButton = document.querySelector('.intro__next')
const prevButton = document.querySelector('.intro__prev')

if (nextButton) {
    nextButton.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        updateSlider();
    });
}

if (prevButton) {
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
        updateSlider();
    });
}

function updateSlider() {
    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}