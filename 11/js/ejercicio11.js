let num1;
let i = 1;

num1 = prompt("Ingresa un numero :");

if (num1 === null) {
  alert("No se ingreso nada");
} else if (isNaN(num1)) {
  alert("El numero ingresado no es valido");
} else {
  num1 = parseInt(num1);

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
}
