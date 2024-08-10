import { question } from "readline-sync";
import { get_number, maior_numero, menor_numero, media, print } from "/Users/paulo/Meus Documentos/../OneDrive/Documentos/api_sc- REC/utils.js";

function main (){
    // entrada 
    const numero_cidades = get_number('Informe numero de Cidades: ')

    // processamento
    let renda = 10
    let maior_renda = 0
    let menor_renda = 100000000
    let total_cidades = 0
    let renda_total = 0
    renda = get_number("Digite Renda Per Capita: ")
    while(renda > 0){
        maior_renda = maior_numero(renda, maior_renda)
        menor_renda = menor_numero(renda,menor_renda)
        total_cidades++
        renda_total +=renda
        renda = get_number("Digite Renda Per Capita: ")
        
    }
   
    // saida
    const renda_media = (media(renda_total, numero_cidades)).toFixed(2)


    const display = `
    ================================================
    Maior Renda: R$${maior_renda}
    Menor Renda: R$${menor_renda}
    Renda Media: R$${renda_media}
    ================================================
    `
    console.log(display)
}
main()


// funçoes
