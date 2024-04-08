import { question } from "readline-sync";

function main(){
    let contador_alunos = 0
    const N_alunos = get_number('Número de alunos: ')
    let soma_notas_alunos = 0
    let soma_notas_mulheres = 0
    let soma_notas_homens = 0
    let quant_mulheres =0
    let quant_homens = 0
    let maior_nota_geral= -Infinity
    let menor_nota_geral = Infinity
    let nota = 0
    let sexo = question('Digite M/F para Iniciar: ')

    while (sexo === 'F' || sexo === 'M') {
        sexo = question('Sexo (M/F): ')
        nota = get_number('Nota: ')

        if (sexo === 'F'){
            soma_notas_mulheres += nota
            quant_mulheres++
        } else {
            soma_notas_homens += nota
            quant_homens++
        }

        soma_notas_alunos += nota
        contador_alunos++
    }

    const media_geral_turma = soma_notas_alunos / N_alunos
    const media_notas_mulheres = soma_notas_mulheres / quant_mulheres
    const media_notas_homens = soma_notas_homens / quant_homens
    const perfomance_mulheres = (soma_notas_mulheres / soma_notas_alunos) * 100
    const perfomance_homens = (soma_notas_homens / soma_notas_alunos) * 100
    const desempenho_turma = obter_desempenho_turma(media_geral_turma)
    const desempenho_mulheres = obter_desempenho_mulheres(media_notas_mulheres)
    const desempenho_homens = obter_desempenho_homens(media_notas_homens)

    let maior_nota = obter_maior_nota_geral(nota, maior_nota_geral)
    let menor_nota = obter_menor_nota_geral(nota, menor_nota_geral)

    
    const resultado = `
    >>>>>>>>> SISTEMA DE NOTAS <<<<<<<<<
    ----------------------------------------------
    Média Geral Turma: ${media_geral_turma.toFixed(2)}
    Maior Nota Geral: ${maior_nota.toFixed(2)}
    Menor Nota Geral: ${menor_nota.toFixed(2)}
    Perfomance Homens (%): ${perfomance_homens.toFixed(2)}
    Perfomance Mulheres (%): ${perfomance_mulheres.toFixed(2)}
    Quantidade de Alunos: ${N_alunos}
    Quantidade de Mulheres: ${quant_mulheres}
    Quantidade de Homens: ${quant_homens}
    Desempenho Turma: ${desempenho_turma}
    Desempenho Mulheres: ${desempenho_mulheres}
    Desempenho Homens: ${desempenho_homens}
    ----------------------------------------------
    `
    console.log(resultado)
}

function obter_desempenho_mulheres(media_notas_mulheres){
    if (media_notas_mulheres < 2){
        return 'Péssimo'
    } else if (media_notas_mulheres < 4){
        return 'Ruim'
    } else if (media_notas_mulheres < 7){
        return 'Regular'
    } else if (media_notas_mulheres <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}

function obter_desempenho_homens(media_notas_homens){
    if (media_notas_homens < 2){
        return 'Péssimo'
    } else if (media_notas_homens < 4){
        return 'Ruim'
    } else if (media_notas_homens < 7){
        return 'Regular'
    } else if (media_notas_homens <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}

function obter_desempenho_turma(media_geral_turma){
    if (media_geral_turma < 2){
        return 'Péssimo'
    } else if (media_geral_turma < 4){
        return 'Ruim'
    } else if (media_geral_turma < 7){
        return 'Regular'
    } else if (media_geral_turma <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}

function obter_maior_nota_geral(nota,maior_nota_geral){
    return Math.max(nota, maior_nota_geral)
}

function obter_menor_nota_geral(nota, menor_nota_geral){
    return Math.min(nota,menor_nota_geral)
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()