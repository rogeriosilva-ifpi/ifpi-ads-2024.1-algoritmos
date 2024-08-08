def main():
  r = int(input("Valor alvo: ")) # Valor alvo
  
  anterior = int(input("primeiro numero: "))
  num = int(input("segundo numero: "))

  while num + anterior != r:
    anterior = num # Coloca o ultimo valor digitado para ser o anterior
    num = int(input("Digite um valor: ")) # Atualiza o ultimo valor
  
  print(f"{anterior} + {num} = {r}") # Exibe a soma dos ultimos números, quando a condição do while for cumprida


main()
