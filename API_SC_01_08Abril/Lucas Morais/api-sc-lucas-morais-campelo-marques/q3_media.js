import { get_text, get_natural_number, show } from "./utils/io_utils.js"

function main(){
    let total_alunos = 0
    let homens = 0
    let mulheres = 0
    let maior_nota = 0
    let menor_nota = 0
    let total_notas = 0
    let total_notas_homens = 0
    let total_notas_mulheres = 0

    let sexo = get_text('Sexo do aluno(a): ')
    let nota = get_natural_number('Nota do aluno(a): ')

    maior_nota = nota
    menor_nota = nota

    while (sexo == 'M' || sexo == 'F'){
        if (sexo == 'M'){
            total_notas += nota
            total_notas_homens += nota
            total_alunos += 1
            homens += 1
        }else{
            total_notas += nota
            total_notas_mulheres += nota
            total_alunos += 1
            mulheres += 1
        }

        if (nota > maior_nota){
            maior_nota = nota
        }

        if (nota < menor_nota){
            menor_nota = nota
        }
        
        sexo = get_text('Sexo do aluno(a): ')
        nota = get_natural_number('Nota do aluno(a): ')
    }

    const media = total_notas / total_alunos
    const media_homens = total_notas_homens / homens
    const media_mulheres = total_notas_mulheres / mulheres

    const performance_homens = calcular_performance(media_homens)
    const performance_mulheres = calcular_performance(media_mulheres)

    const desempenho_geral = calcular_desempenho(media)
    const desempenho_homens = calcular_desempenho(media_homens)
    const desempenho_mulheres = calcular_desempenho(media_mulheres)

    const relatorio = `
Total de alunos(as): ${total_alunos}
Homens: ${homens}
Mulheres: ${mulheres}
Maior nota geral: ${maior_nota.toFixed(2)}
Menor nota geral: ${menor_nota.toFixed(2)}
Média dos homens: ${media_homens.toFixed(2)}
Média das mulheres: ${media_mulheres.toFixed(2)}
Média geral: ${media.toFixed(2)}
Performance dos homens: ${performance_homens.toFixed(2)}%
Performance das mulheres: ${performance_mulheres.toFixed(2)}%
Desempenho dos homens: ${desempenho_homens}
Desempenho das mulheres: ${desempenho_mulheres}
Desempenho geral: ${desempenho_geral}
`
    show(relatorio)
}
    

function calcular_performance(media){
    const performance = media * 10
    return performance
}

function calcular_desempenho(media){
    if (media <= 2){
        return 'Péssimo'
    }else if (media <= 4){
        return 'Ruim'
    }else if (media <= 7){
        return 'Regular'
    }else if (media <= 8){
        return 'Bom'
    }else{
        return 'Excelente'
    }
}

main()