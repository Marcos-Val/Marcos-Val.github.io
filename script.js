function mostrarMensaje() {
    alert("¡Más adelante este botón te va a llevar a GitHub o a descargar tu CV!");
}

// Esperar a que cargue todo el documento
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleccionamos el botón
    const backButton = document.getElementById("backToHomeBtn");

    // Si el botón existe en la página actual, activamos el detector de scroll
    if (backButton) {
        window.addEventListener("scroll", function() {
            // Calculamos el 10% del alto de la ventana visible
            const scrollThreshold = window.innerHeight * 0.10;

            // Si scrolleamos más allá de ese 10%
            if (window.scrollY > scrollThreshold) {
                backButton.classList.add("mostrar");
            } else {
                backButton.classList.remove("mostrar");
            }
        });
    }
});