from random import randint
from time import sleep

def pedir_int_min(texto, min):
    num = int(input(texto))

    if num < min:
        num = pedir_int_min(texto, min)

    return num

def pedir_string(texto):
    return str(input(texto))

def gerar_digito_aleatorio(digito_atual, digito_anterior):
    while (digito_atual == digito_anterior or digito_atual == digito_anterior - 1 or 
    digito_atual == digito_anterior + 1):
        digito_atual = randint(0, 9)

    return digito_atual

def gerar_senha(n):
    count, digito_atual, digito_anterior = 0, 0, 0
    senha = ''

    while count < n:
        digito_atual = gerar_digito_aleatorio(digito_atual, digito_anterior)
        senha += str(digito_atual)
        digito_anterior = digito_atual
        
        count += 1

    return senha

def encerrar_programa():
    print('\nEncerrando o programa...')
    sleep(3)

def main():
    continuidade = ''

    while continuidade != '|':
        n = pedir_int_min('\nQuantos dígitos a sua senha terá?(Mínimo: 4 dígitos) ', 4)
        senha = gerar_senha(n)
        print(senha)
        continuidade = pedir_string('\nPressione qualquer tecla para digitar outra senha ou '
        'pressione | para encerrar o programa: ')

    encerrar_programa()

main()
