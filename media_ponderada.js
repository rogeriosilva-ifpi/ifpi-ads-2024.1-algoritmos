import { question } from 'readline-sync'

// Entrada
const nota1 = Number(question('Nota 1: '))
const peso1 = Number(question('Peso 1: '))
const nota2 = Number(question('Nota 2: '))
const peso2 = Number(question('Peso 2: '))
const nota3 = Number(question('Nota 3: '))
const peso3 = Number(question('Peso 3: '))

// Processamento
const somatorio1 = nota1*peso1 + nota2*peso2 + nota3*peso3
const somatorio2 = peso1 + peso2 + peso3
const media_ponderada = somatorio1 / somatorio2

// Saída
const mensagem = `
  > RESULTADO <
  ------------------------------------
  Nota1 -> Peso1: ${nota1} -> ${peso1}
  Nota2 -> Peso2: ${nota2} -> ${peso2}
  Nota3 -> Peso3: ${nota3} -> ${peso3}
  ------------------------------------
  Média Ponderada: ${media_ponderada.toFixed(2)}
  `

console.log(mensagem)