# Made On Linux By José Macêdo Dos Santos Junior 2024111TADS0038.

# Antes de mais nada eu usei o random.randint pois em umas das listas foi permitido.
from random import randint


# Processamento
def gerador_de_senhas(n):
    senha = ''
    caractere = 0
    caractere_anterior = caractere
    while n > 0:
        # Apenas para escolher um valor, pois seria extenso replicar a função do 0.
        caractere = randint(0, 9)
        if caractere != caractere_anterior and caractere - 1 != caractere_anterior and caractere + 1 != caractere_anterior:
            senha += f'{caractere}'
            caractere_anterior = caractere
            n -= 1
    return senha


# Entrada e saída de dados
def main():
    n = 1
    senha_final = ''
    while n == 1:
        definir = int(input('> Digite o tamanho da senha a ser gerada:\n> '))
        senha_parcial = gerador_de_senhas(definir)
        confirmation = int(input(f'> Está satisfeito com a senha gerada: [{senha_parcial}]? (1-SIM, 2-NÃO)\n> '))
        if confirmation == 1:
            senha_final = senha_parcial
            n = 0
    print(f'> Sua senha é [{senha_final}].')


if __name__ == '__main__':
    main()
