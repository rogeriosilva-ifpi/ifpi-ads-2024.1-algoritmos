import random
def main():
    print('Gerador de senhas')
    senha = (input('Você deseja gerar uma senha(S ou N): ')).upper()
    
    while senha != 'N':
        digito1 = random.randint(0,9)

        digito2 = random.randint(0,9)

        digito3 = random.randint(0,9)

        digito4 = random.randint(0,9)

        digito5 = random.randint(0,9)

        digito6 = random.randint(0,9)

        while digito2 == digito1 or digito1 < digito2 < digito1 + 2 or digito1 > digito2 > digito1 - 2 :
            digito2 = random.randint(0,9)

        
        while digito3 == digito2 or digito2 < digito3 < digito2 + 2 or digito2 > digito3 > digito2 - 2 :
            digito3 = random.randint(0,9)

        
        while digito4 == digito3 or digito3 < digito4 < digito3 + 2 or digito3 > digito4 > digito3 - 2 :
            digito4 = random.randint(0,9)

        
        while digito5 == digito4 or digito4 < digito5 < digito4 + 2 or digito4 > digito5 > digito4 - 2 :
            digito5 = random.randint(0,9)

        
        while digito6 == digito5 or digito5 < digito6 < digito5 + 2 or digito5 > digito6 > digito5 - 2 :
            digito6 = random.randint(0,9)

        print(f'Senha sugerida: {digito1}{digito2}{digito3}{digito4}{digito5}{digito6}')
        senha = (input('Você deseja gerar uma outra senha? (S ou N): ')).upper()

main()