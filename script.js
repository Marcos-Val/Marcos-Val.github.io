// Lógica para el botón de "Volver" y scroll inicial
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backToHomeBtn");
    if (backButton) {
        window.addEventListener("scroll", function() {
            const scrollThreshold = window.innerHeight * 0.10;
            if (window.scrollY > scrollThreshold) {
                backButton.classList.add("mostrar");
            } else {
                backButton.classList.remove("mostrar");
            }
        });
    }

    // ==========================================================
    // LÓGICA DE SCROLL REVEAL (Opción 1)
    // ==========================================================
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                // Una vez revelado, dejamos de observar para ahorrar recursos
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    revealElements.forEach(el => revealObserver.observe(el));
});

/* --- LÓGICA DE ZOOM EXISTENTE (Se mantiene igual) --- */
function openZoom(imageSrc) {
    const overlay = document.getElementById('zoomOverlay');
    const zoomedImg = document.getElementById('zoomedImage');
    if(!overlay || !zoomedImg) return;
    zoomedImg.src = imageSrc;
    zoomedImg.classList.remove('super-zoomed');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    overlay.style.alignItems = 'center'; 
}

function closeZoom(event) {
    if (event.target.id === 'zoomOverlay') {
        const overlay = document.getElementById('zoomOverlay');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function toggleSuperZoom() {
    const img = document.getElementById('zoomedImage');
    const overlay = document.getElementById('zoomOverlay');
    if (img.classList.contains('super-zoomed')) {
        img.classList.remove('super-zoomed');
        overlay.style.alignItems = 'center';
    } else {
        img.classList.add('super-zoomed');
        overlay.style.alignItems = 'flex-start';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.querySelector('.poster-image');
    if (mainImage) {
        mainImage.addEventListener('click', function() {
            openZoom(this.src);
        });
    }
    const zoomedImg = document.getElementById('zoomedImage');
    if (zoomedImg) {
        zoomedImg.addEventListener('click', toggleSuperZoom);
    }
});