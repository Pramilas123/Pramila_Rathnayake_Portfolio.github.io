window.addEventListener("scroll", function() {

    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {

        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 120;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
});

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 4000);
