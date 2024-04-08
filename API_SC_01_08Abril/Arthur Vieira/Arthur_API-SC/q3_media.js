import { pede_numero_positivo_com_zero, pergunta, print} from "./util.js"

function main(){
    print(`
    Nota dos Alunos!
    ========================
    Para parar digite Sexo
    diferente de "M" OU "F"!
    ========================
    `)
    //Entrada
    let sexo = pergunta(`
    =======================
    Digite o sexo do Aluno:
    M - Masculino 
    F - Feminino
    =======================
    `).toUpperCase()
    let nota = pede_numero_positivo_com_zero("Digite a nota do aluno: ")

    //Processamento
    let qtd_alunos = 0
    let qtd_alunos_homens = 0
    let qtd_alunos_mulheres = 0
    let notas_masculinos = 0
    let notas_femininas = 0
    let notas_totais = 0
    let maior_nota = nota
    let menor_nota = nota

    while(sexo === "F" || sexo === "M"){
        if(nota > maior_nota){
            maior_nota = nota
        }
        else if(nota < menor_nota){
            menor_nota = nota
        }
        if(sexo === "M"){
            qtd_alunos++
            qtd_alunos_homens++
            notas_totais += nota
            notas_masculinos += nota
        }
        else if(sexo === "F"){
            qtd_alunos ++
            qtd_alunos_mulheres++
            notas_totais += nota
            notas_femininas += nota
        }

        sexo = pergunta(`
        =======================
        Digite o sexo do Aluno:
        M - Maculino 
        F - Feminino
        =======================
        `).toUpperCase()
        nota = pede_numero_positivo_com_zero("Digite a nota do proximo aluno: ")
    }

    const media_geral = (notas_totais / qtd_alunos).toFixed(1)
    const media_masculino = (notas_masculinos / qtd_alunos_homens)
    const media_feminina = (notas_femininas / qtd_alunos_mulheres)
    const analisar_desempenho_geral = verificar_desempenho(media_geral)
    const analisar_desempenho_masculino = verificar_desempenho(media_masculino)
    const analisar_desempenho_feminino = verificar_desempenho(media_feminina)

    //Saida
    console.clear()
    const final = `
    Resultado
    =====================
    Quantidade de Alunos: ${qtd_alunos}
    Alunos Homens:${qtd_alunos_homens}
    Alunas Mulheres: ${qtd_alunos_mulheres}
    Desempenho Turma: ${analisar_desempenho_geral}
    Desempemnho Masculino:${analisar_desempenho_masculino}
    Desempenho Feminino: ${analisar_desempenho_feminino}
    Maior Nota: ${maior_nota}
    Menor Nota: ${menor_nota}
    Media Geral: ${media_geral}
    =====================
    `
    print(final)
}
main()

function verificar_desempenho(media){
    if(media <= 2){
    return "Pessimo"
    }
    else if(media <= 4){
    return "Ruim"
    }
    else if(media <= 7){
    return "Ruim"
    }
    else if(media <= 8){
    return "Ruim"
    }
    else if(media <= 10){
    return "Ruim"
    }
}

function verificar_nota(nota){
    while(nota > 10){
        nota = pede_numero_positivo_com_zero("Digite uma nota ")
    }
}