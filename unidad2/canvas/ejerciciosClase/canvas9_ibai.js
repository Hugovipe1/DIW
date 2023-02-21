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
        let bisho_pelao  = new Image();
        img.src = 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-300x300.png';
        img.addEventListener("load", function() {
            //Imagen original
            contexto.drawImage(img,0,0);

            // Imagen escalada
            //contexto.drawImage(img, 0 , 400, 200,100);

            // Imagen recortada y escalada
            contexto.drawImage(img, 0,0,200,239,0,400,200,239);

            // Imagen recortada y escalada
            //contexto.drawImage(img, 700,0,370,200,0,1200,670,400);

        });

        bisho_pelao.src = "https://preview.redd.it/s2siwcwllz671.jpg?auto=webp&s=facff3735845b360779c27a12cb474c49b48aff2";
        bisho_pelao.addEventListener("load", function() {
            //Imagen original
            //contexto.drawImage(bisho_pelao,0,0);

            // Imagen escalada
            //contexto.drawImage(img, 0 , 400, 200,100);

            // Imagen recortada y escalada
            contexto.drawImage(bisho_pelao, 20,0,150,180,30,0,200,239);

            // Imagen recortada y escalada
            //contexto.drawImage(img, 700,0,370,200,0,1200,670,400);
        })
        

    }
});