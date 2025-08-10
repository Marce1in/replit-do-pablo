const lista = [7, 2, 10, 0, 5, 9, 1, 6, 4, 3, 8];

for (let i = 0; i < lista.length; i++){
    finish = true
    for (let j = i; j < lista.length; j++){
        if (lista[j] < lista[i]){
            tmp = lista[i]
            lista[i] = lista[j]
            lista[j] = tmp
            finish = false
        }
    }
    if (finish) break
}

console.log(lista)
