def main():
    qtd = int(input('Quantidade de Cidades: '))
    renda = float(input('Renda: '))
    contador = 0

    while contador < qtd and renda > 0:

        renda = float(input('Renda: '))
        contador += 1


main()
