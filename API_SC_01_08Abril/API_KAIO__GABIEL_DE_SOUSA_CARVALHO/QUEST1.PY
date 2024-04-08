import random

def main():
    
    tamanho = int(input('Quantos numeros deseja que sua senha tenha: '))
    
    feedbeck = 'N'

    while feedbeck != 'S':

        flag = 0
        senha = ''
        numero = 0

        while flag != tamanho:

            gerar_numero = random.randint(0,9)

            if gerar_numero == numero - 1:
                flag += 0
            elif gerar_numero == numero + 1 :
                flag += 0
            elif gerar_numero == numero:
                flag += 0
            else:
                senha += str(gerar_numero)
                flag += 1

            numero = gerar_numero

        print(f'{senha}')
        
        feedbeck = str(input('Voce ficou satisfeito com sua senha(S/N): '))

    print(f'Obrigado por usar nosso sismeta!')

main()
