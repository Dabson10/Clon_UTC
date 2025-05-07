/*Se crean variables para poder almacernar el valor del contenedor*/
const menu = document.getElementById('opcMenu');
const despl = document.getElementById('subCabecera');

/*Se puede dar la ocacion en donde el usuario presione el menu y a su ves el submenu
y al momento de cerar solamente cierre el menu dejando el submenu, la siguiente variable 
hace que se le asigne un valo vacio en vez de un active.*/
const limpiarSub = document.getElementById('subMenu');

/*Si se hace lo anterior, tambien se tiene que restaurar la parte de los botones
que se ocultaron al momento de abrir el submenu, para eso es la siguiente variable */
const restBtn = document.getElementById('opcHead');
const restAdmis = document.getElementById('admisionSubM');
const restOfert = document.getElementById('ofertSubM')
const restNoso = document.getElementById('nosotrosSubM')
const restCom = document.getElementById('comuniSubM')

/*La siguiente funcionalidad es para cuando se presione el botón del menú desplegable*/
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    despl.classList.toggle('active');

    if (limpiarSub.classList.contains('active')) {
        limpiarSub.classList.remove('active');
        restBtn.classList.toggle('active');
    } else if (restAdmis.classList.contains('active')) {
        restAdmis.classList.remove('active');
        restOfert.classList.remove('active');
        restNoso.classList.remove('active');
    }
    if (restAdmis.classList.contains('active')) {
        restAdmis.classList.remove('active');
    }
    if (restOfert.classList.contains('active')) {
        restOfert.classList.remove('active');
    }
    if (restNoso.classList.contains('active')) {
        restNoso.classList.remove('active');
    }
    if(restCom.classList.contains('active')){
        restCom.classList.remove('active')
    }
});


// Los siguientes bloques de codigo sera para la lista de opciones en el menu desplegable

/*La siguiente funcionalidad es para cuando presionen el boton de admisiones que 
se encuentra en el menu desplegable ejecutado anteriormente*/
const admision = document.getElementById('btnAdmisionesF');

admision.addEventListener('click', () => {
    admision.classList.toggle('active');
    limpiarSub.classList.toggle('active');  // subMenu
    restAdmis.classList.toggle('active');   // admisiones
    restBtn.classList.toggle('active');     // cleanMenu
});


/*La siguiente funcionalidad es para la oferta educativa, activara el sub menu de esta seccion */

const oferta = document.getElementById('btnOfertaEdu')


oferta.addEventListener('click',() =>{
    oferta.classList.toggle('active')
    restOfert.classList.toggle('active')
    limpiarSub.classList.toggle('active');  // subMenu
    restBtn.classList.toggle('active');     // cleanMenu

})

/*El siguiente bloque de codigo es para activar el submenu de nosotros */

const nosotros = document.getElementById('btnNosotros');

nosotros.addEventListener('click', () => {
    nosotros.classList.toggle('active')
    restNoso.classList.toggle('active')
    limpiarSub.classList.toggle('active');  // subMenu
    restBtn.classList.toggle('active');     // cleanMenu
})

/*El siguiente bloque es para que se muestre el submenu de comunidad UTC */
const comunidad = document.getElementById('btnComuni')


comunidad.addEventListener('click', () =>{
    comunidad.classList.toggle('active')
    restCom.classList.toggle('active')
    limpiarSub.classList.toggle('active');  // subMenu
    restBtn.classList.toggle('active');     // cleanMenu
})

/*En la parte de los botones de regreso si o si se tiene que hacer un bloque de  evento click para 
cada boton de regreso que en este caso serian mas 4, 4 del submenu y otros mas 
ya que el submenu tambien tiene ciertos menus desplegables que son similares al submenu*/

/*La siguiente funcionalidad es para cuando presionen el boton de regreso pero al submenu po parte
de admisiones*/
// Valor del boton y el de activar la seccion desactivada
const btnRegre = document.getElementById('btnRegresar');

btnRegre.addEventListener('click', () => {
    if (restAdmis.classList.contains('active')) {
        restAdmis.classList.remove('active');//Elimina o oculta la seccion
        restBtn.classList.toggle('active'); //Restaura el menu
        limpiarSub.classList.remove('active'); //Submenu
    }else{
        restAdmis.classList.remove('active');
        restBtn.classList.toggle('active');
        limpiarSub.classList.remove('active');
    }
});

/*Boton del submenu oferta educativa, que regresa al menu desplegable */
const btnRegreMenu = document.getElementById('btnRegresar1');

btnRegreMenu.addEventListener('click',() => {
    if(restOfert.classList.contains('active')){
        restOfert.classList.remove('active')//Oculta exactamente la seccion del submenu
        restBtn.classList.toggle('active')//Restaura el menu
        limpiarSub.classList.toggle('active')//limpia el submenu o lo oculta
    }else{
        restOfert.classList.remove('active');
        restBtn.classList.toggle('active');
        limpiarSub.classList.remove('active');
    }
})

/*Boton para regresar de la seccion nosotros */
const btnNosoMenu = document.getElementById('btnRegresar2')

btnNosoMenu.addEventListener('click', () => {
    if(restNoso.classList.contains('active')){
        restNoso.classList.remove('active')//Oculta exactamente la seccion del submenu
        restBtn.classList.toggle('active')//Restaura el menu
        limpiarSub.classList.toggle('active')//limpia el submenu o lo oculta
    }else{
        restNoso.classList.remove('active');
        restBtn.classList.toggle('active');
        limpiarSub.classList.remove('active');
    }
})

/*El siguiente bloque de codigo es para regresar del submenu comunidad UTC al menu */

const btnComMenu = document.getElementById('btnRegresar3')

btnComMenu.addEventListener('click', () =>{
    if(restCom.classList.contains('active')){
        restCom.classList.remove('active')//Oculta exactamente la seccion del submenu
        restBtn.classList.toggle('active')//Restaura el menu
        limpiarSub.classList.toggle('active')//limpia el submenu o lo oculta
    }else{
        restCom.classList.remove('active');
        restBtn.classList.toggle('active');
        limpiarSub.classList.remove('active');
    }
})
/*-----------------------------------------------------------------------------------*/
// Aqui termina la seccion de la cabecera y pasamos a el carrusel de imagenes 

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

        carrusel.addEventListener('scroll', () => {
            const scrollPosition = carrusel.scrollLeft;
            const cardWidth = cards[0].offsetWidth + 20; // Ancho de la tarjeta más el margen
            const newIndex = Math.round(scrollPosition / cardWidth);

            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateDots();
            }
        });

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

// fIRMA DAVID
console.log('Shorty, tú controla mi algoritmo')