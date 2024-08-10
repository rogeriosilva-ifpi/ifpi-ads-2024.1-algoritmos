import { getNumber, print } from "./funcoes.js"

function main(){

    const qtdCidades = getNumber('QTD DE CIDADES: ')

    let contador = 1
    let menorRenda = Infinity
    let maiorRenda = 0
    let somaRenda = 0

    while(contador <= qtdCidades ){

        let RendaInformada = getNumber("RENDA Per Capita da cidade " + contador + ": ")

        somaRenda += RendaInformada

        maiorRenda = RendaInformada
        if(maiorRenda < menorRenda){
            menorRenda = maiorRenda
        }

        contador++
    }

    let rendaMedia = somaRenda / qtdCidades

    const resultado = 
(`
=====================
RENDA MEDIA:${rendaMedia.toFixed(0)}
MENOR RENDA:${menorRenda}
MAIOR RENDA: ${maiorRenda}
=====================`)

    print(resultado)

}

main()