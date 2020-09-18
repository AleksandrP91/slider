let prev = document.querySelector('.arrow-left');
let next = document.querySelector('.arrow-right');
let slides = document.querySelectorAll('.slide');
let wrap = document.querySelectorAll('.wrap');

let index = 0;

let activeSlide = function(n) {
    console.log(n)
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

let nextSlide = function() {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

let prevSlide = function() {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



