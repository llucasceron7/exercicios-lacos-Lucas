let carro = { Marca: "Toyota", Modelo: "Corolla", Ano: "2020" };
let saida = "";

console.log("Carro:");
for (let chave in carro) {
  saida += `${chave}: ${carro[chave]} `;
}

console.log(saida.trim());