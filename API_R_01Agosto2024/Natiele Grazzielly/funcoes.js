import { question } from "readline-sync";

export function getNumber(numero){
    return Number(question(numero))
}

export function print(texto){
    return console.log(texto)
}