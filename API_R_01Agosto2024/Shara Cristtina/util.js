import {question} from 'readline-sync'

export function mostre(mensagem){
    console.log(mensagem)
}
export function get_number_in_range(num,min,max){
    const numero = Number(question(num))

    if(numero >= min && numero <= max){
        return numero
    }else{
        mostre(`Valor inválido! Tente novamente.`)
    }
}

export function get_number_min(num,min){
    const numero = Number(question(num))

    if(numero >= min){
        return numero
    }else{
        mostre(`Valor inválido! Tente novamente.`)
    }
}

export function limpar_tela(){
    console.clear()
}