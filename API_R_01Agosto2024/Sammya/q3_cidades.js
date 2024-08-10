import { question } from "readline-sync";

function main(){
    let N_cidades = get_number('Número de cidades: ')
    // 1. Estado inicial
    let contador = 0

    let soma_rendas = 0
    let maior_renda = -999999999999
    let menor_renda = 9999999999999

    let renda = get_number('Renda R$: ')

    // 2. Condição de continuidade
    while (contador < N_cidades && renda != 0){
        // 3. Trabalho
        soma_rendas += renda
        contador++

        if (renda > maior_renda){
            maior_renda = renda
        }

        if (renda < menor_renda){
            menor_renda = renda
        }

        // 4. Convergencia de dados
        renda = get_number('Renda R$: ')
    }

    let media_renda_cidades = soma_rendas / N_cidades

    let resultado = `
    ----------------------------------------------------------------
    Maior Renda R$: ${maior_renda.toFixed(2)}
    Menor Renda R$: ${menor_renda.toFixed(2)}
    Média Renda Cidades = ${media_renda_cidades.toFixed(2)}
    ----------------------------------------------------------------
    `

    console.log(resultado)

}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_text(mensagem){
    let texto = question(texto)
    return mensagem
}

main()