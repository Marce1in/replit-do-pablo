/*  Contar Dígitos Pares
Escreva um algoritmo que, dado um número inteiro, retorna a quantidade de dígitos
pares existentes nele */

const num = 12345678910

const digitArr = num.toString().split("")

const paresNum = digitArr.reduce((acc, num) => +num % 2 == 0 ? acc + 1 : acc, 0)

console.log(`Existem ${paresNum} pares dentro da array`)
