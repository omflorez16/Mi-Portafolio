// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contacto__formulario');
    
    // Configuración de EmailJS (con tus claves obtenidas)
    const serviceID = 'service_jpsv7gn';
    const templateID = 'template_qs2tckj';
    const userID = 'user_4EYFqPpTxjbm4s1m-';
    
    // Evento de envío del formulario
    form.addEventListener('submit', function (e) {
        // Prevenir que el formulario se envíe antes de la validación
        e.preventDefault();
        
        // Obtener los valores de los campos del formulario
        const nombre = document.querySelector('.contacto__campo[type="text"]:nth-of-type(1)').value;
        const correo = document.querySelector('.contacto__campo[type="email"]').value;
        const asunto = document.querySelector('.contacto__campo[type="text"]:nth-of-type(2)').value;
        const mensaje = document.querySelector('.contacto__campo--textarea').value;

        // Validar que los campos no estén vacíos
        if (nombre === "" || correo === "" || asunto === "" || mensaje === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Validar el formato del correo electrónico
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(correo)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Enviar el correo utilizando EmailJS
        emailjs.sendForm(serviceID, templateID, form, userID)
            .then(function(response) {
                alert('¡Mensaje enviado con éxito!');
                form.reset(); // Limpiar el formulario después del envío
            }, function(error) {
                alert('Error al enviar el mensaje. Intenta de nuevo.');
                console.log(error);
            });
    });
});
