// Mostrar alerta al hacer clic
document.getElementById('btnAlerta').addEventListener('click', function () {
  alert('¡Hola! Has hecho clic en el botón.');
});

// Validación del formulario
(() => {
  'use strict'

  const form = document.getElementById('formularioContacto');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // evitar envío para validar primero

    // Validar todos los campos usando validación HTML5 y clases Bootstrap
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Aquí podrías hacer algo al enviar (ejemplo mostrar mensaje)
    alert('Formulario enviado correctamente. ¡Gracias!');

    // Reiniciar formulario y validaciones
    form.reset();
    form.classList.remove('was-validated');
  });
})();
