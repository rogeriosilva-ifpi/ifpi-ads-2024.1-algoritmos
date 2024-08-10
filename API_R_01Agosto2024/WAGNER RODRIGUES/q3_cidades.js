import { question } from "readline-sync";

function main(){
    let qtd_cidades = obter_numero("Quantas cidades: ")

    if (qtd_cidades === 0){
        mostrar_texto("FIM")
    }


    // Pedir renda
    let contador_renda = 0
    let maiorRenda = 0
    let menorRenda = 0
    let somaRendas = 0
    while(qtd_cidades > 0){
        const renda_cidade = obter_numero("Qual a renda da cidade: ")

        somaRendas = somaRendas + renda_cidade

        if (renda_cidade > maiorRenda){
            maiorRenda = renda_cidade
        }else{
            menorRenda = renda_cidade
        }

        qtd_cidades--
        contador_renda++
    }

    mostrar_texto(`Contador renda ${contador_renda}`)
    //Calcular Renda Média
    const RendaMedia = somaRendas / contador_renda
    mostrar_texto(`A renda média das cidades é: R$${RendaMedia}`)
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