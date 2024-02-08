import { question } from 'readline-sync'

// Entrada
var dolar = Number(question('Valor da cotação do dólar: '))
var valor = Number(question('Valor em dólar a ser convertido: '))

// Processamento
var valor_real = valor * dolar

// Saída
console.log(`O valor de ${valor} dólares é de ${valor_real.toFixed(2)} reais.`)