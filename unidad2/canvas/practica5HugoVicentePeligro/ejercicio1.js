/**
 * Ejercicio 1 y 3 fusionados
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

        


        //cabeza
        contexto.beginPath();
        radGrad = contexto.createRadialGradient(300,100,60,130,188,10);
        radGrad.addColorStop(0,"yellow");
        radGrad.addColorStop(0.9, "rgba(255,255,255,0)");
        contexto.fillStyle = radGrad;
        contexto.arc(300,100, 60,Math.PI/180 * -30,Math.PI/180* 30,true);
        contexto.lineTo(300,100);
        contexto.lineTo(353,70);
        contexto.stroke();
        contexto.fill();


        //ojo
        contexto.beginPath();
        contexto.fillStyle = "black";
        contexto.arc(320,70,5,Math.PI/180*360,Math.PI*0, false);
        contexto.fill();

        //brazo
        contexto.beginPath();
        contexto.moveTo(270,100);
        contexto.quadraticCurveTo(240, 120, 250, 150);
        contexto.stroke();

        //pelo
        contexto.beginPath();
        contexto.moveTo(300,40);
        contexto.quadraticCurveTo(305, 25, 308, 40);
        contexto.stroke();

        contexto.beginPath();
        contexto.moveTo(295,40);
        contexto.quadraticCurveTo(300, 25, 303, 40);
        contexto.stroke();

        //mano
        contexto.beginPath();
        contexto.beginPath();
        contexto.fillStyle = "black";
        contexto.arc(250,150,5,Math.PI/180*360,Math.PI*10, false);
        contexto.fill();

        //Piernas
        contexto.beginPath();
        contexto.lineWidth = 2;
        contexto.moveTo(290,160);
        contexto.lineTo(290,175);
        contexto.moveTo(310,159);
        contexto.lineTo(310,175);
        contexto.stroke();


        //Pie izquierdo
        contexto.beginPath();
        contexto.moveTo(290,175);
        contexto.lineTo(280,175);
        contexto.lineTo(280,185);
        contexto.lineTo(290,185);
        contexto.lineTo(290,175);
        contexto.stroke();
        contexto.fill();

        contexto.beginPath();
        contexto.arc(280,180,5,Math.PI/180 *90,Math.PI/180 *270,false);
        contexto.fill();

        //Pie derecho
        contexto.beginPath();
        contexto.moveTo(310,175);
        contexto.lineTo(320,175);
        contexto.lineTo(320,185);
        contexto.lineTo(310,185);
        contexto.lineTo(310,175);
        contexto.stroke();
        contexto.fill();

        contexto.beginPath();
        contexto.arc(320,180,5,Math.PI/180 *90,Math.PI/180 *270,true);
        contexto.fill();


        //Nombre 
        contexto.fillStyle = "black";
        contexto.textAlign = "center";
        contexto.font = "bold 35px Verdana";
        contexto.fillText("PacHomer",299,260);
        
        
        

    }
});