import { question } from "readline-sync";

function main(){
    console.log("**** BEM-VINDO AO ENZOAPP ****")

//Tentativa de resolução sem usar algo como Math.Random

const tamanho = Number(question("Coloque o tamanho da senha: "))
const numero_base = Number(question("Nos dê um número para o cálculo base"))
const calculo = tamanho * numero_base

const senha_que_você_sugere = Number(question("insira uma senha,de mesmo tamanho,que você sugere pra gente(Não coloque igual ao cálculo ou antecessor do cálculo ou sucessor de cálculo): "))

 if(senha_que_você_sugere === calculo + 1  ){
     console.log("Essa senha é inválida,faça o percurso novamente.")
 }
 else if(senha_que_você_sugere === calculo){
    console.log("Essa senha é inválida,faça o percurso novamente.")

 }
 else if(senha_que_você_sugere === calculo - 1){
    console.log("Essa senha é inválida,faça o percurso novamente.")
}
 else{console.log(`A senha que sugerida é ${calculo}`)}
 
 const satisfacao = Number(question("1 para satisfeito e 2 para insatisfeito: "))
 
 while(satisfacao === 2){
    const tamanho = Number(question("Coloque o tamanho da senha: "))
    const numero_base = Number(question("Nos dê um número para o cálculo base"))
    const calculo = tamanho * numero_base
    
    const senha_que_você_sugere = Number(question("insira uma senha,de mesmo tamanho,que você sugere pra gente(Não coloque igual ao cálculo ou antecessor do cálculo ou sucessor de cálculo): "))
    
     if(senha_que_você_sugere === calculo + 1){
         console.log("Essa senha é inválida,faça o percurso novamente.")
     }
     else if(senha_que_você_sugere === calculo){
        console.log("Essa senha é inválida,faça o percurso novamente.")
    
     }else if(senha_que_você_sugere === calculo - 1){
        console.log("Essa senha é inválida,faça o percurso novamente.")
     }
     else{console.log(`A senha que sugerida é ${calculo}`)}
     
     return satisfacao
 }
 if(satisfacao === 1){
    return console.log(`Programa encerrado,você escolheu nossa senha ${calculo}.Obrigado pela preferência!!`)
 }
}
