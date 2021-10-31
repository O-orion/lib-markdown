
function  geraArrayDeUrl(array){

    return array.map(objetoLink => Object.values(objetoLink).join())
}

function validaUrl(arrayList){
    return geraArrayDeUrl(arrayList)
}

module.exports = validaUrl