let contador = 1;
let soma = 0;

do {
  soma = soma + contador; // Ou soma += contador;
  contador++;
} while (contador <= 5);

console.log("A soma dos números de 1 a 5 é: " + soma);