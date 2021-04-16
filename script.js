let titulo = "Calculadora let"; // escopo global
let numero1 = 0;
let numero2 = 0;
let resultado = 0;

function calcular(operador) {
  // Cálculo do resultado
  numero1 = parseFloat(document.getElementById("num1").value);
  numero2 = parseFloat(document.getElementById("num2").value);
  resultado = numero1 + operador + numero2; // "2+2"

  // Exibição do resultado
  let div = document.querySelector(".resultado"); // "peguei" o elemento
  div.innerHTML = eval(resultado) + '<button onclick="fechar()" class="fechar">Fechar</button>';
  div.style.opacity = "1";
}

function fechar() {
  let div = document.querySelector(".resultado");
  div.style.opacity = "0";
}
