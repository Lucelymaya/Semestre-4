// Función para mostrar alerta personalizada al hacer clic en el botón
document.getElementById('btnAlerta').addEventListener('click', () => {
  alert('¡Hola! Gracias por visitar mi proyecto Bootstrap con JavaScript.');
});

// Validación del formulario al enviarlo
const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evita envío por defecto

  // Limpia estados anteriores
  const inputs = formulario.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.classList.remove('is-invalid');
  });

  let valido = true;

  // Validar nombre
  const nombre = document.getElementById('nombre');
  if (!nombre.value.trim()) {
    nombre.classList.add('is-invalid');
    valido = false;
  }

  // Validar correo con patrón simple
  const correo = document.getElementById('correo');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo.value.trim())) {
    correo.classList.add('is-invalid');
    valido = false;
  }

  // Validar mensaje
  const mensaje = document.getElementById('mensaje');
  if (!mensaje.value.trim()) {
    mensaje.classList.add('is-invalid');
    valido = false;
  }

  if (valido) {
    alert('Formulario enviado correctamente. ¡Gracias!');
    formulario.reset();
  }
});
