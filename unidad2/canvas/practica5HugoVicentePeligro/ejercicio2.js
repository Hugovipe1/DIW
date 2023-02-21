/**
 * @author Hugo Vicente Peligro
 */
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
        img.src = './img/paisaje.jpeg';
        img.addEventListener("load", function() {
            //Imagen original
            contexto.drawImage(img,0,0);


            //Foto original recortada en 4 porciones y rescalada.
            contexto.drawImage(img,0,0,400,250,0,500,400,255);
            contexto.drawImage(img,0,250,400,250,0,760,400,255);
            contexto.drawImage(img,400,0,400,250,405,500,400,255);
            contexto.drawImage(img,400,250,400,250,405,760,400,255);

            contexto.drawImage(img,0,1000);
            //Recorte de la imagen y pegamos sobre la imagen original
            contexto.drawImage(img,500,0,350,150,0,1000,300,100);
            contexto.drawImage(img,160,155,175,75,250,1000,225,100);
            

        });
        
        

    }
});