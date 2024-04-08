import { question } from "readline-sync";

function main() { 
    let sexo = question("Qual o sexo do aluno?(M/F): ")
    let nota = Number(question("Qual a nota do aluno?(M/F): "))
    let maiornotam = 0
    let menornotam = 0
    let maiornotaf
    let menornotaf
    let notaaux = 0
    let countm = 0
    let countf = 0
    
    while (sexo.toLocaleLowerCase() == "m" || sexo.toLocaleLowerCase() == "f") {
        notaaux = nota
        if (sexo == "m") {
            if (nota >= notaaux) {
                maiornotam = nota
                countm++
                
            } else {
                menornotam = nota
                countm++
                
            }    
        } else { 
            if (nota >= notaaux) {
                maiornotaf = nota
                countf++

            } else {
                menornotaf = nota  
                countf++

            }
        }
        nota += nota
        sexo = question("Qual o sexo do aluno?(M/F): ")
        nota = Number(question("Qual a nota do aluno?(M/F): "))
    }
    let media = nota / countm + countf
    let maiornotageral = 0
    let menornotageral = 0
    if (maiornotaf >= maiornotam) {
        maiornotageral = maiornotaf
        menornotaf = maiornotam
    } else { 
        maiornotageral = maiornotam
        menornotageral = maiornotaf
    }
    let qtd_alunos = countf + countm
    let performancem = nota / countm * 10
    let performancef = nota / countf * 10
    
    console.log(`
    QTD GERAL DE ALUNOS: ${qtd_alunos}
    QTD DE HOMENS: ${countm}
    QTD DE MULHERES: ${countf}
    MAIOR NOTA GERAL: ${maiornotageral}
    MENOR NOTA GERAL: ${menornotageral}
    MEDIA GERAL: ${media}
    PERFOMANCE DOS HOMENS: ${performancem}
    PERFOMANCE DAS MULHERES: ${performancef}
    ---------------------------------    
    `)
}
main()