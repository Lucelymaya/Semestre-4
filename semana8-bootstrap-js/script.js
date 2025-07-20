function mostrarAlerta() {
  alert("¡Gracias por visitar nuestro sitio!");
}

function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  let valido = true;

  // Validar nombre
  if (nombre === "") {
    document.getElementById("errorNombre").textContent = "Por favor ingresa tu nombre.";
    valido = false;
  } else {
    document.getElementById("errorNombre").textContent = "";
  }

  // Validar correo
  if (!correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    document.getElementById("errorCorreo").textContent = "Ingresa un correo válido.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").textContent = "";
  }

  // Validar mensaje
  if (mensaje === "") {
    document.getElementById("errorMensaje").textContent = "Por favor escribe un mensaje.";
    valido = false;
  } else {
    document.getElementById("errorMensaje").textContent = "";
  }

  return valido;
}
