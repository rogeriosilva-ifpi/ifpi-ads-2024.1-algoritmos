def main():
  print('****** BBB30 & Paraíba *******')  
  print('------------------------------') 
  cupom_perc = int(input('Valor do Desconto (%): '))
  qtd_max_vendas = int(input('Limite de Compras: '))
  limite_desconto_rs = float(input('Limite de R$: '))
  contador_vendas = 0
  somatorio_descontos_concedidos = 0
  somatorio_vendas = 0

  while contador_vendas < qtd_max_vendas and somatorio_descontos_concedidos < limite_desconto_rs:
    valor_compra = float(input('Valor R$: '))
    desconto_compra = valor_compra * (cupom_perc/100)
    
    # Verificacao de limite de desconto residual
    desconto_total_disponivel = limite_desconto_rs - somatorio_descontos_concedidos
    if desconto_compra > desconto_total_disponivel:
      desconto_compra = desconto_total_disponivel
    
    print(f'Parabéns Cupom aceito, você ganhou R$ {desconto_compra:.2f}')
    
    contador_vendas += 1
    somatorio_descontos_concedidos += desconto_compra
    somatorio_vendas += valor_compra
  

  # Resultados
  somatorio_vendas_liquido = somatorio_vendas - somatorio_descontos_concedidos

  print('------------------------------') 
  resultado = f'''
  >>>> RESUMO DA PROMO <<<<<
  Cupom: {cupom_perc}%
  Quantidade Limite: {qtd_max_vendas}
  Valor Limite Desc: R$ {limite_desconto_rs}
  ---------
  Vendas Realizadas: {contador_vendas}
  Vendas (em R$)   : {somatorio_vendas}
  Descontos (em R$): {somatorio_descontos_concedidos}
  Vendas (Líq. R$) : {somatorio_vendas_liquido}
  '''

  print(resultado)
  print('------------------------------') 



main()