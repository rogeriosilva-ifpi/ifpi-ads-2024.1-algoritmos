import { question } from "readline-sync";

function main(){

    const ano_atual = 2024
    let nome = get_text('Nome: ')
    let ano_nascimento = get_number('Ano de nascimento: ')

    let idade = obter_idade(ano_atual, ano_nascimento)
    console.log(`Idade = ${idade}`)

    let divisores = obter_divisores(idade)

    console.log(`Divisores de ${idade}: `)
    console.log(divisores)
}

function obter_divisores(idade){
    let divisores = ''

    let contador = 0
    
    while (contador < idade){
        if (eh_divisor(idade, contador)){
            divisores += `${contador} \n`
        }
        contador++
    }

    return divisores
}

function eh_divisor(n, a){
    return n % a == 0
}

function obter_idade(ano_atual, ano_nascimento){
    return ano_atual - ano_nascimento
}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_text(mensagem){
    let texto = question(mensagem)
    return texto
}

main()