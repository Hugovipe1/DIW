function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

window.addEventListener("DOMContentLoaded",function() {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        let img = new Image();
        img.src = 'futbol.webp';
        img.addEventListener("load", function() {
            //Imagen original
            contexto.drawImage(img,0,0);

            // Imagen escalada
            contexto.drawImage(img, 0 , 1400, 400,100);

            // Imagen recortada
            contexto.drawImage(img, 700,0,100,239,0,1600,100,239);

            // Imagen recortada y escalada
            //contexto.drawImage(img, 700,0,370,200,0,1200,670,400);

        });
        

    }
});