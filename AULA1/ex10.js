/*Sequência de Fibonacci Recursiva
Escreva uma função recursiva que recebe um número n e retorna o n-ésimo termo
da sequência de Fibonacci*/

function fibo(stopNum, first = 0, second = 1) {
    console.log(first)

    if (!stopNum) return first

    return fibo(stopNum - 1, second, first + second)
}

fibo(50)
