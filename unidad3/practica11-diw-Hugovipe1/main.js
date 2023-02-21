/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {
    let ul1 = document.getElementById("ul");
    document.getElementById("enlace").addEventListener("click", function(e) {
        e.preventDefault();
        if (ul1.style.display ==  "block") {
            ul1.style.display = "none";
        }
        else{
            ul1.style.display = "block";
        }
        
    });

    document.getElementById("boton").addEventListener("click", function() {
        window.open("./formulario.html","","");
    });
});