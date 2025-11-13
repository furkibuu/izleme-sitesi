document.addEventListener('DOMContentLoaded', () => {
    
    
    initSearchFilter();

    
    initCarousels();

});



function initSearchFilter() {
    const searchInput = document.getElementById('search-input');
    const allContentRows = document.querySelectorAll('.content-row');
    const allItemCards = document.querySelectorAll('.item-card');
    const noResultsMessage = document.getElementById('no-results');

  
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let totalVisibleCards = 0;

        
        allItemCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.classList.remove('hidden');
                totalVisibleCards++;
            } else {
                card.classList.add('hidden');
            }
        });

      
        allContentRows.forEach(row => {
            const visibleCardsInRow = row.querySelectorAll('.item-card:not(.hidden)').length;
            if (visibleCardsInRow === 0) {
                row.classList.add('hidden'); 
            } else {
                row.classList.remove('hidden'); 
            }
        });

   
        if (totalVisibleCards === 0) {
            noResultsMessage.classList.remove('hidden'); 
        } else {
            noResultsMessage.classList.add('hidden');
        }
    });
}



function initCarousels() {
    const contentRows = document.querySelectorAll('.content-row');

    contentRows.forEach(row => {
        const carousel = row.querySelector('.item-carousel');
        const prevBtn = row.querySelector('.carousel-btn.prev');
        const nextBtn = row.querySelector('.carousel-btn.next');

        if (!carousel || !prevBtn || !nextBtn) return; 
        
        prevBtn.addEventListener('click', () => {
        
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
           
            const scrollAmount = carousel.clientWidth * 0.8;
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

      
        carousel.addEventListener('scroll', () => {
            updateCarouselButtonState(carousel, prevBtn, nextBtn);
        });

   
        updateCarouselButtonState(carousel, prevBtn, nextBtn);
    });
}

/**

 * @param {HTMLElement} carousel 
 * @param {HTMLElement} prevBtn 
 * @param {HTMLElement} nextBtn 
 */
function updateCarouselButtonState(carousel, prevBtn, nextBtn) {
    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth; 
    const clientWidth = carousel.clientWidth; 

  
    prevBtn.disabled = scrollLeft < 10;

   
    nextBtn.disabled = (scrollLeft + clientWidth) >= (scrollWidth - 10);
}