import { question } from 'readline-sync'

function main(){
    let cidades = Number(question('Quantas cidades você ira digitar : '))

    const {total, maiorRenda, menorRenda} = pesquisa(cidades)

    const resposta = `
    Total : ${total}
    Maior renda : ${maiorRenda}
    Menor Renda : ${menorRenda}
    `

    console.log(resposta)
}

function pesquisa(cidades){
    let total = 0
    let maiorRenda = -Infinity
    let menorRenda = Infinity

    while (cidades > 0){
        let rendaPerCapita = Number(question('Renda per capita da cidade : '))

        if (rendaPerCapita === 0){
            break
        }

        if(rendaPerCapita > maiorRenda){
            maiorRenda = rendaPerCapita
        }

        if (rendaPerCapita < menorRenda){
            menorRenda = rendaPerCapita
        }
        total += rendaPerCapita
        cidades --
    }

    return {total, maiorRenda, menorRenda}
}

main()