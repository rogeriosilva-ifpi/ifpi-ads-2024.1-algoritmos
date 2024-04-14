import { question } from "readline-sync"

function classificar_media(media){
    if(media < 2){
        return "Péssimo"
    }else if(media < 4){
        return "Ruim"
    }else if(media < 7){
        return "Regular"
    }else if(media < 8){
        return "Bom"
    }else{
        return "Excelente"
    }
}

function calcular_media(qtd_alunos, soma_notas){
    const media = soma_notas/qtd_alunos
    return media
}

function show_in_console(mensagem){
    console.log(mensagem)
}

function get_number_in_range(min, max, mensagem){
    const num = Number(question(mensagem))
    if(num >= min && num <= max){
        return num
    }else{
        show_in_console("Número fora do intervalo, digite novamente: ")
        get_number_in_range(min, max, mensagem)
    }
}

function main(){
    let sexo = "m"
    let nota

    let qtd_homens = 0
    let qtd_mulheres = 0

    let soma_notas_homens = 0
    let soma_notas_mulheres = 0
    let qtd_total_alunos = 0

    let maior_nota = 0
    let menor_nota = 11//coloquei um número fora do intervalo para que sempre o primeiro aluno tenha a menor nota, idenpeente de qual seja

    while(sexo === "m" || sexo === "f"){
        // COMENTARIO: Deveria perdir antes e ao final
        sexo = question("Insira o sexo do aluno(m/f): ")
        if(sexo === "m" || sexo === "f"){
            // nunca será outra opcao
            let nota = get_number_in_range(1, 10, "Digite a nota do aluno: ")
        
            if(nota > maior_nota){
                maior_nota = nota
            }else if(nota > menor_nota){
                menor_nota = nota
            }

            if(sexo === "m"){
               qtd_homens+=1
               soma_notas_homens += nota
            }else if(sexo === "f"){
               qtd_mulheres+=1
               soma_notas_mulheres+=nota
            }
            qtd_total_alunos+=1
    }
    }

    const media_turma = calcular_media(qtd_total_alunos, (soma_notas_homens+soma_notas_mulheres))
    const media_homens = calcular_media(qtd_homens, soma_notas_homens)
    const media_mulheres = calcular_media(qtd_mulheres, soma_notas_mulheres)

    const classificação_turma = classificar_media(media_turma)
    const classificação_homens = classificar_media(media_homens)
    const classificação_mulheres = classificar_media(media_mulheres)

    show_in_console(`
    ============================================================
    Alunos da turma: ${qtd_total_alunos}
    Homens = ${qtd_homens}
    Mulheres = ${qtd_mulheres}
    Desempenho da turma = ${classificação_turma} ${round(media_turma*10, 2)}%
    Desempenho homens = ${classificação_homens} ${round(media_homens*10, 2)}%
    Desempenho mulheres = ${classificação_mulheres} ${round(media_mulheres*10, 2)}%
    ============================================================
    `)



}
main()