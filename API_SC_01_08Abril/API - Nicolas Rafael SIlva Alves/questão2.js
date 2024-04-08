import {escreva,get_positive_number,pergunta} from "./Funções_API/io.js"

function main(){

//Apresentação 
let mensagem = `\n[-----------Projetinho Verão-----------]
`
escreva(mensagem)

//Entrada
   const sexo = pergunta("Qual seu sexo(M ou F): ") 
   const peso = get_positive_number("Qual seu peso: ")
   const perder = get_positive_number("Quantos Kg você pretende perder: ")
   const dias = get_positive_number("Quantos dias por semana irar treinar: ")
   const tempo = get_positive_number("Qual sera a duração da atividade fisíca(min): ")
   const transport = get_positive_number("Qual a proporcação de tempo para Transport: ")
   const escada = get_positive_number("Qual a proporcação de tempo para Escada: ")

//Saída

mensagem = `
 =======================================
 --> Semanas de Projeto: ${calcular_semanas(perder)}
 --> Tempo de Transport Diário: 
 --> Tempo de Escada Diário: 
 =======================================

`
escreva(mensagem)
if(pergunta("Finalizar Programa?(Digite algo) "))
    console.clear()
}

//Processamento
function calcular_semanas(perder){
  return (perder * 10)/7
}


main()
