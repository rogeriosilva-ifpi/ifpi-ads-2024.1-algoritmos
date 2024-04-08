import { GetNumberAbove, GetNumberBetween, input , print} from "./utils.js"

function VerificarMaiorNota(Nota1, Nota2){//função que retorna qual é a maior nota dos alunos

    if(Nota1 > Nota2){
        return Nota1
    }
    return Nota2
}


function VerificarMenorNota(Nota1, Nota2){//função que retorna qual é a menor nota dos alunos
    
    if(Nota1 < Nota2){
        return Nota1
    }
    return Nota2
}


function ComputarPorcentagem(Valor, Total){//função que calcula a porcentagem da performace
    return (Valor * 100) / Total
}


function VerificarDesempenho(Nota){//função que verifica a perfomace do aluno segundo a tabela 

    if(Nota <= 2){
        return 'PÉSSIMO'
    }else if(Nota <= 4){
        return 'RUIM'
    }else if(Nota < 7){
        return 'REGULAR'
    }else if(Nota < 8){
        return 'BOM'
    }
    return 'EXCELENTE'

}


function main(){

    //entrada de dados dos alunos sexo 
    let Sexo = input('Informe o sexo do aluno[M|F]: ').toUpperCase()
    let ContadorAlunos = 0
    let SomaNotas = 0
    let ContadorHomens = 0 , ContadorMulheres = 0
    let MaiorNota = 0, MenorNota = 0
    let SomaNotasHomens = 0 , SomaNotasMulheres = 0

    while(Sexo === 'M' || Sexo === 'F'){

        ContadorAlunos++

        //entrada de dados dos alunos nota
        const Nota = GetNumberBetween('Informe a nota do aluno: ',0,10)
        SomaNotas += Nota
        
        //verificar qual é a maior e menor nota dos alunos
        if(ContadorAlunos === 1){
            MenorNota = Nota
        }

        MaiorNota = VerificarMaiorNota(MaiorNota,Nota)
        MenorNota = VerificarMenorNota(MenorNota,Nota)        
        
        //conta quantos homens e mulheres a turma tem
        if(Sexo === 'M'){
            ContadorHomens++
            SomaNotasHomens += Nota
        }else if(Sexo === 'F'){
            ContadorMulheres++
            SomaNotasMulheres +=  Nota
        }
        
        const DespenhoAluno = VerificarDesempenho(Nota)
        print(`O desempenho do aluno(a) foi [${DespenhoAluno}]`)
        
        //entrada de dados dos alunos sexo 
        Sexo = input('Informe o sexo do aluno[M|F]: ').toUpperCase()

    }

    //processamento de dados necessarios para a saída
    const MediaNotasGerais = SomaNotas / ContadorAlunos
    const MediaNotasHomens = SomaNotasHomens / ContadorHomens
    const MediaNotasMulheres = SomaNotasMulheres / ContadorMulheres
    const PerformaceHomens = ComputarPorcentagem(SomaNotasHomens,SomaNotas)
    const PerformaceMulheres = ComputarPorcentagem(SomaNotasMulheres,SomaNotas)
    const DesempenhoTurma = VerificarDesempenho(MediaNotasGerais)
    const DesempenhoHomens = VerificarDesempenho(MediaNotasHomens)
    const DesempenhoMulheres = VerificarDesempenho(MediaNotasMulheres)

    //exibição da tabela contendo todos os dados requeridos
    const TabelaFinal =`
    MAIOR NOTA GERAL                 : [${MaiorNota}]
    MENOR NOTA GERAL                 : [${MenorNota}]
    MÉDIA GERAL DA TURMA             : [${MediaNotasGerais.toFixed(1)}]
    PERFORMACE DA NOTA DOS HOMENS    : [${PerformaceHomens.toFixed(2)} %]
    PERFORMACE DA NOTA DAS MULHERES  : [${PerformaceMulheres.toFixed(2)} %]
    QUANTIDADE DE ALUNOS NA TURMA    : [${ContadorAlunos}]
    QUANTIDADE SEXO MASCULINO        : [${ContadorHomens}]
    QUANTIDADE SEXO FEMININO         : [${ContadorMulheres}]
    DESEMPENHO DA GERAL DA TURMA     : [${DesempenhoTurma}]
    DESEMPENHO HOMENS                : [${DesempenhoHomens}]
    DESEMPENHO MULHERES              : [${DesempenhoMulheres}]
    `

    print(TabelaFinal)

}

main()