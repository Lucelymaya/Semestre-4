// Botón de alerta
function mostrarAlerta() {
  alert("¡Has hecho clic en el botón de alerta!");
}

// Validación de formulario
document.getElementById("formularioContacto").addEventListener("submit", function (event) {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const mensaje = document.getElementById("mensaje");

  let valido = true;

  [nombre, correo, mensaje].forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("is-invalid");
      valido = false;
    } else {
      campo.classList.remove("is-invalid");
    }
  });

  if (!valido) {
    event.preventDefault();
    event.stopPropagation();
  }
});
