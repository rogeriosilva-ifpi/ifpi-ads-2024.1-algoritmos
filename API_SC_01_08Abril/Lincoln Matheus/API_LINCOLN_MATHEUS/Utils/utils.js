import { question } from "readline-sync";

export function get_text(texto) {
    return question(texto);
}

export function get_number(texto) {
    return Number(question(texto));
}

export function print(texto) {
    return console.log(texto);
}

export function porcentagem(valor, total) {
    return (valor * 100) / total;
}

export function get_number_random(numero) {
    return parseInt(Math.random() * numero);
}