/*Reversão com Pilha
Usando a estrutura de pilha, crie uma função que inverta uma palavra digitada pelo
usuário.*/

const frase = "The quick and brow fox jumps over the lazy dog"
const pilha = []

for (let i = 0; i < frase.length; i++){
    pilha.push(frase[i])
}

const pilhaReversa = []

for (let i = 0; i < frase.length; i++){
    pilhaReversa.push(pilha.pop())
}

const resultado = pilhaReversa.join("")
console.log(resultado)
