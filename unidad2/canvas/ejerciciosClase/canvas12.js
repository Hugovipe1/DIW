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
        //Podemos realizar Transformaciones sobres dibujos de canvas
        //Más habituales: translate, rotate.

        contexto.fillStyle = "#ff0000";
        contexto.fillRect(0,0,150,150);


        //Trasladamos el contexto
        //Importante. Trasladamos TODO el contexto Es decir el punto de 
        //inicio de todo el contexto se traslada del 0,0 al 100,50 
        contexto.translate(100,50);

        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(0,0,150,150);
        
        //save te permite guardar el estado actual de canvas
        //Estos pueden ser restaurados en cualquier momento por restore. 
        //Esta técnica es muy útil para las animaciones para poder intercambiar estas mientras dibujamos de forma dinámica

        contexto.save();

        contexto.fillStyle = "green";
        contexto.fillRect(10,10,100,100);

        //Restauramos el contexto, ahora los rectángulos vuelven a tener el estado que guardamos.
        //En este caso azules con transparencia
        
        contexto.restore();
        contexto.fillRect(200,0,150,150)
    }
});