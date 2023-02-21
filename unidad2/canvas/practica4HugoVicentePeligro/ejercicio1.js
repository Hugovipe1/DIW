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

let x = 0;
let y = 0;
let flag = 0;
let velocidad = 2;
const altura = 50;
const anchura = 50;
window.addEventListener("DOMContentLoaded",function() {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
        drawDown();
    }

    
});

function drawDown() {
    let contexto = cargaContextoCanvas('micanvas');
    contexto.clearRect(x,y,micanvas.width,micanvas.height);
    

    if(y < 200 && x == 0){
        y += velocidad;
    }
    if(y ==200 && x == 0){
        flag = 1;
        
    }
    if(flag ==1){
        drawRight();
    }
    
    if(flag == 2){
        drawUp();
    }
    if(flag == 3){
        drawLeft();
    }
    
    contexto.fillStyle = "rgba(255,0,0,1)";
    contexto.fillRect(x,y,altura,anchura);

    window.requestAnimationFrame(drawDown);
}

function drawRight() {
    let contexto = cargaContextoCanvas('micanvas');
    contexto.clearRect(x,y,micanvas.width,micanvas.height);
    flag = 1;
    x += velocidad;

    if(x == 200 ){
        drawUp();
    }

    contexto.fillStyle = "rgba(255,0,0,1)";
    contexto.fillRect(x,y,altura + 10,anchura + 10);

    
}
function drawUp() {
    let contexto = cargaContextoCanvas('micanvas');
    contexto.clearRect(x,y,micanvas.width,micanvas.height);
    flag = 2
    
    y -= velocidad;

    if(y == 0){
        drawLeft();
    }

    contexto.fillStyle = "rgba(255,0,0,1)";
    contexto.fillRect(x,y,altura + 20,anchura + 20);

    
}

function drawLeft() {
    let contexto = cargaContextoCanvas('micanvas');
    contexto.clearRect(x,y,micanvas.width,micanvas.height);
    flag = 3;
    
    x -= velocidad;

    if(x == 0){
        flag = 0;
    }

    contexto.fillStyle = "rgba(255,0,0,1)";
    contexto.fillRect(x,y,altura + 30,anchura + 30);

    
}