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

edadUsuario();
