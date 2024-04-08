import { get_entry, get_number } from "./api_utils.js"

//FUNÇÃO DE TRABALHO
function get_media(notatotal, n_alunos){
    return notatotal / n_alunos

}

function get_desempenho(media){
    let desempenho = 'Sem informação'

    if (media < 2){
        desempenho = 'PÉSSIMO'
    } else if (media < 4) {
        desempenho = 'RUIM'
    } else if (media < 7) {
        desempenho = 'REGULAR'
    } else if (media < 8) {
        desempenho = 'BOM'
    } else if (media <= 10) {
        desempenho = 'EXCELENTE'
    }

    return desempenho
}


// FUNÇÃO DE ENTRADA ADICIONADA NESSA QUESTÃO
function get_number_in_range(mensagem, min, max){
    const numero = get_number(mensagem)
    
    if (numero < min || numero > max){
        console.log('Número inválido!')
        return get_number_in_range(mensagem, min, max)
    }

    return numero
}   

function enter_to_continue(entry){
    const enter = get_entry(entry)

    return enter
}


// MAIN
function main(){
    console.log('   COMPUTAR NOTAS DOS ALUNOS NA PROVA   ')

    //Notas variaveis
    let nota1, media_geral, performance_f, performance_m, media_m, media_f
    //maior e menor
    let maior_nota = 0
    let menor_nota = 10
    //totais
    let notatotal = 0
    let notatotal_m = 0
    let notatotal_f = 0
    // Contagens 
    let num_alunos = 0
    let num_mulheres = 0 
    let num_homens = 0
    // Variaveis de mensagem 
    let msg_sexo = ''
    let msg_parcial 

    let sexo = 'M'
    sexo = get_entry('Qual o sexo do(a) aluno(a)? ("M" = masculino; "F" = feminino)   : ')
    while (sexo === 'M' || sexo === 'F'){
        
        if (sexo === 'M'){ // Mudar a proxima mensagem de acordo com o sexo indicado
            msg_sexo = 'do aluno'
        } else {
            msg_sexo = 'da aluna'
        }
        //PEDIR E CALCULAR A NOTATOTAL
        nota1 = get_number_in_range(`Qual a nota ${msg_sexo}? : `, 0, 10)
        notatotal += nota1
        num_alunos++
        
        if (sexo === 'F'){
            num_mulheres++
            notatotal_f += nota1
            
        } else {
            num_homens++
            notatotal_m += nota1
        }

        //CALCULAR MÉDIA
        media_geral = get_media(notatotal, num_alunos)
        media_m = get_media(notatotal_m, num_homens)
        performance_m = media_m * 10
        media_f = get_media(notatotal_f, num_mulheres)
        performance_f = media_f * 10

        // Ver qual a maior nota 
        if (nota1 >= maior_nota){
            maior_nota = nota1
        } if (nota1 <= menor_nota){
            menor_nota = nota1
        }

        msg_parcial =  `
        --------------------------------------
    
            Maior nota geral      : ${maior_nota.toFixed(1)}
            Menor nota geral      : ${menor_nota.toFixed(1)}
            Média geral           : ${media_geral.toFixed(1)}
            Performance masculina : ${performance_m.toFixed(1)}%
            Performance feminina  : ${performance_f.toFixed(1)}%
        
            PRESSIONE ENTER 
    
        --------------------------------------
        `
        //
        console.log(msg_parcial)
        enter_to_continue('')
        console.clear()

        sexo = get_entry('Qual o sexo do(a) aluno(a)? ("M" = masculino; "F" = feminino)   : ')
    }

    console.clear()

    const desempenho_turma = get_desempenho(media_geral)
    const desempenho_homens = get_desempenho(media_m)
    const desempenho_mulheres = get_desempenho(media_f)

    const msg_final = `
    --------------------------------------
        RELATÓRIO FINAL

        Maior nota geral      : ${maior_nota.toFixed(1)}
        Menor nota geral      : ${menor_nota.toFixed(1)}
        Média geral           : ${media_geral.toFixed(1)}
        Performance masculina : ${performance_m.toFixed(1)}%
        Performance feminina  : ${performance_f.toFixed(1)}%
    
        Número de alunos      : ${num_alunos}
        Número de homens      : ${num_homens}
        Número de mulheres    : ${num_mulheres}

        Desempenho da turma   : ${desempenho_turma}
        Desempenho masculino  : ${desempenho_homens}
        Desempenho feminino   : ${desempenho_mulheres}

    --------------------------------------
    `
    
    console.log(msg_final)
}



main()