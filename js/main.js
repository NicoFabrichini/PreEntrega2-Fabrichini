console.log("conectado");

function nombreUsuario() {
  checked = 0;
  let nombre = prompt("Ingresa su nombre");


  while (checked === 0) {
    if (nombre === "") {
      alert("No ingresaste tu nombre");
      nombre = prompt("Ingresa el nombre por favor");
    } else if (/^[0-9]+$/.test(nombre) === true) {
      alert("Ingresa un nombre válido sin números");
      nombre = prompt("Ingresa el nombre por favor");
    } else {
      alert("¡Hola " + nombre + "!");
      checked = 1;
    }
  }
}

nombreUsuario();

function edadUsuario() {
  checked = 0;
  let edad = prompt("Ingresa tu edad");

  while (checked === 0) {
    if (!isNaN(edad))
      if (edad === "") {
        alert("No ingresaste tu edad");
        edad = prompt("Ingresa tu edad por favor");
      } else if (edad >= 18) {
        alert("Podes Ingresar, sos mayor de edad.");
        checked = 1;
      } else {
        alert("Sos menor de edad, no podes ingresar");
        break;
      }
    else {
      alert("La entrada no es un número válido.");
      edad = prompt("Ingresa tu edad por favor")
    }
  }
}

// Inicializamos un array para representar el carrito de compras
const carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito() {
  const producto = prompt("Ingrese el nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));

  if (!isNaN(precio) && precio > 0) {
    carrito.push({ nombre: producto, precio: precio });
    alert(`${producto} se ha agregado al carrito.`);
  } else {
    alert("El precio ingresado no es válido.");
  }
}
// Función para calcular el total del carrito
function calcularTotal() {
  let total = 0;
  for (const item of carrito) {
    total += item.precio;
  }
  alert(`El total del carrito es: $${total.toFixed(2)}`);
}

// Función principal para gestionar el carrito de compras
function main() {
  while (true) {
    const opcion = prompt(
      "Seleccione una opción:\n1. Agregar producto al carrito\n2. Calcular total del carrito\n3. Salir"
    );

    if (opcion === "1") {
      agregarAlCarrito();
    } else if (opcion === "2") {
      calcularTotal();
    } else if (opcion === "3") {
      break;
    } else {
      alert("Opción no válida. Por favor, seleccione una opción válida.");
    }
  }
}

edadUsuario();
main();
