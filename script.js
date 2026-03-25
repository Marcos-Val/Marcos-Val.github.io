function mostrarMensaje() {
    alert("¡Más adelante este botón te va a llevar a GitHub o a descargar tu CV!");
}

// Lógica para el botón de "Volver"
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backToHomeBtn");
    if (backButton) {
        window.addEventListener("scroll", function() {
            // Calculamos el 10% del alto de la ventana visible
            const scrollThreshold = window.innerHeight * 0.10;
            if (window.scrollY > scrollThreshold) {
                backButton.classList.add("mostrar");
            } else {
                backButton.classList.remove("mostrar");
            }
        });
    }
});

/* --- LÓGICA DE ZOOM REAL --- */

function openZoom(imageSrc) {
    const overlay = document.getElementById('zoomOverlay');
    const zoomedImg = document.getElementById('zoomedImage');
    
    zoomedImg.src = imageSrc;
    zoomedImg.classList.remove('super-zoomed'); // Siempre abre en tamaño normal de pantalla
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de la página de fondo
    overlay.style.alignItems = 'center'; 
}

function closeZoom(event) {
    // Solo cierra si hacemos clic en el fondo negro (zoomOverlay), no en la foto
    if (event.target.id === 'zoomOverlay') {
        const overlay = document.getElementById('zoomOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Devuelve el scroll normal
    }
}

function toggleSuperZoom() {
    const img = document.getElementById('zoomedImage');
    const overlay = document.getElementById('zoomOverlay');
    
    if (img.classList.contains('super-zoomed')) {
        // Alejar la imagen
        img.classList.remove('super-zoomed');
        overlay.style.alignItems = 'center';
    } else {
        // Acercar la imagen (Zoom real)
        img.classList.add('super-zoomed');
        overlay.style.alignItems = 'flex-start'; // Alinea arriba para poder scrollear
    }
}

// Asignar los eventos de clic
document.addEventListener("DOMContentLoaded", function() {
    // Clic en la imagen chiquita de la página
    const mainImage = document.querySelector('.poster-image');
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            openZoom(this.src);
        });
    }

    // Clic en la imagen grande dentro del visor negro
    const zoomedImg = document.getElementById('zoomedImage');
    if (zoomedImg) {
        zoomedImg.addEventListener('click', toggleSuperZoom);
    }
});