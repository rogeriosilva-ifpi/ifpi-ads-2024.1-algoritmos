import {question} from 'readline-sync'

export function get_number(msg){
    let number = Number(question(msg))
    return number
}

export function print(msg){
    console.log(msg)
}

export function get_string(msg){
    let string = question(msg)
    return string
}