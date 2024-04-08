import { question } from "readline-sync";

function main(){
    let sexoAluno = obter_texto('Digite o sexo do aluno M ou F:')
    let notaAluno = 0
    let maiorNota = 0
    let menorNota = 0
    let qtd_alunos = 0
    let somatorioNotas = 0
    let contadorHomens = 0
    let contadorMulheres = 0
    let somatorioHomens = 0
    let somatorioMulheres = 0

    while (sexoAluno === 'm' || sexoAluno === 'M'|| sexoAluno === 'f' || sexoAluno === 'F'){
        

        let notaAluno = obter_numero("Digite a nota do aluno(a) [0 - 10]: ")
        somatorioNotas = somatorioNotas + notaAluno

        if(sexoAluno === 'm' || sexoAluno === 'M'){
            contadorHomens++
            somatorioHomens = somatorioHomens + notaAluno
        }else{
            contadorMulheres++
           somatorioMulheres = somatorioMulheres + notaAluno
            
        }

        sexoAluno = obter_texto('Digite o sexo do aluno M ou F:')
 
        if(notaAluno > maiorNota){
            maiorNota = notaAluno
        }else{
            menorNota = notaAluno
        }

        qtd_alunos++
        
    }

    //media geral turma
    const media = Number((somatorioNotas / qtd_alunos).toFixed(2))
    const mediaHomens = Number((somatorioHomens / contadorHomens).toFixed(2))
    const mediaMulheres = Number((somatorioMulheres / contadorMulheres.toFixed(2)))

    //Desempenho geral da turma
    mostrar_texto(`QTD ALUNOS: ${qtd_alunos}`)
    mostrar_texto(`QTD HOMENS: ${contadorHomens}`)
    mostrar_texto(`QTD MULHERES: ${contadorMulheres}`)
    mostrar_texto(`A média geral da turma é ${media}`)

        mostrar_texto("----------Desempenho da turma----------")
        classificarDesempenho(media)

        mostrar_texto("----------Desempenho Homens------------")
        classificarDesempenho(mediaHomens)

        mostrar_texto("----------Desempenho mulheres-------------")
        classificarDesempenho(mediaMulheres)




    //SAÍDA
   
    
    
   
    
   
    



}
main()

function mostrar_texto(texto){
    console.log(texto)
}

function obter_numero(mensagem){
    return Number(question(mensagem))
}

function obter_texto(mensagem){
    return question(mensagem)

}

function classificarDesempenho(media){
    if(media >= 8){
        mostrar_texto('Desempenho: Excelente')
    }else if(media >= 7 && media <= 8){
        mostrar_texto('Desempenho: Bom')
    }else if(media >= 4 && media <= 7){
        mostrar_texto('Desempenho: Regular')
    }else if(media >= 2 && media <= 4){
        mostrar_texto('Desempenho: Ruim')
    }else{
        mostrar_texto('Desempenho: Péssimo')
    }
}



