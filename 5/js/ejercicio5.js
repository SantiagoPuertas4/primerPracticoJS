let num1;
let num2;
num1 = prompt("Ingresa un numero:");
num2 = prompt("Ingresa otro numero:");

if (num1 === null || num2 === null) {
  alert("No ingreso uno o los dos numeros");
} else if (isNaN(num1) || isNaN(num2)) {
  alert("Uno o los dos numeros ingresados no son validos");
} else {
  num3 = num1 + num2;
  document.write("El resultado de la suma de los numeros es " + num3);
}
