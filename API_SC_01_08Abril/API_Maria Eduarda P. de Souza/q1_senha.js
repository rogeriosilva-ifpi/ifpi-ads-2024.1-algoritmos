import { question } from "readline-sync"

function main (){

//Entrada 

console.log(`
------- GERADOR DE SENHAS ------- 
`)
const nome = question('Por favor insira seu nome: ')
//Processamento 
let gerador = Math.floor(Math.random() * 1000000)

//Saída
const senhazinha1 = question(`
Um instante, sua senha está sendo gerada!`)
const senhazinha = question("...")
console.log(`
Olá, ${nome}. Sua senha aleatoria foi gerada com sucesso!!
--> ${gerador}`)

} 
main()