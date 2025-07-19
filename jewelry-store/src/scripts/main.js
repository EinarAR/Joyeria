document.addEventListener('DOMContentLoaded', function() {
    // Menú desplegable para categorías en móvil
    const categoryNav = document.querySelector('.categories-nav');
    const categoryToggle = document.createElement('div');
    categoryToggle.className = 'category-toggle';
    categoryToggle.innerHTML = '<i class="fas fa-bars"></i> Categorías';
    
    // Solo agregar el toggle en móvil
    function setupMobileMenu() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.category-toggle')) {
                categoryNav.insertBefore(categoryToggle, categoryNav.firstChild);
                const categoryLinks = document.querySelector('.category-links');
                categoryLinks.style.display = 'none';
                
                categoryToggle.addEventListener('click', function() {
                    categoryLinks.style.display = 
                        categoryLinks.style.display === 'flex' ? 'none' : 'flex';
                });
            }
        } else {
            const toggle = document.querySelector('.category-toggle');
            if (toggle) {
                toggle.remove();
                document.querySelector('.category-links').style.display = 'flex';
            }
        }
    }
    
    // Ejecutar al cargar y al cambiar tamaño
    setupMobileMenu();
    window.addEventListener('resize', setupMobileMenu);
    
    // Efecto hover para categorías
    const categoryItems = document.querySelectorAll('.category-links li a');
    categoryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#d4af37';
            this.style.fontWeight = '600';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.color = '#333';
            this.style.fontWeight = '500';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const carousel = document.querySelector('.products-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const productCards = document.querySelectorAll('.product-card');
    const cardWidth = productCards[0].offsetWidth + 20; // Ancho + gap

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth * 3, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth * 3, behavior: 'smooth' });
    });

    // Opcional: Deshabilitar botones al llegar a los extremos
    carousel.addEventListener('scroll', () => {
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        prevBtn.style.display = carousel.scrollLeft <= 10 ? 'none' : 'flex';
        nextBtn.style.display = carousel.scrollLeft >= maxScroll - 10 ? 'none' : 'flex';
    });

    // Inicializar visibilidad de botones
    carousel.dispatchEvent(new Event('scroll'));
});
