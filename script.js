// script.js

// Manejar el envío del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar recargar la página

        // Obtener valores de los campos del formulario
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        // Validar campos básicos
        if (nombre && correo && mensaje) {
            // Simular el envío y mostrar mensaje de confirmación
            alert(`Gracias, ${nombre}. Hemos recibido tu mensaje y te responderemos pronto.`);
            
            // Limpiar formulario
            cont
