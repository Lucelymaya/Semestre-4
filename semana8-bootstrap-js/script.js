// Función para mostrar alerta al hacer clic en el botón
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Función para validar el formulario de contacto
function validarFormulario() {
  let nombre = document.getElementById("nombre").value.trim();
  let correo = document.getElementById("correo").value.trim();
  let mensaje = document.getElementById("mensaje").value.trim();

  let errorNombre = document.getElementById("errorNombre");
  let errorCorreo = document.getElementById("errorCorreo");
  let errorMensaje = document.getElementById("errorMensaje");

  // Limpiar mensajes de error
  errorNombre.textContent = "";
  errorCorreo.textContent = "";
  errorMensaje.textContent = "";

  let valido = true;

  if (nombre === "") {
    errorNombre.textContent = "Por favor ingresa tu nombre.";
    valido = false;
  }

  if (correo === "") {
    errorCorreo.textContent = "Por favor ingresa tu correo.";
    valido = false;
  } else if (!/\S+@\S+\.\S+/.test(correo)) {
    errorCorreo.textContent = "Por favor ingresa un correo válido.";
    valido = false;
  }

  if (mensaje === "") {
    errorMensaje.textContent = "Por favor ingresa un mensaje.";
    valido = false;
  }

  return valido; // si es false, no se envía el formulario
}