import {question} from 'readline-sync'

export function get_number(mensagem){
    let numero = Number(question(mensagem))
    return numero
}

export function mostre(mensagem){
    console.log(mensagem)
}

export function limpar_tela(){
    console.clear
}

export function get_number_min(mensagem,min){
    let numero = Number(question(mensagem))

    if (numero<min){
        mostre(`Número inválido! Tente novamente.`)
        return get_number_min
    }else{
        return numero
    }
}

export function positive_number(mensagem){
    let numero = Number(question(mensagem))

    if(numero<0){
        mostre(`Número inválido! Tente novamente.`)
        return positive_number
    }else{
        return numero
    }
}

export function get_1or2(mensagem){
    let numero = get_number(mensagem)
    if(numero === 1 || numero === 0){
        return numero
    }else{
        mostre(`Número inválido! Tente novamente.`)
        return get_1or2
    }
}

export function get_number_inrange(mensagem,min,max){
    let numero = get_number(mensagem)

    if (numero<min || numero>max){
        mostre(`Número inválido! Tente novamente.`)
        return get_number_min
    }else{
        return numero
    }
}

export function get_MF(mensagem){
    let M_F = question(mensagem)
    if(M_F == 'M' || M_F == 'F'){
        return M_F
    }else{
        mostre(`Valor inválido!`)
        return get_MF
    }
}

    export function get_text(mensagem){
        let text = question(mensagem)
        return text
    }