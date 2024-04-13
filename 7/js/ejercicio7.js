let num1;
let num2;
let num3;

num1 = parseInt(prompt("Ingresa el primer numero:"));
num2 = parseInt(prompt("Ingresa el segundo numero:"));
num3 = parseInt(prompt("Ingresa el tercer numero:"));

if (num1 > num2 && num1 > num3) {
  alert("El mayor es " + num1);
} else if ((num2 > num1 && num2 > num3) || num1 === num2) {
  alert("El mayor es " + num2);
} else {
  alert("El mayor es " + num3);
}
