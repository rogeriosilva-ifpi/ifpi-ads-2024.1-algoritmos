import { get_number_inrange, get_text} from '../quest/utils.js'

function main(){
    let sexo = get_text('Sexo do aluno:  ')
    let nota = get_number_inrange('Nota do aluno:  ',0,10)
    let nota_geral= 1
    let nota_meninos = 1
    let nota_meninas =1
    let num_alunos = 1
    

    while(sexo=='M'|| sexo=='F'){
        if(sexo=='M'){
            nota_geral = nota_geral + nota
            nota_meninos += nota 
            num_alunos++

            
        }else if(sexo == 'F'){
            nota_geral = nota_geral + nota
            nota_meninas += nota 
            num_alunos++
        }
        
    }
    let desempenho_mas = (nota_meninos/nota_geral)
    let desempenho_fem = (nota_meninas/nota_geral)
    let media_geral = nota_geral/num_alunos

    mostre(`
    Desempenho masculino: ${desempenho_mas}%
    Desempenho feminino: ${desempenho_fem}%
    Média da turma: ${media_geral}
    `)
}
main()

