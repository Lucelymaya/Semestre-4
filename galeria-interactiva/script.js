const input = document.getElementById('imageUrl');
const addBtn = document.getElementById('addImage');
const deleteBtn = document.getElementById('deleteImage');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Función para crear y agregar una imagen
addBtn.addEventListener('click', () => {
  const url = input.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;

    // Evento para seleccionar imagen
    img.addEventListener('click', () => {
      document.querySelectorAll('.gallery img').forEach(image => {
        image.classList.remove('selected');
      });
      img.classList.add('selected');
      selectedImage = img;
    });

    gallery.appendChild(img);
    input.value = '';
  }
});

// Eliminar imagen seleccionada
deleteBtn.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});

// Tecla Enter para agregar imagen
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// Tecla "Delete" para borrar imagen seleccionada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete' && selectedImage) {
    deleteBtn.click();
  }
});
