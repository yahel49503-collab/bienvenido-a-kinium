
// MENU PARA CELULARES

const botonMenu = document.getElementById("botonMenu");

const menu = document.getElementById("menu");

botonMenu.addEventListener("click", function() {

    menu.classList.toggle("activo");

    const abierto = menu.classList.contains("activo");

    botonMenu.textContent = abierto ? "✕" : "☰";

    botonMenu.setAttribute("aria-expanded", abierto);

});


// CERRAR MENU AL ELEGIR UNA OPCION

const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function(enlace) {

    enlace.addEventListener("click", function() {

        menu.classList.remove("activo");

        botonMenu.textContent = "☰";

        botonMenu.setAttribute("aria-expanded", "false");

    });

});


// ANIMACIONES AL BAJAR POR LA PAGINA

const elementos = document.querySelectorAll(".revelar");

const movimientoReducido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !movimientoReducido) {

    const observador = new IntersectionObserver(function(entradas) {

        entradas.forEach(function(entrada) {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("visible");

                observador.unobserve(entrada.target);

            }

        });

    }, {
        threshold: 0.1
    });

    elementos.forEach(function(elemento) {

        observador.observe(elemento);

    });

} else {

    elementos.forEach(function(elemento) {

        elemento.classList.add("visible");

    });

}

