let pessoa = { nome: "Ana", idade: 25, cidade: "Curitiba" };

console.log("Imprimir:");
for (let chave in pessoa) {
  console.log(chave); 
}