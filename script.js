// Esperar a que el documento HTML esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const botonApoyar = document.getElementById("btn-unirse");

    if (botonApoyar) {
        botonApoyar.addEventListener("click", () => {
            alert("¡Gracias por tu apoyo! Te has registrado exitosamente en la campaña.");
            botonApoyar.textContent = "¡Apoyo Registrado!";
            botonApoyar.style.backgroundColor = "#2563eb";
        });
    }
});