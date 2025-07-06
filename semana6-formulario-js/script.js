const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const contrasena = document.getElementById("contrasena");
const confirmar = document.getElementById("confirmar");
const edad = document.getElementById("edad");
const enviar = document.getElementById("enviar");

const errores = {
    nombre: document.getElementById("error-nombre"),
    correo: document.getElementById("error-correo"),
    contrasena: document.getElementById("error-contrasena"),
    confirmar: document.getElementById("error-confirmar"),
    edad: document.getElementById("error-edad")
};

function validarFormulario() {
    let valido = true;

    // Validar nombre
    if (nombre.value.trim().length < 3) {
        errores.nombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        valido = false;
    } else {
        errores.nombre.textContent = "";
    }

    // Validar correo
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo.value)) {
        errores.correo.textContent = "El formato del correo no es válido.";
        valido = false;
    } else {
        errores.correo.textContent = "";
    }

    // Validar contraseña
    const regexContrasena = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!regexContrasena.test(contrasena.value)) {
        errores.contrasena.textContent = "Mínimo 8 caracteres, un número y un carácter especial.";
        valido = false;
    } else {
        errores.contrasena.textContent = "";
    }

    // Confirmación de contraseña
    if (contrasena.value !== confirmar.value) {
        errores.confirmar.textContent = "Las contraseñas no coinciden.";
        valido = false;
    } else {
        errores.confirmar.textContent = "";
    }

    // Validar edad
    if (parseInt(edad.value) < 18 || edad.value === "") {
        errores.edad.textContent = "Debes ser mayor o igual a 18 años.";
        valido = false;
    } else {
        errores.edad.textContent = "";
    }

    enviar.disabled = !valido;
}

// Agregar eventos de validación en tiempo real
[nombre, correo, contrasena, confirmar, edad].forEach(input => {
    input.addEventListener("input", validarFormulario);
});

// Mostrar mensaje al enviar el formulario
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Formulario enviado con éxito 🎉");
});
