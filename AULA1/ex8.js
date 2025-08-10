/*Busca em Dicionário de Contatos
Crie um dicionário com nome (chave) e telefone (valor). Implemente funções para
buscar telefone pelo nome e listar os contatos em ordem alfabética.*/

// quem não tem typescript caça com jsdoc
/**
 * @param {string} nome
 * @param {{[nome: string]: string}} contatos
 */
function buscarpornome(nome, contatos){
    return contatos[nome]
}

/**
 * @param {{[nome: string]: string}} contatos
 */
function listarPorOrdemAlfa(contatos){

    const contatosAZ = Object.entries(contatos).sort(([name1], [name2]) => {
        return name1.localeCompare(name2)
    })

    return Object.fromEntries(contatosAZ)
}

const contatos = {
  "Pablo": "11987654321",
  "Gladmir": "21999998888",
  "Nik": "31988887777",
  "Angelo": "41977776666",
  "Zorro vestido de edécio": "5176416000",
  "Bruna": "51966665555",
  "Victor": "51764164444",
};


console.log(buscarpornome("Pablo", contatos))
console.log(buscarpornome("Angelo", contatos))
console.log(buscarpornome("Victor", contatos))

console.log(listarPorOrdemAlfa(contatos))
