import { question } from "readline-sync";

function main(){
    let idade = get_number('Idade: ')

    let contador = 0

    while (idade >= 18 && idade <= 100 && contador <= 4){
        contador++

        idade = get_number('Idade: ')
    }

    let categoria = get_text('Categoria do Quarto (S/D/T/Q): ')
    let qtd_noites_reserva = get_number('Quantidade de noites da reserva: ')
    let valor_diaria = obter_valor_diaria(categoria)
    let valor_total_reserva = obter_valor_total_reserva(valor_diaria, qtd_noites_reserva)
    let forma_pagamento = get_text('Forma de pagamento (pix/credito): ')
    let parcelas = get_number('Se for no credito, quantas parcelas? ')

    let valor_com_desconto = obter_valor_com_desconto(forma_pagamento, valor_total_reserva, parcelas)

    let resultado = `
    ----------------------------------------------------------------------
    Valor Total Por Dia R$ = ${valor_diaria.toFixed(2)}
    Quantidade de Noites = ${qtd_noites_reserva}
    Valor Total da Reserva R$ = ${valor_total_reserva.toFixed(2)}
    Forma de Pagamento: ${forma_pagamento}
    Categoria: ${categoria}
    Valor com Desconto R$ = ${valor_com_desconto.toFixed(2)}
    ----------------------------------------------------------------------
    `

    console.log(resultado)
}

function obter_valor_com_desconto(forma_pagamento, valor_total_reserva, parcelas){
    let valor_com_desconto = 0

    if (forma_pagamento == 'pix'){
        valor_com_desconto = obter_valor_pagamento_pix(valor_total_reserva)
    } else {
        valor_com_desconto = obter_valor_pagamento_credito(valor_total_reserva, parcelas)
    }

    return valor_com_desconto
}

function obter_valor_pagamento_credito(valor_total, quantidade_parcelas){
    let valor_juros = (valor_total * 10.5 * quantidade_parcelas) / 100
    return valor_juros
}

function obter_valor_pagamento_pix(valor_total){
    let valor_com_desconto = valor_total - (valor_total * (5/100))
    return valor_com_desconto
}

function obter_valor_total_reserva(valor_diaria, noites){
    let valor_total_reserva = valor_diaria * noites
    return valor_total_reserva
}

function obter_valor_diaria(categoria){
    let valor_diaria = 0

    if (categoria == 'S'){
        valor_diaria = 200
    } else if (categoria == 'D'){
        valor_diaria = 280
    } else if (categoria == 'T'){
        valor_diaria = 360
    } else {
        valor_diaria = 440
    }

    return valor_diaria
}

function get_number(texto){
    let numero = Number(question(texto))
    return numero
}

function get_text(mensagem){
    let texto = question(mensagem)
    return texto
}

main()