const list = document.querySelector('.gallery-container .gallery-slider');
let items = document.querySelectorAll('.gallery-container .gallery-slider .gallery-item');
const dots = document.querySelectorAll('.gallery-container .gallery-dots li');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let active = 1; 
let refreshSlider;
let itemWidth = items[0].offsetWidth;

const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');

list.appendChild(firstClone);
list.insertBefore(lastClone, items[0]);

items = document.querySelectorAll('.gallery-container .gallery-slider .gallery-item');
list.style.transition = 'none';
list.style.left = `-${itemWidth * active}px`;

function startAutoSlide() {
    refreshSlider = setInterval(() => {
        next.click();
    }, 6000);
}

function stopAutoSlide() {
    clearInterval(refreshSlider);
}

startAutoSlide();

prev.onclick = function () {
    if (active <= 0) return;
    active--;
    reloadSlider();
}

next.onclick = function () {
    if (active >= items.length - 1) return;
    active++;
    reloadSlider();
}

dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key + 1; 
        reloadSlider();
    });
});

function reloadSlider() {
    list.style.transition = 'left 0.5s ease-in-out';
    list.style.left = `-${itemWidth * active}px`;

    stopAutoSlide();
    startAutoSlide();

    const lastActiveDot = document.querySelector('.gallery-container .gallery-dots li.active');
    if (lastActiveDot) lastActiveDot.classList.remove('active');
    let dotIndex = active - 1;
    if (dotIndex < 0) dotIndex = dots.length - 1;
    if (dotIndex >= dots.length) dotIndex = 0;
    dots[dotIndex].classList.add('active');
}

list.addEventListener('transitionend', () => {
    if (items[active].classList.contains('clone')) {
        list.style.transition = 'none';
        if (active === items.length - 1) {
            active = 1;
        } else if (active === 0) {
            active = items.length - 2;
        }
        list.style.left = `-${itemWidth * active}px`;
    }
});
