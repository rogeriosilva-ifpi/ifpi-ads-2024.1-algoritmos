import { question } from "readline-sync";

function main(){
    const pesoAtual = obter_numero("Digite seu peso atual em kg:")
    const sexo = obter_texto('Qual o sexo sexo: ( M ou F): ')
    const kgPerda = obter_numero("Quanto você gostaria de perder em kg:")
    const tempoTreino = obter_numero("Quanto tempo irá treinar em min:")
    const frequencia = obter_numero("Quantas vezes por semana irá treinar:")



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