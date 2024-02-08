import { question } from "readline-sync"

//Entrada
const PI = 3.14
const raio = Number(question('Raio da esfera: '))

//Processamento
const volume = (4 * PI * raio**3) / 3

//Saída
console.log(`Volume da esfera = ${volume.toFixed(2)}`)