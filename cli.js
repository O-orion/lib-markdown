const pegaArquivo = require('./index.js')
const chalk = require('chalk')
const validaUrl = require('./http-validcao.js')

const caminho = process.argv;

async function processaTexto(caminhoArquivo){
    const resultado = await pegaArquivo(caminhoArquivo[2])
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('Lista Validada'),  validaUrl(resultado))
    }else{
       // console.log(chalk.yellow('Lista de Links'), resultado)
    }
}

processaTexto(caminho)



