import { question } from "readline-sync"

export function get_number(mensagem){
    const n = Number(question(mensagem))
    return n
}

export function get_positive_number(mensagem){
    let n = Number(question(mensagem))

    if (n > 0){
        return n
    }else{
        while (n <= 0){
            n = Number(question(mensagem))
        }
        return n
    }
}

export function get_natural_number(mensagem){
    let n = Number(question(mensagem))

    if (n >= 0){
        return n
    }else{
        while (n < 0){
            n = Number(question(mensagem))
        }
        return n
    }
}

export function get_text(mensagem){
    const text = question(mensagem)
    return text.toUpperCase()
}

export function show(mensagem){
    console.log(mensagem)
}