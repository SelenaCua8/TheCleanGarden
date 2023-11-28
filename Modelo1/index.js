
/*FUNCION PARA EL NAVBAR*/ 
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}
/*FUNCION PARA CAMBIO DE IMAGEN*/ 
/*window.addEventListener('load', function() {
    console.log('El contenido ha cargado');

    var imagenes = [];
    imagenes[0] = '../img/TheCleanGardenimg1.jpg';
    imagenes[1] = '../img/TheCleanGardenimg2.jpg';
    imagenes[2] = '../img/TheCleanGardenimg3.jpg';
    imagenes[3] = '../img/TheCleanGardenimg4.jpg';

    var indiceImagenes = 0;
    var slider = document.images.slider; // Obtén la referencia al elemento con el nombre "slider"

    function cambiarImagenes() {
        slider.src = imagenes[indiceImagenes]; // Usa la variable correcta "indiceImagenes"

        if (indiceImagenes < 3) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, 3000);
});

/*QUE HACEMOS*/
/*=============== SWIPER JS ===============*/
/*let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });


   // Inicializa el carrusel
   var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExample'), {
    interval: 2000,  // Especifica el tiempo de cambio entre diapositivas (en milisegundos)
    wrap: true       // Permite que el carrusel vuelva al principio después de llegar al final
  });


 //CARD CONTENT*/

 document.addEventListener('DOMContentLoaded', function() {
  const productContainer = document.querySelector('.product-container-inner');
  const preBtn = document.querySelector('.pre-btn');
  const nxtBtn = document.querySelector('.nxt-btn');

  let currentIndex = 0;
  const cardWidth = 260; // Ajusta según el ancho de tus tarjetas

  nxtBtn.addEventListener('click', function() {
    if (currentIndex < productContainer.children.length - 3) {
      currentIndex++;
      updateProductContainer();
    }
  });

  preBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      updateProductContainer();
    }
  });

  function updateProductContainer() {
    const translateValue = -currentIndex * cardWidth;
    productContainer.style.transform = `translateX(${translateValue}px)`;
  }
});