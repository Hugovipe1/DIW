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

        // Cuadrado principal
        contexto.strokeStyle = "#000000";
        contexto.lineWidth = 2;
        contexto.beginPath();
        contexto.moveTo(150,0);
        contexto.lineTo(150,40);
        contexto.lineTo(147,30);
        contexto.moveTo(150,40);
        contexto.lineTo(153,30);
        contexto.stroke();

        
    }

    

    
});
