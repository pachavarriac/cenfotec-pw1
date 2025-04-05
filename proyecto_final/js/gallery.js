const list = document.querySelector('.gallery-container .gallery-slider');
const items = document.querySelectorAll('.gallery-container .gallery-slider .gallery-item');
const dots = document.querySelectorAll('.gallery-container .gallery-dots li');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const lengthItems = items.length - 1;

let refreshSlider = setInterval( () => {next.click()}, 3000 );
let active = 0;

prev.onclick = function () {
    if(active - 1 < 0){
        active = lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

next.onclick = function () {
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}

dots.forEach((li, key) => {
    li.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

function reloadSlider() {
    const checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    const lastActiveDot = document.querySelector('.gallery-container .gallery-dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval( () => {next.click()}, 3000 );
}


//  ####  SLIDER INFINITO  ###  //

// const list = document.querySelector('.gallery-container .gallery-slider');
// let items = document.querySelectorAll('.gallery-container .gallery-slider .gallery-item');
// const dots = document.querySelectorAll('.gallery-container .gallery-dots li');
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');

// let active = 1; // porque clonamos un elemento antes
// let refreshSlider;
// let itemWidth = items[0].offsetWidth;

// // Clonar primer y último elementos
// const firstClone = items[0].cloneNode(true);
// const lastClone = items[items.length - 1].cloneNode(true);

// firstClone.classList.add('clone');
// lastClone.classList.add('clone');

// list.appendChild(firstClone);
// list.insertBefore(lastClone, items[0]);

// items = document.querySelectorAll('.gallery-container .gallery-slider .gallery-item'); // actualizar la lista
// list.style.transition = 'none';
// list.style.left = `-${itemWidth * active}px`; // mover al primer verdadero

// function startAutoSlide() {
//     refreshSlider = setInterval(() => {
//         next.click();
//     }, 3000);
// }

// function stopAutoSlide() {
//     clearInterval(refreshSlider);
// }

// startAutoSlide();

// prev.onclick = function () {
//     if (active <= 0) return;
//     active--;
//     reloadSlider();
// }

// next.onclick = function () {
//     if (active >= items.length - 1) return;
//     active++;
//     reloadSlider();
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', function () {
//         active = key + 1; // por el clone al inicio
//         reloadSlider();
//     });
// });

// function reloadSlider() {
//     list.style.transition = 'left 0.5s ease-in-out';
//     list.style.left = `-${itemWidth * active}px`;

//     stopAutoSlide();
//     startAutoSlide();

//     // Actualiza los dots
//     const lastActiveDot = document.querySelector('.gallery-container .gallery-dots li.active');
//     if (lastActiveDot) lastActiveDot.classList.remove('active');
//     let dotIndex = active - 1;
//     if (dotIndex < 0) dotIndex = dots.length - 1;
//     if (dotIndex >= dots.length) dotIndex = 0;
//     dots[dotIndex].classList.add('active');
// }

// // Para hacer el bucle visual perfecto
// list.addEventListener('transitionend', () => {
//     if (items[active].classList.contains('clone')) {
//         list.style.transition = 'none';
//         if (active === items.length - 1) {
//             active = 1;
//         } else if (active === 0) {
//             active = items.length - 2;
//         }
//         list.style.left = `-${itemWidth * active}px`;
//     }
// });
