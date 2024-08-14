def main():
    idade = int(input('Idade: '))
    quarto_atual = 0

    while idade > 0 or (idade == 0 and quarto_atual > 0):

        if idade > 0:
            quarto_atual += 1

        # encerrar:
        if idade == 0 or quarto_atual == 4:
            print('Novo Quarto')
            quarto_atual = 0

        idade = int(input('Idade: '))

    print('Fim por fim feito por mim ;)')


main()
