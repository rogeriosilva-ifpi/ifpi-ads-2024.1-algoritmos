import { question } from "readline-sync"

function main(){

let quantidade_feminino = 0
let quantidade_masculino = 0
let quantidade_alunos = 0

let notas_geral_feminino = 0
let notas_geral_masculino = 0
let notas_geral_alunos = 0

//computar notas

let maior_nota_geral
let menor_nota_geral
let media_geral_turma = notas_geral_alunos / quantidade_alunos

let media_notas_feminino = notas_geral_feminino / quantidade_feminino
let media_notas_masculino = notas_geral_masculino / quantidade_masculino

let porcentagem_nota_homens = media_notas_masculino*100
let porcentagem_nota_mulheres = media_notas_feminino*100


//calcular classificaçao

let classificacao_feminino = ``
let classificacao_masculino = ``
let classificacao_turma = ``

while(true){

    let pergunta_sexo = question(`Digite o sexo do Aluno(a) --> `)

    if(pergunta_sexo !== `M` && pergunta_sexo !== `F`){

        console.log(`encerrando...`)
        break;

    }else{

        let pergunta_nota = Number(question(`Digite a nota do Aluno(a) --> `))


        if(pergunta_sexo === `M`){  //masculino

        notas_geral_alunos += pergunta_nota
        notas_geral_masculino += pergunta_nota
        quantidade_alunos++
        quantidade_masculino++

        }
        if(pergunta_sexo === `F`){  //feminino

        notas_geral_alunos += pergunta_nota
        notas_geral_feminino += pergunta_nota
        quantidade_alunos++
        quantidade_feminino++

        }


        //feminino

        if(media_notas_feminino >= 0 && media_notas_feminino <= 2){

            classificacao_feminino = `Pessimo`
        }else if(media_notas_feminino >= 2 && media_notas_feminino <= 4){

            classificacao_feminino = `Ruim`

        }else if(media_notas_feminino >= 4 && media_notas_feminino <= 7 ){

            classificacao_feminino = `Regular`
        }else if(media_notas_feminino > 7 && media_notas_feminino < 8){
            classificacao_feminino = `Bom`
        }else{

            classificacao_feminino = `Excelente`
        }

        //masculino

        if(media_notas_masculino >= 0 && media_notas_masculino <= 2){

            classificacao_masculino = `Pessimo`
        }else if(media_notas_masculino >= 2 && media_notas_masculino <= 4){

            classificacao_masculino = `Ruim`

        }else if(media_notas_masculino >= 4 && media_notas_masculino <= 7 ){

            classificacao_masculino = `Regular`
        }else if(media_notas_masculino > 7 && media_notas_masculino < 8){
            classificacao_masculino = `Bom`
        }else{

            classificacao_masculino = `Excelente`
        }

        //TURMA

        if(media_geral_turma >= 0 && media_geral_turma <= 2){

            classificacao_turma = `Pessimo`
        }else if(media_geral_turma >= 2 && media_geral_turma <= 4){

            classificacao_turma = `Ruim`

        }else if(media_geral_turma >= 4 && media_geral_turma <= 7 ){

            classificacao_turma = `Regular`
        }else if(media_geral_turma > 7 && media_geral_turma < 8){
            classificacao_turma = `Bom`
        }else{

            classificacao_turma = `Excelente`
        }

    }

}

const resultado = (`
        -----------------------------
        ALUNOS TOTAL --> ${quantidade_alunos} alunos
        ALUNOS TOTAL FEMININO --> ${quantidade_feminino} alunas
        ALUNOS TOTAL MASCULINO --> ${quantidade_masculino} alunos
        -----------------------------
        DESEMPENHO DA TURMA --> ${classificacao_turma}
        DESENPENHO FEMININO --> ${classificacao_feminino}
        DESEMPENHO MASCULINO --> ${classificacao_masculino}
        -----------------------------`)

        console.log(resultado)

}
main()