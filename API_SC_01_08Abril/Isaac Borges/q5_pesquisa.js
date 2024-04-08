import { get_entry, get_number } from "./api_utils.js"

function get_menu(){

    const escolha = get_number('O que vai fazer?  : ')

    console.log(menu)
    return escolha
}


function main(){
    let precototal = 0
    let valor = 0
    let descricao = ''
    let especificacao = ''
    let lista = `-------------------------------------`
    let escolha = get_menu()

    if (escolha === 1) {
        lista
        descricao = get_entry('Descrição do item: ')
        especificacao = get_entry('Especificação do item: ')
        valor = get_number('Valor do item: ')
        precototal += valor
        
        lista += `
        ${descricao} (${especificacao})` + `R$${valor.toFixed(2)}`

        escolha = get_menu()
    } if (escolha === 2) {
        `
        --------------------------------------------
        Valor total:                        R$${precototal}`
    }
}

main()