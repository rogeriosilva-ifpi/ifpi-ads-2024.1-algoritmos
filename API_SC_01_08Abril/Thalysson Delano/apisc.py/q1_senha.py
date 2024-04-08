def main():
    import random
    
    print('Criador de Senha Online\n---------------------')
    
    caracteres = int(input('Digite o Número de Caracteres da Senha : '))
    contador = 0
    
    while contador < caracteres:
        contador += 1
        sequencia = contador
        if sequencia != contador:
            digitos = random.randint(1,9)
        else:
            digitos = random.randint(1,9)       # Questao Imcompleta ( Tempo Excedente )
            print(digitos,end='')

main()