
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

 //CLIENTES
 var timer = 4000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','25%');
	$("#c > li").eq(i + 2).addClass('active').css('left','50%');
	$("#c > li").eq(i + 3).addClass('active').css('left','75%');
 

	setInterval(function(){ 

		$(".c > li").removeClass('active');

		$(".c > li").eq(i).css('transition-delay','0.25s');
		$(".c > li").eq(i + 1).css('transition-delay','0.5s');
		$(".c > li").eq(i + 2).css('transition-delay','0.75s');
		$(".c > li").eq(i + 3).css('transition-delay','1s');

		if (i < max-4) {
			i = i+4; 
		}

		else { 
			i = 0; 
		}  

		$(".c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.25s');
		$(".c > li").eq(i + 1).css('left','25%').addClass('active').css('transition-delay','1.5s');
		$(".c > li").eq(i + 2).css('left','50%').addClass('active').css('transition-delay','1.75s');
		$(".c > li").eq(i + 3).css('left','75%').addClass('active').css('transition-delay','2s');
	
	}, timer);
 