import { get_number, get_text, print } from '../Utils/utils.js';

function main() {
    let sexoAluno = get_text(`Digite o sexo do Aluno, (F=Feminino ou M=Masculino): `).toUpperCase();
    let notaAluno = get_number(`Digite a nota do aluno: `);
    let countAlunos = 0;
    let countAlunosF = 0;
    let countAlunosM = 0;
    let notasAlunoF = 0;
    let notasAlunoM = 0;
    let maiorNota = 0;
    let menorNota = Infinity;

    while(sexoAluno === `F` || sexoAluno === `M`) {
        countAlunos++;

        if(sexoAluno === `F`) {
            notasAlunoF += notaAluno;
            countAlunosF++;
        }else if (sexoAluno === `M`){
            notasAlunoM += notaAluno;
            countAlunosM++;
        }

        if(notaAluno > maiorNota) {
            maiorNota = notaAluno;
        }

        if(notaAluno < menorNota) {
            menorNota = notaAluno;
        }

        sexoAluno = get_text(`Digite o sexo do Aluno, (F=Feminino ou M=Masculino): `).toUpperCase();
        notaAluno = get_number(`Digite a nota do aluno: `);
        
    }

    const MEDIA_ALUNOS_GERAL = (notasAlunoF + notasAlunoM) / countAlunos;
    const MEDIA_ALUNOS_FEMININO = notasAlunoF / countAlunosF;
    const MEDIA_ALUNOS_MASCULINO = notasAlunoM / countAlunosM;

    const CLASSIFICACAO_GERAL = verificarClassificacao(MEDIA_ALUNOS_GERAL);
    const CLASSIFICACAO_FEMININO = verificarClassificacao(MEDIA_ALUNOS_FEMININO);
    const CLASSIFICACAO_MASCULINO = verificarClassificacao(MEDIA_ALUNOS_MASCULINO);

    print(`
    ------------------------------------------------------------------------------
                            RELATORIO DO PROFESSOR JOAQUIM
    
    -> Quantidade Alunos:                                   ${countAlunos}
    -> Quantidade Sexo Feminino:                            ${countAlunosF}
    -> Quantidade Sexo Masculino:                           ${countAlunosM}
    ______________________________________________________________________________

    -> Maior Nota Geral:                                    ${maiorNota.toFixed(1)};
    -> Menor Nota Geral:                                    ${menorNota.toFixed(1)};
    -> Média Geral:                                         ${MEDIA_ALUNOS_GERAL.toFixed(1)};
    
    -> Classificação Geral da Turma:                        ${CLASSIFICACAO_GERAL}
    -> Classificação Alunos do Sexo Feminino:               ${CLASSIFICACAO_FEMININO}
    -> Classificação Alunos do Sexo Masculino:              ${CLASSIFICACAO_MASCULINO}
    
    ------------------------------------------------------------------------------`);

}

function verificarClassificacao(numero) {
    let classificacao = ``;

    if(numero >= 0 && numero <= 2) {
        classificacao = `PÉSSIMO`;
    } else if(numero <= 4) {
        classificacao = `RUIM`;
    } else if(numero <= 7) {
        classificacao = `REGULAR`;
    } else if(numero <= 8) {
        classificacao = `BOM`;
    } else {
        classificacao = `EXCELENTE`;
    }

    return classificacao;
}

main();