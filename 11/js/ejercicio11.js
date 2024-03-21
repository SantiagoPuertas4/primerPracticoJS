let num1;
let i = 1;

num1 = parseInt(prompt("Ingresa un numero :"));

if (num1 % 2 === 0) {
  alert("Es divisible por 2");
  i = 0;
}

if (num1 % 3 === 0) {
  alert("Es divisible por 3");
  i = 0;
}

if (num1 % 5 === 0) {
  alert("Es divisible por 5");
  i = 0;
}

if (num1 % 7 === 0) {
  alert("Es divisible por 7");
  i = 0;
}

if (i === 1) {
  alert("No es divisible por ningun numero preestablecido");
}
