def main():
  emprestimo = float(input("Valor do emprestimo: "))
  juros = float(input("Juros(Ex:0.1):"))
  valor_parcela = float(input("Valor da parcela: "))

  valor_emprestimo = emprestimo
  quantidade_meses = 0
  quantidade_paga = 0

  while valor_emprestimo != 0 :
    
    vej = valor_emprestimo * juros
    valor_emprestimo = vej - valor_parcela
    quantidade_paga += valor_parcela
    quantidade_meses += 1
  
  print(f"Total do valor pago:{quantidade_paga}")
  print(f"Total de meses: {quantidade_meses}")

main()