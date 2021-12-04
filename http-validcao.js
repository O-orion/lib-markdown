const fetch = require('node-fetch');

async function checaStatus(urlsArrays){
    //promises async await
    const arrayStatus = await Promise
                                     .all(urlsArrays.map(async url => {
                                         const res = await fetch(url);
                                         return res.status;
                                        }))
    return arrayStatus;
}

function  geraArrayDeUrl(array){
    return array.map(objetoLink => Object.values(objetoLink).join());
}

async function validaUrl(arrayList){
   const links =  geraArrayDeUrl(arrayList);
   const statusLink = await checaStatus(links);
   const resultado = arrayList.map((arrayList, index) => ({...arrayList, status: statusLink[index]}))
   return resultado
   
}

module.exports = validaUrl