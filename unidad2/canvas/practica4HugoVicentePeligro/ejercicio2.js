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

        // Cuadrado principal
        contexto.strokeStyle = "#000000";
        contexto.beginPath();
        contexto.moveTo(50,100);
        contexto.lineTo(150,100);
        contexto.lineTo(150,200);
        contexto.lineTo(50,200);
        
        contexto.closePath();
        contexto.stroke();

        contexto.strokeStyle = "#000000";
        contexto.beginPath();
        contexto.moveTo(50,100);
        contexto.lineTo(80,55);
        contexto.lineTo(180,55)
        contexto.lineTo(150,100);
        
        contexto.stroke();


        contexto.strokeStyle = "#000000";
        contexto.beginPath();
        contexto.moveTo(150,200);
        contexto.lineTo(180,150);
        contexto.lineTo(180,55);
        
        
        contexto.stroke();

        contexto.strokeStyle = "#000000";
        contexto.beginPath();
        contexto.moveTo(50,200);
        contexto.setLineDash([10,5])
        contexto.lineTo(80,150);
        contexto.lineTo(180,150);
        contexto.moveTo(80,150);
        contexto.lineTo(80,55);
        
        
        contexto.stroke();
    }

    

    
});