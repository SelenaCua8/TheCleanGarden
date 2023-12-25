//NAVBAR

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
    imagenes[0] = "./img/PlazaBlanffComuna10(7).jpg";
    imagenes[1] = './img/hombre-granja-cosiendo-hierba-cortacesped.jpg';
    imagenes[2] = './img/pareja-hablando-mientras-examina-plantas-tableta-digital-huerto.jpg';
    imagenes[3] = './img/PlazaEjercitoDeLosAndesComuna10(1).jpg';

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
})