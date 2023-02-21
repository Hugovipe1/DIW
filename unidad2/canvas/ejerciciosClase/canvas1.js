//Comprobamos que encontramos un elemento y podemos extraer su contexto con getContext(), que indica contabilidad con canvas.

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
    let contexto = cargaContextoCanvas('miCanvas');
    if(contexto){
        //contexto.fillStyle = '#6634A2';
        //contexto.fillRect(100,100,50,50);
        //contexto.fillStyle = rgba(200,100,60,0.5);
        //contexto.fillRect(10,10,130,120);
        contexto.fillStyle = 'rgba(255,0,0,0.5)';
        for(i = 0; i<=500; i +=10){
            contexto.fillRect(i,i,10,10);
        }
        contexto.fillStyle = 'rgba(70%,50%,70%,0.5)';
        for(i = 500; i>=0; i -=10){
            contexto.fillRect(i,500-i,10,10);
        }

        contexto.strokeStyle = 'rgba(100,255,40,0.8)';
        for(i = 0; i<=500; i +=20){
            contexto.strokeRect(250,i,10,10);
        }

        contexto.strokeStyle = 'rgba(50,20,80,0.8)';
        for(i = 0; i<=500; i +=20){
            contexto.strokeRect(i,250,10,10);
        }

        document.getElementById('borrar').addEventListener("click",borrar_parcial);
    }
});

function borrar_parcial() {
    let contexto = cargaContextoCanvas("miCanvas");
    if (contexto) {
        contexto.clearRect(150,150,200,200);
    }
}