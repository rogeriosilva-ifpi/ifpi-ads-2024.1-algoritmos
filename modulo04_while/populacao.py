
def main():
    cidade_a = 200_000
    cidade_b = 800_000
    cont_anos = 0

    while (cidade_a <= cidade_b):
        cidade_a *= 1.035
        cidade_b *= 1.0135
        cont_anos += 1

        print(f'População da Cidade A no ano {cont_anos}: {cidade_a:.2f}')
        print(f'População da Cidade B no ano {cont_anos}: {cidade_b:.2f}')

    print(
        f'A população da Cidade B ultrapassou a população da cidade A no ano {cont_anos}')


main()
