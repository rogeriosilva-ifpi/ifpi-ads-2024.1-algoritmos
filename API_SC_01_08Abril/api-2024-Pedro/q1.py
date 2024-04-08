
import random

def main():

    print ('>>>> Gerador de senhas <<<<')

    flag = input('Deseja gerar uma senha (S/N): ')

    senha_aleatoria = 1

    while flag == "S":

        while senha_aleatoria != 0:

            senha_gerada = gerando_senha(senha_aleatoria)

            print (f'Sua senha é {senha_gerada}')
            break

        flag = input('Deseja gerar uma nova senha (S/N): ')
    
    print (f'Sua senha é {senha_gerada}')
    
    
            
def gerando_senha(senha_aleatoria):

    while senha_aleatoria != 0 :
    
        senha_aleatoria = random.randint (100000, 999999)
        
        unidade = senha_aleatoria % 10
        dezena = (senha_aleatoria % 100) // 10
        centena = (senha_aleatoria % 1000) // 100
        milhar = (senha_aleatoria % 10000) // 1000
        dezena_milhar = (senha_aleatoria % 100000) // 10000
        centena_milhar = (senha_aleatoria % 1000000) // 100000

        if unidade == dezena or unidade + 1 == dezena or unidade - 1 == dezena:

            senha_aleatoria = 1

        elif dezena == centena or dezena + 1 == centena or dezena - 1 == centena:

            senha_aleatoria = 1
        
        elif centena == milhar or centena + 1 == milhar or centena - 1 == milhar :

            senha_aleatoria = 1
            
        elif milhar == dezena_milhar or milhar + 1 == dezena_milhar or milhar - 1 == dezena_milhar:

            senha_aleatoria = 1
        
        elif dezena_milhar == centena_milhar or dezena_milhar + 1 == centena_milhar or dezena_milhar - 1 == centena_milhar:

            senha_aleatoria = 1
            
        elif centena_milhar + 1 == dezena_milhar or centena_milhar - 1 == dezena_milhar:

            senha_aleatoria = 1

        else:

            senha_aleatoria == 0
            return (senha_aleatoria)
        









    




main()