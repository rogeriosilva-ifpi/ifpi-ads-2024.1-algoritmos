import { get_natural_number, get_text, show } from "./utils/io_utils.js"

function main(){
    let itens = '---- PESQUISA DE PREÇOS ---- \n'
    let valor_total = 0
    let contador = 0
    let status = 1

    while (status != 0){
        show(`
Menu inicial
--------------------------------
1 - Incluir item
2 - Imprimir lista de itens
0 - Sair`)
        const resposta = get_natural_number('Digite a opção desejada: ')

        if (resposta == 1){
            contador += 1

            const descricao = get_text('Descrição: ')
            const especificacao = get_text('Especificação: ')
            const valor = get_natural_number('Valor: ')

            itens += `${contador} - ${descricao} (${especificacao})     R$ ${valor.toFixed(2)} \n`

            valor_total += valor            
        }else if (resposta == 2){
            itens += `--------------------------------\nValor total:          R$ ${valor_total.toFixed(2)}`
            show(itens)
        }else if (resposta == 0){
            status -= 1
        }
    
    }

}

main()