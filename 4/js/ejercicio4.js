let name;
name = prompt("Escribe tu nombre de usuario");
if (name === null) {
  alert("No ingreso nada");
} else {
  document.write("Hola " + name);
}
