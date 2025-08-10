/*Simulação de Fila
Implemente uma fila simples para processar uma sequência de nomes (entrada e
saída), mostrando a fila a cada operação.*/

const nomes = [
  "Pablo",
  "Nik",
  "Angelo",
  "Victor",
  "Gladmir",
  "Edécio",
  "Bruna",
];
const fila = [];

console.log("-".repeat(50))

nomes.forEach((nome, idx) => {
  console.log(`${nome} chegou na fila, foi o ${idx + 1}º a chegar`)
  fila.push(nome);
});

console.log("-".repeat(50))

for (let i = 0; i < nomes.length; i++){
  console.log(`${fila.shift()} foi o ${i + 1}º a sair`)
}

console.log("-".repeat(50))
