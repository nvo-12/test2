// slider automático
let slideIndex = 0;
const slides = document.getElementsByClassName('slide');

// Función para mostrar los slides automáticamente
function showSlides() {
    // Oculta todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;

    // Reinicia el índice si es mayor al número de slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Muestra el slide actual
    slides[slideIndex - 1].style.display = 'block';

    // Cambia de imagen cada 8 segundos
    setTimeout(showSlides, 8000);
}

// Función para cambiar de slide con botones
function changeSlide(direction) {
    // Ajusta el índice del slide
    slideIndex += direction;

    // Si el índice es menor que 1, vuelve al último slide
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Si el índice es mayor que el número de slides, vuelve al primero
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Oculta todos los slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Muestra el slide actual
    slides[slideIndex - 1].style.display = 'block';
}

// Inicializa el slider cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", showSlides);
