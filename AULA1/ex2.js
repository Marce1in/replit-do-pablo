/*Substituição de Caracteres em String
Implemente uma função que recebe uma string e retorna a mesma string com todas
as vogais substituídas por ‘* */

const vogais = new Set(["a", "e", "i", "o", "u"])
const frase = "The quick and brow fox jumps over the lazy dog"
const arrFrase = frase.split("")

const resultado = arrFrase.map(char => vogais.has(char) ? "*" : char)

console.log(resultado.join(""))
