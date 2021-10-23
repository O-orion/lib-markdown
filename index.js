const chalck = require('chalk')
const fs = require('fs')

function capturaArquivo(caminhoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoArquivo,encoding, (_, texto) => {
        console.log(chalck.green(texto))
    })
}

capturaArquivo('./arquivos/texto.md')
console.log(chalck.red("DEUS É BOM!!"))