import { question } from 'readline-sync'

function main(){
    
    let qts_mulheres = 0
    let qts_homens = 0 
    let notas_alunos = 0
    let notas_mulheres = 0
    let notas_homens = 0
    let nota = 0
    let qtd_alunos = 0
    let maior_nota_geral = Infinity
    let menor_nota_geral = -Infinity
    const alunos = Number(question('Digite o número de alunos: '))
    let sexo = question('Sexo do aluno(M/F): ')

    while(sexo === 'F' || sexo === 'M'){
        sexo = question('Digite o sexo do aluno(M/F): ')
        nota = Number(question('Nota do aluno: '))
        
        if(sexo === 'M'){
            notas_homens += nota
            qts_mulheres++
        } else {
            notas_mulheres+= nota
            qts_homens++
        }
        notas_alunos += nota
        qtd_alunos++

    }
    let maior_nota = calcular_maior_nota(nota, maior_nota_geral)
    let menor_nota = cacular_menor_nota(nota, menor_nota_geral)
    
    const media_mulheres = notas_mulheres / qts_mulheres
    const media_homens = notas_homens / qts_homens
    const media_geral = notas_alunos / alunos
    const desempenho_turma = calcular_desempenho_turma(media_geral) 
    const desempenho_mulheres = calcular_desempenho_mulheres(media_mulheres)
    const desempenho_homens = calcular_desempenho_homens(media_homens)

    console.log(`---------- RESULTADO DAS NOTAS ----------
    --------------------------------------------------------------
    Quantidade de Alunos: ${alunos}
    Quantidade Mulheres: ${qts_mulheres}
    Quantidade Homens: ${qts_homens}
    Maior Nota Geral: ${maior_nota_geral}
    Maior Nota: ${maior_nota}
    Menor Nota: ${menor_nota}
    Desempenho da Turma: ${desempenho_turma}
    Desempenho Homens: ${desempenho_homens}
    Desempenho Mulheres: ${desempenho_mulheres}
    --------------------------------------------------------------- `)
}

function cacular_menor_nota(nota, menor_nota_geral){
    return Math.min(nota, menor_nota_geral)

}

function calcular_maior_nota(nota, maior_nota_geral){
    return Math.max(nota, maior_nota_geral)
}

function calcular_desempenho_turma(media_geral){
    if (media_geral < 2){
        return 'Péssimo'
    } else if (media_geral < 4){
        return 'Ruim'
    } else if (media_geral < 7){
        return 'Regular'
    } else if (media_geral <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}
function calcular_desempenho_homens(media_homens){
    if (media_homens < 2){
        return 'Péssimo'
    } else if (media_homens < 4){
        return 'Ruim'
    } else if (media_homens < 7){
        return 'Regular'
    } else if (media_homens <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}
function calcular_desempenho_mulheres(media_mulheres){
    if (media_mulheres < 2){
        return 'Péssimo'
    } else if (media_mulheres < 4){
        return 'Ruim'
    } else if (media_mulheres < 7){
        return 'Regular'
    } else if (media_mulheres <= 8){
        return 'Bom'
    } else {
        return 'Excelente'
    }
}