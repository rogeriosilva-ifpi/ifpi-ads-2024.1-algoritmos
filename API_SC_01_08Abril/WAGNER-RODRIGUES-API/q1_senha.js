import { question } from "readline-sync";

function main(){
    const qtd_digitos = obter_numero("Digite a quantidade de digitos: ")
    let contador_digitos = 1
    let gerador_digitos = Math.trunc(Math.random() * 10)
    

    while (qtd_digitos >= contador_digitos){






        contador_digitos++
    }

}
main()










function mostrar_texto(texto){
    console.log(texto)
}

function obter_numero(mensagem){
    return Number(question(mensagem))
}