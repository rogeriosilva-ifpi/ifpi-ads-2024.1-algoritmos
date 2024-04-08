import { question } from 'readline-sync';

//FUNÇÕES DE TRABALHO!
function gerar_senha_numerica(n_caracteres){
    let contador = 0
    let caractere1, placeholder

    let senha = ''

    while (n_caracteres > contador){
        caractere1 = random_number(9)

        if (caractere1 === placeholder || caractere1 === placeholder-1 || caractere1 === placeholder+1){
            caractere1 = random_number(9)
        }

        senha += `${caractere1}`
        placeholder = caractere1
        contador++
    }
    
    return `${senha}`

}

function random_number(limite_superior){
    let randomizer = Math.round((Math.random(0,1)) * (limite_superior+1))

    if (randomizer === 10){
        randomizer = 0
    }
    
    return randomizer
}

// FUNÇÕES PARA PEDIR INFORMAÇÕES AO USUÁRIO!
function get_number(mensagem){
    const numero = Number(question(mensagem))

    return numero
}

function get_positive_number(mensagem){
    const numero = get_number(mensagem)

    if (numero <= 0) {
        console.log('Insira um número positivo! ')
        return get_positive_number(mensagem)
    }

    return numero
}

function get_entry(mensagem){
    const entrada = question(mensagem)

    return entrada
}

// FUNÇÃO MAIN  
function main(){
    console.log('-~--------------------------------------------------~-')
    console.log('             Bem vindo ao gerador de senhas!          ')
    let numero_caracteres = get_positive_number('Quantos caracteres você deseja em sua senha?  : ')

    console.log(`${numero_caracteres} caracteres!`)

    let senha 
    let satisfacao = 'N'

    while (satisfacao === 'N'){
        senha = gerar_senha_numerica(numero_caracteres)
        console.log(`A sua nova senha será    >>> ${senha} <<<`)
        satisfacao = get_entry('Você está satisfeito? ("S" = sim ou "N" = não; "M" = mudar número de caracteres)  : ')

        if (satisfacao === 'M'){ // PEDIR UMA NOVA QUANTIDADE DE CARACTERES PARA A SENHA
            numero_caracteres = get_positive_number('Quantos caracteres você deseja em sua senha?  : ')
            satisfacao = 'N' // MUDANDO satisfacao PARA CONTINUAR O LOOPING

        }
        
    }
    console.log('-~--------------------------------------------------~-')
}

main()