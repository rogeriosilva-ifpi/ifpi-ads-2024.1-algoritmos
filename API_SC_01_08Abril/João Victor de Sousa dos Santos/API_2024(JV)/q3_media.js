import { get_number, get_string , print} from "./utils/io_utils.js"

function main(){
    
    let sexo = "M"
    let nota = 0
    let c = 1

    let maior_nota = 0
    let menor_nota = 10
    let somatorio_notas = 0
    let media_geral = 0
    let notas_homem = 0
    let nota_mulher = 0
    let qtd_H = 0
    let qtd_M = 0

    print("--------- ALUNO 1 ---------")
    sexo = get_string("sexo: ")

    while (sexo == "M" || sexo == "F"){
        nota = get_number("nota: ")

        while(nota__ta_no_intervalo(nota)){
            nota = get_number("nota fora do intervalo (0 -10), por favor digite novamente \nnota:")
        }

        print("nota aceita")

        maior_nota = verificar_maior_nota(nota, maior_nota)
        menor_nota = veificar_menor_nota(nota, menor_nota)
        somatorio_notas += nota
        c++
        //verificar_nota_mulher_ou_homem(sexo, nota)
        if(sexo == "M"){
            notas_homem += nota
            qtd_H += 1
        }else{
            nota_mulher += nota
            qtd_M += 1
        }

        print(`--------- ALUNO ${c} ---------`)
        sexo = get_string("sexo: ")
    }
        media_geral = somatorio_notas/(c-1)
        let media_homem = notas_homem/qtd_H
        let media_mulher = nota_mulher/qtd_M
        let performance_H = calcular_performance(media_homem, media_geral)
        let performance_M = calcular_performance(media_mulher, media_geral)

        let porcentagem_turma = media_geral*10
        let desempenho_turma = calcular_desempenho(porcentagem_turma)
        let desempenho_homens = calcular_desempenho(performance_H)
        let desempenho_mulher = calcular_desempenho(performance_M)


    const resultado = `
    ----------- RESULTADOS ----------------
    Maior Nota: ${maior_nota .toFixed(2)}
    Menor Nota: ${menor_nota .toFixed(2)}
    Media Geral: ${media_geral .toFixed(2)}
    Performance Mulher: ${performance_M .toFixed(1)} %
    Performanee Homem: ${performance_H.toFixed(1)}
    Quantidade de alunos: ${c-1}
    Quantidade de homens: ${qtd_H}
    Quantidade de mulheres: ${qtd_M}
    Desempenho turma: ${desempenho_turma}
    Desempenho homens: ${desempenho_homens}
    Desempenho mulher: ${desempenho_mulher}`

    print(resultado)
}

function calcular_desempenho(percent){
    let desempenho = percent/10

    if(desempenho >=0 && desempenho <= 2){
        return "Péssimo (0 a 2)"
    } else if(desempenho >= 2 && desempenho <= 4){
        return "Ruim (2 a 4)"
    } else if(desempenho <= 4 && desempenho <= 7){
        return "Regular (4 a 7)"
    } else if(desempenho <= 7  && desempenho <= 8){
        return "Bom (7 a 8)"
    } else{
        return "Excelente (8 a 9)"
    }
}

function calcular_performance(mediaSexo, media){
    let performance = (mediaSexo*100/media)/2
    return performance
}

function veificar_menor_nota(nota, menor_nota){
    if (nota < menor_nota){
        return nota
    } else{
        return menor_nota
    }
}

function verificar_maior_nota(nota, maior_nota){
    if (nota > maior_nota){
        return nota
    } else{
        return maior_nota
    }
}

function verificar_nota_mulher_ou_homem(s, n){
    if(s =="M"){
        notas_homem += n
        qtd_H += 1
    }else{
        nota_mulher += n
        qtd_M += 1
    }
}

function nota__ta_no_intervalo(nota){
    if (nota>=0 && nota <= 10){
        return false
    }else{
        return true
    }
}

main()