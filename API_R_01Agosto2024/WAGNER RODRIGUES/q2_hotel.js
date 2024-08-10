import { question } from "readline-sync";

function main(){
    

}
main()


function obter_texto(mensagem){
    return question(mensagem)
}

function obter_numero (texto){
    return Number(question(texto))
}
function mostrar_texto(mensagem){
    console.log(mensagem)
}