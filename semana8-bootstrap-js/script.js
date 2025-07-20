// Mostrar alerta cuando el usuario hace clic en el botón
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  let valido = true;

  // Limpiar errores anteriores
  document.getElementById("errorNombre").textContent = "";
  document.getElementById("errorCorreo").textContent = "";
  document.getElementById("errorMensaje").textContent = "";

  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "El nombre es obligatorio.";
    valido = false;
  }

  if (correo === "") {
    document.getElementById("errorCorreo").textContent = "El correo electrónico es obligatorio.";
    valido = false;
  } else if (!/\S+@\S+\.\S+/.test(correo)) {
    document.getElementById("errorCorreo").textContent = "Ingresa un correo válido.";
    valido = false;
  }

  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "El mensaje es obligatorio.";
    valido = false;
  }

  return valido;
}
