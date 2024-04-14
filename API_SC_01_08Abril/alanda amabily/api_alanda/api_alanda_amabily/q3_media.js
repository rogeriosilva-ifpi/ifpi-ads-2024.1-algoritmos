/**
 * Comentário: 
 * - Usou código de aula (consultou)
 * - Atividade era sem Consulta
 */
import { get_number, get_text, print } from '../utils/io_utils.js';

function main(){
    var sexo = get_text('Sexo do aluno: (F OU M)')

    let somatorio_notas = 0;
    let somatorio_nota_mulheres = 0;
    let somatorio_nota_homens = 0;
    let qtd_alunos = 0;
    let somatorio_alunos_homens = 0;
    let somatorio_alunos_mulheres = 0;

    let maior_nota_geral = ' ';
    let menor_nota_geral = ' ';


    while( sexo !== 'F' || sexo !== 'M'){
        const nota = get_number('Nota do aluno: ')
        qtd_alunos ++
        somatorio_notas =+ nota

        if(nota > maior_nota_geral){
            maior_nota_geral = nota;
        }else if(nota < menor_nota_geral){
            menor_nota_geral = nota;
        }
        
        if (sexo === 'F'){
            somatorio_nota_mulheres =+ nota
            somatorio_alunos_mulheres++

        }else if(sexo === 'M'){
            somatorio_nota_homens =+ nota
            somatorio_alunos_homens++
        }
    sexo = get_text('Sexo do aluno (F OU M): ')
    }


    const performance_homens = (somatorio_nota_homens/100) * somatorio_notas
    const performance_mulheres = (somatorio_nota_mulheres/100) * somatorio_notas
    const media_geral = somatorio_notas/qtd_alunos

    const resultado = `
    ------------------------------------------------
    Quantidade de alunos: ${qtd_alunos};
    Quantidade de alunos do sexo F: ${somatorio_alunos_mulheres};
    Quantidade de alunos do sexo M: ${somatorio_nota_homens};
    Performance das notas dos homens: ${performance_homens};
    Performance das notas das mulheres: ${performance_mulheres};
    Maior Nota geral: ${maior_nota_geral};
    Menor nota geral: ${menor_nota_geral};
    Media Geral turma: ${media_geral};
    -------------------------------------------------
    `
    print(resultado)


}

main()