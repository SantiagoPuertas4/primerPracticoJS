let num1;
let num2;

num1 = prompt("Ingresa un numero:");
num2 = prompt("Ingresa otro numero:");

if (num1 === null || num2 === null) {
  alert("No ingreso uno de los numeros");
} else if (isNaN(num1) || isNaN(num2)) {
  alert("Uno de los numeros ingresados no son validos");
} else {
  num1 = parseInt(num1);
  num2 = parseInt(num2);

  if (num1 > num2) {
    alert("El mayor es " + num1);
  } else {
    alert("El mayor es " + num2);
  }
}
