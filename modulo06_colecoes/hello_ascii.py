def main():
  nome = input('Nome: ')

  for letra in nome:
    cod_letra_maiusculo = ord(letra) - 32
    linha = f'{ord(letra)} \t- {letra} \t {cod_letra_maiusculo} - {chr(cod_letra_maiusculo)}'
    print(linha)


main()