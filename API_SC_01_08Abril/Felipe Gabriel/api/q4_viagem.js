import { question } from "readline-sync";

function main() {
    let origem = question("Qual o local de origem?: ")
    let destino = question("Qual o local de destino?: ")
    let passagemsite = Number(question("Qual o valor da passagem no site?: "))
    let milhassite = Number(question("Qual o valor das milhas no site?: "))
    let milhasbaratas = 14.50
    let milhaspadrao = 70.00

    let valormilhapadrão = (milhassite / 1000) * milhaspadrao
    let valormilhabarata = (milhassite / 1000) * milhasbaratas

    let melhoropção = ""

    if (valormilhapadrão < valormilhabarata && valormilhapadrão < passagemsite) { 
        melhoropção = "milhas padrão"
    }
    else if (valormilhabarata < valormilhapadrão && valormilhabarata < passagemsite) { 
        melhoropção = "milhas baratas"
    }
    else if (passagemsite < valormilhabarata && passagemsite < valormilhapadrão) { 
        melhoropção = "pelo site"
    }


    console.log(`
    > Viagem de ${origem} até ${destino}
    ------------- MilhasRomanticas -------------
    Valor da passagem no site: ${passagemsite.toFixed(2)}
    Valor em milhas do site: ${milhassite}
    Valor da passagem com milhas padrão: ${valormilhapadrão.toFixed(2)}
    Valor da passagem com milhas baratas:${valormilhabarata.toFixed(2)}
    --------------------------------------------
    A melhor opção de compra é ${melhoropção}
    `)   
}
main()