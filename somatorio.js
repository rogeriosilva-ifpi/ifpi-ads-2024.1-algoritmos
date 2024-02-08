import { question } from 'readline-sync'

console.log('***** SaudApp *****')

// Entrada
var inicio = 1
var final = Number(question('Final: '))

// Processamento
var qtd_pares = final / 2
var soma_pares = inicio + final
var somatorio = qtd_pares * soma_pares

// Saída
console.log(`O somatório de ${inicio} até ${final} é ${somatorio.toFixed(0)}`)