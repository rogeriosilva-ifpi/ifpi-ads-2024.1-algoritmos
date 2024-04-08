import {question} from 'readline-sync'

export function print(Texto){
    return console.log(Texto)
}


export function GetNumber(Texto){
    return Number(question(Texto))
}


export function GetNumberInteger(Texto){
    return parseInt(question(Texto))
}


export function GetNumberAbove(Texto, Min){
    let Numero = GetNumber(Texto)

    while(Numero < Min){
        console.log('Valor inválido!')
        Numero = GetNumber(Texto)
    }
    return Numero
}


export function input(Texto){
    return question(Texto)
}

export function GetNumberBetween(Texto,Min,Max){
    let Numero = GetNumber(Texto)

    while(Numero < Min || Numero > Max){
        console.log('Valor inválido!')
        Numero = GetNumber(Texto)
    }
    return Numero
}

export function GetNumberIntegerBetween(Texto,Min,Max){
    let Numero = GetNumberInteger(Texto)

    while(Numero < Min || Numero > Max){
        console.log('Valor inválido!')
        Numero = GetNumberInteger(Texto)
    }
    return Numero
}