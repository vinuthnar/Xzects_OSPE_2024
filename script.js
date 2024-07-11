document.addEventListener('DOMContentLoaded', function () {
    const desktopViewButton = document.getElementById('desktop-view');
    const tabletViewButton = document.getElementById('tablet-view');
    const mobileViewButton = document.getElementById('mobile-view');
    const body = document.body;

    desktopViewButton.addEventListener('click', function () {
        body.style.width = '100%';
    });

    tabletViewButton.addEventListener('click', function () {
        body.style.width = '768px';
        body.style.margin = '0 auto';
    });

    mobileViewButton.addEventListener('click', function () {
        body.style.width = '480px';
        body.style.margin = '0 auto';
    });
});





document.addEventListener("DOMContentLoaded", function() {
    // Adjust grid layout
    function adjustGrid() {
      const portfolioGrid = document.querySelector('.portfolio-grid');
      const items = document.querySelectorAll('.portfolio-item');
      let columns = 1;
      
      if (window.innerWidth >= 640) columns = 2;
      if (window.innerWidth >= 768) columns = 3;
      if (window.innerWidth >= 1024) columns = 4;
  
      portfolioGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    }
  
    adjustGrid();
    window.addEventListener('resize', adjustGrid);
  
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Responsive menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  
    // Close menu on link click (for single page nav)
    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
      });
    });
  });
  

var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20, /* Adjusted space between slides */
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  