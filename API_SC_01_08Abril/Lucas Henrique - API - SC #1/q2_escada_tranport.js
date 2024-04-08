import { question } from "readline-sync"

function main(){

    const peso_atual = obter_numero('Qual seu peso atual? ')
    const sexo = obter_palavra('Voçe é Homem ou Mulher? ')
    const perda_kilos = obter_numero('Quantos quilos deseja perder? ')
    const atv_dias = obter_numero('Quantos dias na semana ira realizar atv fisica? ')
    const tmp_treino = obter_numero('Quanto tempo de treino por dia? ')

    



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