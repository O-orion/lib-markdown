const chalck = require('chalk');
const fs = require('fs');


function extrairLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados= []
    let temp;

    while((temp = regex.exec(texto)) != null){
        arrayResultados.push({
            [temp[1]]:temp[2]
        })
    }

    return arrayResultados;
}

function tratamentoError(erro){
    throw new Error(chalck.red(erro.code, 'Vixi, deu muito ruim irmão, só lamento, talvez o caminho esteja errado, fui'));
}
//asaync -> avisa ao Js que essa função é assicrona
async function pegaArquivo(caminho){
    //async await não muda a sintaxe
    const encoding = 'utf-8';
    try{ //tenta executar
        const texto = await fs.promises.readFile(caminho, encoding); //await indica o que eu vou espera carrega
        //vai executa primeiro tudo o que está ao seu lado direito pra depois joga na variavel
        console.log(extrairLinks(texto))
    }catch(erro){ //se tiver erro me avisa
        tratamentoError(erro)
    }



}

/* com then
function pegandoArquivo(caminho){
    const encoding = "utf-8"
    fs.promises.readFile(caminho, encoding)
                .then(texto => console.log(texto))
                //encadeamento de funções
                .catch(erro => tratamentoError(erro))
}*/

/*function capturaArquivo(caminhoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoArquivo,encoding, (erro, texto) => {
        if(erro){
            tratamentoError(erro);
        }
        console.log(chalck.green(texto));
    })
}
*/
pegaArquivo('./arquivos/texto1.md');



console.log(chalck.red("DEUS É BOM!!"));



