const frase = "ai meu deus como e bom ser vida loka que deus ilumine minha vida e me torne uma pessoa boa pois na vida ser bom ao proximo e tudo que importa pois quando tudo esta perdido sao essas pessoas que irao estar contigo amem";
const palavras = frase.split(" ");

// Nossa como eu amo programação funcional
const resultado = palavras.reduce((palavras, palavra) => {
    if (palavra in palavras) {
        palavras[palavra]++
    } else {
        palavras[palavra] = 1
    }

    return palavras
}, {});

console.log(resultado);
