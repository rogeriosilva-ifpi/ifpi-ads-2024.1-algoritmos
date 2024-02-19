def main():
  print('**** BenTo10 ****')

  binario = int(input('Binário(4 dígitos): ')) 
  
  decimal = converter_decimal(binario)

  print(f'O Numero binário digitado é em Decimal = {decimal}')


def converter_decimal(binario):
  M = binario // 1000
  resto = binario % 1000
  C = resto // 100
  resto = resto % 100
  D = resto // 10
  U = resto % 10

  decimal = M*8 + C*4 + D*2 + U*1
  return decimal


main()