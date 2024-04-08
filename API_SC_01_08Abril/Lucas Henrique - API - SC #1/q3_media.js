import { question } from "readline-sync"

function main(){

    const sexo = obter_palavra('Qual o sexo do aluno? ')
    
    
    while (sexo !== ){
        const nota = obter_numero('Qual a nota do aluno(a): ')

        

        return nota
    
    }    
}
function obter_palavra(mensagem){
    return question(mensagem)
}
function obter_numero(mensagem){
    return Number(question(mensagem))
}
function print(mensagem){
    return console.log(mensagem)
}

main()