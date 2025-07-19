// Alerta personalizada
function mostrarAlerta() {
  alert("¡Gracias por visitar nuestra página!");
}

// Validación del formulario
document.getElementById("contactoForm").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  let formValido = true;

  if (!nombre.value.trim()) {
    nombre.classList.add("is-invalid");
    formValido = false;
  } else {
    nombre.classList.remove("is-invalid");
  }

  if (!email.value.includes("@")) {
    email.classList.add("is-invalid");
    formValido = false;
  } else {
    email.classList.remove("is-invalid");
  }

  if (!mensaje.value.trim()) {
    mensaje.classList.add("is-invalid");
    formValido = false;
  } else {
    mensaje.classList.remove("is-invalid");
  }

  if (!formValido) {
    event.preventDefault(); // Evita el envío del formulario
  }
});
