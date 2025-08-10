
/**
 * @param {{[nome: string]: number}} pessoas
 */
function ordernar(pessoas){
    const pessoasCres = Object.entries(pessoas).sort(([_, idade1], [__, idade2]) => {
        return idade1 - idade2
    })

    return Object.fromEntries(pessoasCres)
}

const pessoas = {
    "pablo":  82,
    "edecio": Infinity,
    "gladmir": -Infinity,
    "marcelo": 20,
}

console.log(ordernar(pessoas))
