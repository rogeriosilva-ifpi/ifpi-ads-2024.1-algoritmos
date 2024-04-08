import { question } from "readline-sync";

export function get_number(mensagem){
    const numero = Number(question(mensagem))

    return numero
}

export function get_positive_number(mensagem){
    const numero = get_number(mensagem)

    if (numero <= 0) {
        console.log('Insira um número positivo! ')
        return get_positive_number(mensagem)
    }

    return numero
}

export function get_entry(mensagem){
    const entrada = question(mensagem)

    return entrada
}