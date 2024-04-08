import {escreva,get_number,get_positive_number,pergunta} from "./Funções_API/io.js"

function main(){

//Apresentação 
let mensagem = `\n[-----------Rendimento de Avaliação-----------]
   ***Digite "Sexo !== M/F" para finalizar***
`
escreva(mensagem)
escreva(">>>>>>>>Primeiro Aluno<<<<<<<<<<")

//Entrada
    let sexo = "M"
    let nota = 0
    let num_alunos = 0
    let num_alunosH = 0
    let num_alunosM = 0
    let nota_Maior = 0
    let nota_Menor = 10
    let soma_Notas = 0
    let notas_Homens = 0
    let notas_Mulheres = 0

    while(sexo === "M" || sexo === "F"){
        sexo = pergunta("Qual o sexo do aluno(M ou F): ")
      if(sexo === "M" || sexo === "F"){
        nota = get_nota("Digite a nota: ")

        num_alunos++
        soma_Notas += nota
        if(nota > nota_Maior){
            nota_Maior = nota
        }

        if(nota < nota_Menor){
            nota_Menor = nota
        }

        if(sexo === "M"){
            notas_Homens += nota
            num_alunosH++
        }

        if(sexo === "F") {
            notas_Mulheres += nota
            num_alunosM++
        }

        escreva("\n>>>>>>>>Proximo Aluno<<<<<<<<<<")
     }else{}
    }

//Saída
 const media_Geral = soma_Notas/num_alunos
 const media_Homens = notas_Homens/num_alunosH
 const media_Mulheres = notas_Mulheres/num_alunosM

mensagem = `
 =================================================
  --> Número de Alunos: ${num_alunos}
  --> Número de Alunos Homens: ${num_alunosH}
  --> Número de Alunos Mulheres: ${num_alunosM}
  --> Maior Nota Geral: ${nota_Maior}
  --> Menor Nota Geral: ${nota_Menor}
  --> Media da Turma: ${media_Geral.toFixed(1)}
  --> Perfomance dos Homens: ${media_Homens * 10}%
  --> Perfomance das Mulheres: ${media_Mulheres * 10}%
  --> Desempenho dos Homens: ${calclar_desempenho(media_Homens)}
  --> Desempenho das Mulheres: ${calclar_desempenho(media_Mulheres)}
  --> Desempenho da Turma: ${calclar_desempenho(media_Geral)}
 =================================================

`
escreva(mensagem)
if(pergunta("Finalizar Programa?(Digite algo) "))
    console.clear()
}

//Processamento

function get_nota(txt){
    let nota = get_number(txt)

    if(nota < 1 || nota > 10){
        escreva("!!!Nota Inválida!!!\n")
        return get_nota(txt)
    }
    return nota
}

function calclar_desempenho(media){

    if(media < 2)
        return "Péssimo"
    else if(media < 4)
        return "Ruim"
    else if(media < 7)
        return "Regular"
    else if(media < 8)
        return "Bom"
    else 
        return "Excelente"
}

main()
