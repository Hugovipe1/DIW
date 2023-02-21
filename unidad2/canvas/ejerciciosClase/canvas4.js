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
        //Rombo
        contexto.fillStyle = '#FF0000';
        contexto.beginPath();
        contexto.moveTo(50,5);
        contexto.lineTo(75,65);
        contexto.lineTo(50,125);
        contexto.lineTo(25,65);
        contexto.fill();

        //Rombo2
        contexto.fillStyle = "rgba(200,50,40,0.9)";
        contexto.beginPath();
        contexto.moveTo(75,5);
        contexto.lineTo(100,65);
        contexto.lineTo(75,125);
        contexto.lineTo(50,65);
        contexto.fill();

    }
});