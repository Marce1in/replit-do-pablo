/*Soma Recursiva de Vetor
Implemente uma função recursiva para somar todos os elementos de uma lista*/

lista = [1, 2, 3 ,4 , 5, 6, 7, 8, 9, 10]

/**
 * @param {number} soma
 * @param {number[]} arr
 */
function somar(arr, soma = 0){
    if (!arr.length) return soma

    return somar(arr, soma + arr.pop())
}

console.log(somar(lista))
