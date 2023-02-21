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
        let x = 10;
        let y = 10;
        let width = 200;
        let height = 200;
        /*
        contexto.fillStyle = "#ff0000";
        contexto.fillRect(x,y,width,height);

        contexto.rotate((Math.PI/180) * 30);
        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(x,y,width,height);

        contexto.rotate((Math.PI/180)* 30);
        

        x = 310;
        y = 10
        */

        let centro_x = x + 0.5 * width;
        let centro_y = y + 0.5 * height;

        contexto.fillStyle = "#ff0000";
        contexto.fillRect(x,y,width,height);

        contexto.translate(centro_x, centro_y);
        contexto.rotate((Math.PI/180)* 45);
        contexto.translate(-centro_x, -centro_y);

        contexto.fillStyle = "rgba(0,0,255,0.5)";
        contexto.fillRect(x,y,width,height);
    
    }
});