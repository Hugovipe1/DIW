/**
 * @author Hugo Vicente Peligro
 */

document.addEventListener("DOMContentLoaded", function() {
    let div = document.querySelectorAll(".pulsar");
    for (const iterator of div) {
        iterator.addEventListener("click", function() {
            window.open("paginaReserva.html");
        });
    }
});