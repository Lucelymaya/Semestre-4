// Arreglo inicial de productos
let productos = [
  {
    nombre: "Laptop Lenovo",
    precio: 750,
    descripcion: "Portátil de alto rendimiento para estudiantes y profesionales."
  },
  {
    nombre: "Smartphone Samsung",
    precio: 450,
    descripcion: "Celular Android con buena cámara y rendimiento."
  },
  {
    nombre: "Audífonos Bluetooth",
    precio: 50,
    descripcion: "Audífonos inalámbricos con cancelación de ruido."
  }
];

// Función para renderizar productos en la lista
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Limpiar contenido anterior

  productos.forEach(producto => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio}<br>${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Evento para agregar un nuevo producto
document.getElementById("btn-agregar").addEventListener("click", () => {
  const nuevoProducto = {
    nombre: "Nuevo producto",
    precio: 99,
    descripcion: "Descripción del nuevo producto agregado."
  };

  productos.push(nuevoProducto);
  renderizarProductos();
});

// Renderiza los productos al cargar la página
document.addEventListener("DOMContentLoaded", renderizarProductos);
