import { escreva,pergunta,get_positive_number } from "./Funções_API/io.js"

function main(){

//Apresentação 
let mensagem = `\n[----------Gerador de Senhas----------]
`
escreva(mensagem)

//Entrada
 const num_digitos = get_positive_number("Informe a quantidade de digitos da senha desejada: ")

//Saída

mensagem = `
 =======================================
  A senha escolhida foi: ${fazer_senha(num_digitos, 0)}
 =======================================

`
escreva(mensagem)
if(pergunta("Finalizar Programa?(Digite algo) "))
    console.clear()
}

//Processamento

function fazer_senha(num,num_anterior){
    let senha = ""
    let num_atual = 0
    let num_digitos = 0
    let confi = 0

    while(num_digitos < num){
        num_anterior = num_atual
        num_atual = Math.floor(Math.random() * 10)
        

     if(num_atual !== 0 && num_atual !== (num_atual - 1) && num_atual !== (num_atual + 1) && num_atual !== num_anterior){
        senha += String(num_atual)
        num_digitos++
     }

     if(num_digitos === num){
        escreva(`\nA senha atual é ${senha} `)
        confi = get_positive_number("Deseja outra senha?(1-sim/2-não) ") 
     }

     if(confi === 1){
        senha = ""
        num_digitos = 0
        return fazer_senha(num,num_atual)
     }
    }
        return senha
}



main()
