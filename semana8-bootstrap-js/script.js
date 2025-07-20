// Función para mostrar alerta personalizada
function mostrarAlerta() {
  alert("¡Hola! Gracias por visitar nuestro sitio.");
}

// Validación dinámica del formulario
function validarFormulario() {
  // Obtener valores
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Elementos para mostrar errores
  const errorNombre = document.getElementById("errorNombre");
  const errorCorreo = document.getElementById("errorCorreo");
  const errorMensaje = document.getElementById("errorMensaje");

  // Limpiar mensajes previos
  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorMensaje.textContent = "";

  let valido = true;

  // Validar nombre
  if (nombre === "") {
    errorNombre.textContent = "Por favor, ingresa tu nombre.";
    valido = false;
  }

  // Validar correo (con regex básico)
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === "") {
    errorCorreo.textContent = "Por favor, ingresa tu correo electrónico.";
    valido = false;
  } else if (!regexCorreo.test(correo)) {
    errorCorreo.textContent = "Por favor, ingresa un correo válido.";
    valido = false;
  }

  // Validar mensaje
  if (mensaje === "") {
    errorMensaje.textContent = "Por favor, escribe un mensaje.";
    valido = false;
  }

  // Si todo está bien, se puede enviar el formulario (puedes añadir aquí código para enviarlo)
  return valido;
}
