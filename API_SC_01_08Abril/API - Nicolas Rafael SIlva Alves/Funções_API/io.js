import { question } from "readline-sync";

export function pergunta(mensagem){
    return question(mensagem)
}

export function escreva(mensagem){
    console.log(mensagem)
}

export function get_number(pergunta){
    return Number(question(pergunta))
}

export function get_positive_number(pergunta){
    const numero = get_number(pergunta)

    if(numero <= 0){
        escreva("!!!Numero Invalido!!!\n")
        return get_positive_number(pergunta)
    }
    return numero
}