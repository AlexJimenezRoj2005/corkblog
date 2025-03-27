// Galería interactiva
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let autoSlide;
    
    // Función para actualizar la galería
    function updateGallery() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Pausar todos los videos y reiniciarlos
        document.querySelectorAll('.gallery-video').forEach(video => {
            video.pause();
            video.currentTime = 0;
        });
        
        // Manejar el video actual
        const currentSlide = slides[currentIndex];
        const video = currentSlide.querySelector('video');
        if (video) {
            // Intentar reproducción automática (puede ser bloqueada por el navegador)
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Mostrar controles si el autoplay falla
                    video.controls = true;
                });
            }
        }
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Evento para botón siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateGallery();
        resetAutoSlide();
    });
    
    // Evento para botón anterior
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateGallery();
        resetAutoSlide();
    });
    
    // Eventos para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateGallery();
            resetAutoSlide();
        });
    });
    
    // Función para reiniciar el auto-desplazamiento
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = startAutoSlide();
    }
    
    // Función para iniciar el auto-desplazamiento
    function startAutoSlide() {
        return setInterval(function() {
            const currentSlide = slides[currentIndex];
            const video = currentSlide.querySelector('video');
            
            if (!video || video.ended || video.paused) {
                currentIndex = (currentIndex + 1) % slideCount;
                updateGallery();
            }
        }, 5000);
    }
    
    // Efecto hover para pausar el auto-desplazamiento
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.addEventListener('mouseenter', function() {
        clearInterval(autoSlide);
    });
    
    galleryContainer.addEventListener('mouseleave', function() {
        autoSlide = startAutoSlide();
    });
    
    // Iniciar auto-desplazamiento
    autoSlide = startAutoSlide();
});