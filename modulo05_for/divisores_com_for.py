def main():
    # Entrada
    numero = int(input('> Digite um número:\n> '))

    # Processamento
    valores = obter_divisores(numero)

    # Saídas
    result = f'O número {numero} tem {len(valores)} divisdores'
    print(result)
    # print('São eles: ', ', '.join(list(map(str, valores))))
    for item in valores:
        print(item)


def obter_divisores(numero: int):
    divisores = []

    for i in range(1, numero + 1):
        if numero % i == 0:
            divisores.append(i)

    return divisores


# run
main()
