import {question} from "readline-sync"

export function print(texto){
    return console.log(texto)
}

export function pede_numero(texto){
    return Number(question(texto))
}

export function pede_numero_positivo(texto){
    
    const numero = Number(question(texto))
    while(numero < 1){
    print(`
    ==========================
    Numero Digitado Invalido!
    ==========================
    `)
    numero = Number(question("Digite um numero Positivo Maior que Zero!"))
    }
    return numero
}

export function pede_numero_positivo_com_zero(texto){
    const numero = Number(question(texto))
    while(numero < 0){
    print(`
    ==========================
    Numero Digitado Invalido!
    ==========================
    `)
    numero = Number(question("Digite um numero Positivo"))
    }
    return numero
}

export function pergunta(texto){
    return question(texto)
}