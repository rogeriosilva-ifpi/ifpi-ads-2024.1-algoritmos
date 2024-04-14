def main():
    import random

    print('Criador de Senha Online\n---------------------')

    caracteres = int(input('Digite o Número de Caracteres da Senha : '))
    contador = 0
    # NAO TA VALIDANDO
    while contador < caracteres:
        contador += 1
        sequencia = contador
        if sequencia != contador:
            digitos = random.randint(1, 9)
        else:
            # Questao Imcompleta ( Tempo Excedente )
            digitos = random.randint(1, 9)
            print(digitos, end='')


main()
