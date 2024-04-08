import { question } from "readline-sync"

function main(){
   console.lof("**** BEM-VINDO AO ENZOAPP ****")
   
    const sexo = Number(question("Qual o sexo(lembre-se que M-1 e F-2.Qualquer outro número acaba o programa)? "))
    
    let nota_geral
    let maior_nota
    let menor_nota
    let nota_homens
    let nota_mulheres
    let total_alunos
    let homens 
    let mulheres
    
    
    const perfomance_homens = nota_homens / nota_geral
    const perfomance_mulheres = nota_mulheres / nota_geral
    const media_geral = nota_homens + nota_mulheres / aluno
    
    
    while(sexo === 1 && sexo === 2)

    const nota = Number(question("Insira a nota(1 a 10): "))
    const aluno = Number(question("Esse é o aluno de número: "))
     
       if(nota >= 9.5){ //Organizando a maior e menor nota por estágios onde geralmente elas ocorrem.
        maior_nota += nota
       }else if(nota <= 3.0){
        menor_nota += nota
       }else{
        console.log("A maior e a menor nota não saíram ainda.")
       }

        if(sexo === 1){
         nota_homens += nota
         nota_geral += nota
         total_alunos += aluno
         homens += sexo
      }
       else if(sexo === 2){
         nota_mulheres += nota
         nota_geral += nota
         total_alunos += aluno
         mulheres += sexo
      }
       else{
              console.log("Programa encerrado.")
              console.log(`Total de alunos é ${total_alunos}`)
              console.log(`Total de mulheres é ${mulheres}`) 
              console.log(`Total de homens é ${homens}`)
              console.log(`Perfomance dos homens é de ${perfomance_homens.toFixed(2)}%`)
              console.log(`Perfomance das mulheres é de ${perfomance_mulheres.toFixed(2)}%`)
       return console.log(`Média geral da turma é de ${media_geral}`)

      }

      if(perfomance_homens === 0 && perfomance_homens <= 2){
       return console.log("Desempenho dos homens foi péssimo.")
      }else if(perfomance_homens > 2 && perfomance_homens <= 4){
       return console.log("Desempenho dos homens foi ruim.")
      }else if(perfomance_homens > 4 && perfomance_homens <= 7){
       return console.log("Desempenho dos homens foi regular.")
      }else if(perfomance_homens > 7 && perfomance_homens <= 8){
       return console.log("Desempenho dos homens foi bom.")
      }else{
        console.log("Desempenho dos homens foi excelente.")
      }

      if(perfomance_mulheres === 0 && perfomance_mulheres <= 2){
       return console.log("Desempenho das mulheres foi péssimo.")
      }else if(perfomance_mulheres > 2 && perfomance_mulheres <= 4){
       return console.log("Desempenho das mulheres foi ruim.")
      }else if(perfomance_mulheres > 4 && perfomance_mulheres <= 7){
       return console.log("Desempenho das mulheres foi regular.")
      }else if(perfomance_mulheres > 7 && perfomance_mulheres <= 8){
       return console.log("Desempenho das mulheres foi bom.")
      }else{
       return console.log("Desempenho das mulheres foi excelente.")
      }
    }
    main()
