import { get_number_in_range, get_number_min, get_positive_number, print } from '../utils/io_utils.js'

function main(){

  const cotacao_dollar = get_positive_number('Cotação Dollar em R$: ')
  const pontos_por_dollar = get_positive_number('Pontos por Dollar: ')
  const bonus_transferencia = get_number_in_range('Bonus Conversão %: ', 30, 120)
  let contador = 0
  let valor_total = 0

  let compra = get_number_min('Compra R$: ', 0)
  

  while (compra != 0){
    // Trabalho
    contador += 1
    valor_total += compra
    // TODO

    compra = get_number_min('Compra R$: ', 0)
  }

  const valor_total_uss = valor_total / cotacao_dollar
  const pontos_fatura = valor_total_uss * pontos_por_dollar
  const milhas = pontos_fatura + (pontos_fatura * bonus_transferencia / 100)

  const resultado = `
  <__^__> Pontos & Milhas <__^__>
  =============================================
  - Quantidade Compras = ${contador}
  - Valor Total Fatura = R$ ${valor_total.toFixed(2)}
  - Valor Total Fatura = US$ ${valor_total_uss.toFixed(2)}
  =============================================
  - Pontos da Fatura = ${pontos_fatura.toFixed(0)} pontos
  - Milhas Aéreas = ${milhas.toFixed(0)} milhas
  =============================================
  `

  print(resultado)
  print('Fim..')

}

main()