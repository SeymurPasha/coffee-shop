
window.addEventListener('load', () => {
    
document.querySelector('.cup').classList.add('hide') 
document.querySelector('.cup-handle').classList.add('hide') 
    
})


const swiper = new Swiper('.swiper-container', {
        // Optional parameters

        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
