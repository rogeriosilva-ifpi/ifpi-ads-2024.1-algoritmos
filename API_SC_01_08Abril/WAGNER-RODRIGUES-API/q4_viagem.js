import { question } from "readline-sync";

function main(){
    const origem = obter_texto("Origem: ")
    const destino = obter_texto("Destino: ")
    const valorDinheiro = obter_numero("Qual o valor da passagem em R$:")
    const valorEmMilhas = obter_numero("Qual o valor em milhas")


    //Processamento
    const milhasPadraoEmReais = calcularMilhasPadrao(valorEmMilhas)
    mostrar_texto(`Suas milhas no valor de R$70/milheiro corresponde a R$${milhasPadraoEmReais}`)
    const milhasBaratas = calcularMilhasBaratas(valorEmMilhas)
    mostrar_texto(`Suas milhas no valor de R$14.50/milheiro corresponde a R$${milhasPadraoEmReais}`)
    





}
main()

function mostrar_texto(texto){
    console.log(texto)
}

function obter_numero(mensagem){
    return Number(question(mensagem))
}
function obter_texto(mensagem){
    return question(mensagem)

}

function calcularMilhasPadrao(milhas){
    const milhasPadrao = (milhas / 1000) * 70
    return milhasPadrao
}
function calcularMilhasBaratas(milhas){
    const milhasPadrao = (milhas / 1000) * 14.50
    return milhasPadrao
}