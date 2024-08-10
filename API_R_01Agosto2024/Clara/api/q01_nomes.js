import {question} from 'readline-sync'
//incompleta

function main(){
    const nome = question("Digite seu nome: ")
    const ano_nasc = get_number("Digite o ano do seu nascimento: ")
    const idade = get_number("Sua idade")

    while(divisores !== 0){
        let divisores = calcular_divisores(idade)
        let primos = calcular_primo(divisores)
    }

   
    console.log(`-----------PRINTAR NOME N VEZES------------
    Nome = ${nome}
    Idade = ${idade}
    Divisores = ${divisores}
    Primos = ${calcular_primos}`)
}
function calcular_divisores(idade){
    if(idade%1 == 0){
        return divisores
    }
}
function get_number(mensagem){
    return Number(question(mensagem))
}

function calcular_primo(primos){
    if(divisores % 1 === 0 && divisores/divisores === 0){
        return primos
    } else {
        console.log(`nao ha numeros primos entre os divisores da sua idade, devido a isso vou monstar seu nome ${media_divisores} vezes.`)
        }
}
main()