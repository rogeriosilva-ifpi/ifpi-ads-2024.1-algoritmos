import { question } from "readline-sync"

export function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

export function maior_numero(numero, referencia){
    let maior = numero
    if (maior < referencia){
        maior = referencia
    }
    return maior 
}

export function menor_numero(numero, referencia){
    let menor = numero
    if (menor > referencia){
        menor = referencia
    }
    return menor
}

export function media (total, qtd_elementos){
    return total / qtd_elementos
}

export function print(mensagem){
    return console.log(mensagem)
}









