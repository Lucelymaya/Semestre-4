// script.js

// Función para mostrar alerta personalizada
document.getElementById('btnAlerta').addEventListener('click', function() {
  alert('¡Hola! Has hecho clic en el botón de alerta.');
});

// Validación del formulario
const formulario = document.getElementById('formularioContacto');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar envío automático para validar

  // Campos del formulario
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const mensaje = document.getElementById('mensaje');

  let valido = true;

  // Validar nombre
  if (nombre.value.trim() === '') {
    nombre.classList.add('is-invalid');
    valido = false;
  } else {
    nombre.classList.remove('is-invalid');
  }

  // Validar correo (simple)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo.value.trim())) {
    correo.classList.add('is-invalid');
    valido = false;
  } else {
    correo.classList.remove('is-invalid');
  }

  // Validar mensaje
  if (mensaje.value.trim() === '') {
    mensaje.classList.add('is-invalid');
    valido = false;
  } else {
    mensaje.classList.remove('is-invalid');
  }

  // Si todo es válido, enviar (o simular envío)
  if (valido) {
    alert('Formulario enviado correctamente. ¡Gracias!');
    formulario.reset(); // Limpia formulario
  }
});
