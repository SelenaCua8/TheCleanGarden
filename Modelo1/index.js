
/*FUNCION PARA EL NAVBAR*/ 
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}
/*FUNCION PARA CAMBIO DE IMAGEN*/ 
window.addEventListener('load', function() {
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
let swiperCards = new Swiper(".card__content", {
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
