import { question } from "readline-sync";

export function getNumber(msg) {
    return parseFloat(question(msg))
}

export function getString(msg) {
    return question(msg)
}

export function print(...content) {
console.log(...content);
}
