
// Carousel

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselItems = document.querySelectorAll('.carousel li');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentIndex = 0;
  const slideInterval = 4000; //3 segundos para intervalo

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    updateCarouselPosition();
  }

  function updateCarouselPosition() {
    const carouselWidth = carousel.offsetWidth;
    const newPosition = -currentIndex * carouselWidth;
    carousel.style.transform = `translateX(${newPosition}px)`;

    // Ocultar todos los textos de las imágenes
    const captions = document.querySelectorAll('.carousel-caption');
    captions.forEach(caption => caption.style.display = 'none');

    // Mostrar solo el texto de la imagen actual
    const currentSlide = carouselItems[currentIndex];
    const currentCaption = currentSlide.querySelector('.carousel-caption');
    currentCaption.style.display = 'block';
  }

  let slideTimer = setInterval(nextSlide, slideInterval);

  carousel.addEventListener('mouseenter', function() {
    clearInterval(slideTimer);
  });

  carousel.addEventListener('mouseleave', function() {
    slideTimer = setInterval(nextSlide, slideInterval);
  });

  prevButton.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = carouselItems.length - 1;
    }
    updateCarouselPosition();
  });

  nextButton.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex >= carouselItems.length) {
      currentIndex = 0;
    }
    updateCarouselPosition();
  });

  updateCarouselPosition();
});


// Menu desplegable con media query

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.menu-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  });
});


//Perfil sobreponerse con click en icono - curriculum

  const floatingIcon = document.querySelector('.floating-icon');
  const content = document.querySelector('.content');
  const container = document.querySelector('.container')
  const photo = document.querySelector('.item-1')
  const perfil = document.querySelector('.item-3')
  const aptitudes = document.querySelector('.item-4')

  let isContentVisible = true;

  floatingIcon.addEventListener('click', function() {
    if (isContentVisible) {
      content.style.display = 'flex'
      content.style.position = 'absolute'
      content.style.width = '40%';
      content.style.height = '140%'
      perfil.style.display = 'none'
      isContentVisible = false;
    } else {
      content.style.display = 'none'
      content.style.position = 'relative'
      content.style.width = '0%';
      content.style.height = '0%';
      isContentVisible = true;
    
    }
  });

   window.addEventListener('resize', function() {
   if (window.innerWidth > 900) {
     container.style.gridTemplateColumns = '3fr 9fr';
     content.style.position = 'relative';
     content.style.display = 'flex'
     content.style.width = '98%';
     content.style.height = '100%';
     perfil.style.display = 'flex'
    } else {
     container.style.gridTemplateColumns = '1fr';
     content.style.display = 'none'
     isContentVisible = true;
    }
  });

  //Perfil sobreponerse con click en icono - brochure

  const floatingIcon2 = document.querySelector('.floating-icon');
  const content_brochure = document.querySelector('.content_brochure');
  const container_2 = document.querySelector('.container_2')

  let isContentVisible2 = true;

  floatingIcon.addEventListener('click', function() {
    if (isContentVisible2) {
      content_brochure.style.display = 'flex'
      content_brochure.style.position = 'absolute'
      content_brochure.style.width = '40%';
      content_brochure.style.height = '100%'
      isContentVisible2 = false;
    } else {
      content_brochure.style.display = 'none'
      content_brochure.style.position = 'relative'
      content_brochure.style.width = '0%';
      content_brochure.style.height = '0%';
      isContentVisible2 = true;
    
    }
  });

   window.addEventListener('resize', function() {
   if (window.innerWidth > 900) {
      container_2.style.gridTemplateColumns = '1fr';
      content_brochure.style.display = 'none'
    } else {
      // container_2.style.gridTemplateColumns = '1fr';
      content_brochure.style.display = 'flex'
      isContentVisible2 = true;
    }
  });


