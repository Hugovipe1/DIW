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
    let contexto = cargaContextoCanvas('micanvas1');
    if (contexto) {
        //camino relleno sin cierre explícito
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.fill();
    }
    contexto = cargaContextoCanvas('micanvas2');
    if(contexto){

        //camino relleno con cierre excplicito
        contexto.fillStyle = '#F00000'
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.closePath();
        contexto.fill();
    }
    contexto = cargaContextoCanvas('micanvas3');
    if(contexto){

        //camino sin relleno y sin cierre excplicito
        contexto.strokeStyle = '#FFF000'
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.stroke();
    }

    contexto = cargaContextoCanvas('micanvas4');
    if(contexto){

        //camino sin relleno y con cierre excplicito
        contexto.strokeStyle = '#FFA950'
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.closePath();
        contexto.stroke();
    }


    //camino Hugo
    contexto = cargaContextoCanvas('micanvas5');
    if(contexto){

        //camino sin relleno y con cierre excplicito
        contexto.fillStyle = "rgba(200,30,33,0.4)"
        contexto.strokeStyle = '#FFA950'
        contexto.beginPath();
        contexto.moveTo(50,15);
        contexto.lineTo(112,15);
        contexto.lineTo(143,69);
        contexto.lineTo(112,123);
        contexto.lineTo(50,123);
        contexto.lineTo(19,69);
        contexto.closePath();
        contexto.stroke();
        contexto.fill();
    }
});