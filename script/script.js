// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const botonApoyar = document.getElementById("btn-unirse");

    if (botonApoyar) {
        botonApoyar.addEventListener("click", () => {
            alert("¡Gracias por tu apoyo! Te has registrado exitosamente en la campaña.");
            botonApoyar.textContent = "¡Apoyo Registrado!";
            botonApoyar.style.backgroundColor = "#2563eb";
        });
    }
});



// ===== CARRUSEL =====
const slides = document.querySelectorAll('.slide');
const puntos = document.querySelectorAll('.punto');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let indiceActual = 0;
let intervalo;

// Función para mostrar el slide según el índice
function mostrarSlide(index) {
    // Aseguramos que el índice esté dentro del rango
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    indiceActual = index;

    // Movemos el contenedor
    const slidesContainer = document.getElementById('carruselSlides');
    slidesContainer.style.transform = `translateX(-${indiceActual * 100}%)`;

    // Actualizamos puntos activos
    puntos.forEach((p, i) => {
        p.classList.toggle('active', i === indiceActual);
    });
}

// Función para avanzar al siguiente slide
function siguienteSlide() {
    mostrarSlide(indiceActual + 1);
}

// Función para ir al anterior
function anteriorSlide() {
    mostrarSlide(indiceActual - 1);
}

// Eventos de los botones
prevBtn.addEventListener('click', () => {
    clearInterval(intervalo);
    anteriorSlide();
    iniciarIntervalo();
});

nextBtn.addEventListener('click', () => {
    clearInterval(intervalo);
    siguienteSlide();
    iniciarIntervalo();
});

// Eventos de los puntos
puntos.forEach((punto, i) => {
    punto.addEventListener('click', () => {
        clearInterval(intervalo);
        mostrarSlide(i);
        iniciarIntervalo();
    });
});


function iniciarIntervalo() {
    intervalo = setInterval(siguienteSlide, 8000);
}

// Inicializar: mostrar el primer slide y arrancar el intervalo
mostrarSlide(0);
iniciarIntervalo();

// (Opcional) Detener el intervalo cuando el usuario pasa el ratón por encima
const carruselContainer = document.querySelector('.carrusel-container');
carruselContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalo);
});
carruselContainer.addEventListener('mouseleave', () => {
    iniciarIntervalo();
});