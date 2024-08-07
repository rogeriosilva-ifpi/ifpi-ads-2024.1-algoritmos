def main():
    n = int(input('Quantos elementos? '))
    recursiva(0, 1, n + 1)

    # elemento = 0
    # for razao in range(1, n + 1):
    #     elemento = elemento + razao
    #     print(elemento)


def recursiva(acc: int, iteracao: int, limite: int):
    # criterio de parada
    if iteracao >= limite:
        return

    # trabalho
    acc = acc + iteracao
    print(acc)

    # chamar a si mesmo + convergencia de dados
    recursiva(acc, iteracao + 1, limite)


main()
