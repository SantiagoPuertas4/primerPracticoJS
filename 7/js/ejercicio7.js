let num1;
let num2;
let num3;
let ref;

num1 = prompt("Ingresa el primer numero:");
num2 = prompt("Ingresa el segundo numero:");
num3 = prompt("Ingresa el tercer numero:");

if (num1 === null || num2 === null || num3 === null) {
  alert("No ingreso uno de los numeros");
} else if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  alert("Uno de los numeros ingresados no es valido");
} else {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);

  if (num1 > num2) {
    ref = num1;
  } else {
    ref = num2;
  }

  if (num3 > ref) {
    ref = num3;
  }

  alert("El mayor es " + ref);
}
