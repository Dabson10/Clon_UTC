
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel');
    const slides = document.querySelectorAll('.carruselImg');
    const totalSlides = slides.length;
    const indicadoresContainer = document.createElement('div');
    indicadoresContainer.classList.add('carrusel-indicators-mob');
    carrusel.parentNode.appendChild(indicadoresContainer);

    let currentIndex = 0;

    function updateIndicators() {
        indicadoresContainer.innerHTML = ''; // Limpiar indicadores anteriores
        for (let i = 0; i < totalSlides; i++) {
            const indicador = document.createElement('button');
            indicador.classList.add('indicator-mob');
            if (i === currentIndex) {
                indicador.classList.add('active');
            }
            indicador.addEventListener('click', () => {
                currentIndex = i;
                scrollToSlide(currentIndex);
                updateIndicators();
            });
            indicadoresContainer.appendChild(indicador);
        }
    }

    function scrollToSlide(index) {
        carrusel.scrollTo({
            left: slides[index].offsetLeft,
            behavior: 'smooth'
        });
    }

    carrusel.addEventListener('scroll', () => {
        const scrollPosition = carrusel.scrollLeft;
        const slideWidth = carrusel.offsetWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);

        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateIndicators();
        }
    });

    updateIndicators(); // Inicializar los indicadores
    scrollToSlide(0); // Mostrar el primer slide al cargar
});

// Segundo carrusel 
const carrusel = document.querySelector('.contGenDes');
        const cards = document.querySelectorAll('.contGenCardDesp');
        const dotsContainer = document.querySelector('.dots-container');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function scrollToSlide(index) {
            currentIndex = index;
            const scrollAmount = cards[index].offsetLeft;
            carrusel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            updateDots();
        }

        // carrusel.addEventListener('scroll', () => {
        //     const scrollPosition = carrusel.scrollLeft;
        //     const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta más el margen
        //     const newIndex = Math.round(scrollPosition / cardWidth);

        //     if (newIndex !== currentIndex) {
        //         currentIndex = newIndex;
        //         updateDots();
        //     }
        // });

// Primer carrusel pero para el desktop

const contenedorCarrusel = document.querySelector('.carousel-container');
const slides = contenedorCarrusel.querySelectorAll('.carousel-slide');
const botonesPrevio = contenedorCarrusel.querySelector('.prev-button');
const botonesSiguiente = contenedorCarrusel.querySelector('.next-button');
const numeroDeSlides = slides.length;
let indiceActual = 0;

function mostrarSlide(indice) {
    slides.forEach((slide, i) => {
        slide.style.display = i === indice ? 'block' : 'none';
    });
}

function siguienteSlide() {
    indiceActual++;
    if (indiceActual >= numeroDeSlides) {
        indiceActual = 0;
    }
    mostrarSlide(indiceActual);
}

function previoSlide() {
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = numeroDeSlides - 1;
    }
    mostrarSlide(indiceActual);
}

botonesSiguiente.addEventListener('click', siguienteSlide);
botonesPrevio.addEventListener('click', previoSlide);

// Mostrar el primer slide al cargar la página
mostrarSlide(indiceActual);

// abrir el hover de submenu

document.addEventListener('DOMContentLoaded', function() {
    const subCabecera = document.getElementById('subCabecera');
    const subMenu = document.getElementById('subMenu');
    const botonesSubmenu = subCabecera.querySelectorAll('.btnOpcDesp');
    const seccionesSubmenu = subMenu.querySelectorAll('.adminSub');

    // Ocultar todos los submenús al inicio
    seccionesSubmenu.forEach(seccion => {
        seccion.style.display = 'none';
    });

    botonesSubmenu.forEach(boton => {
        boton.addEventListener('mouseenter', function() {
            const submenuId = this.dataset.submenu;
            // Ocultar todos los submenús
            seccionesSubmenu.forEach(seccion => {
                seccion.style.display = 'none';
            });
            // Mostrar el submenú correspondiente
            const submenuMostrar = document.getElementById(submenuId);
            if (submenuMostrar) {
                submenuMostrar.style.display = 'block';
            }
        });

        boton.addEventListener('mouseleave', function() {
            // Ocultar el submenú cuando el mouse sale del botón
            const submenuId = this.dataset.submenu;
            const submenuOcultar = document.getElementById(submenuId);
            if (submenuOcultar && !submenuOcultar.matches(':hover')) {
                submenuOcultar.style.display = 'none';
            }
        });
    });

    subMenu.addEventListener('mouseleave', function() {
        // Ocultar el submenú cuando el mouse sale del contenedor del submenú
        seccionesSubmenu.forEach(seccion => {
            seccion.style.display = 'none';
        });
    });
});



// Abrir cajas de oferta educativa

// Obtenemos referencias a los elementos del DOM
const botones1 = document.getElementById('btn1');
const botones2 = document.getElementById('btn2');
const cont1 = document.getElementById('cont1');
const cont2 = document.getElementById('cont2');

// Evento para el primer botón
botones1.addEventListener('click', () => {
    // Activar o desactivar el primer contenedor
    cont1.classList.toggle('active');
    // Si el segundo contenedor está activo, desactivarlo
    if (cont2.classList.contains('active')) {
        cont2.classList.remove('active');
    }
});

 // Evento para el segundo botón
botones2.addEventListener('click', () => {
    // Activar o desactivar el segundo contenedor
    cont2.classList.toggle('active');
    // Si el primer contenedor está activo, desactivarlo
    if (cont1.classList.contains('active')) {
        cont1.classList.remove('active');
    }
});
