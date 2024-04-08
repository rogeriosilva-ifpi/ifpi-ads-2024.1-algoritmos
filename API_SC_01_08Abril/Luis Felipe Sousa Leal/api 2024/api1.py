def main():
    while True:
        N=int(input('Quantos digitos tera a senha? '))
        contador=0
        senha= ' '
        while contador<N:
            digitos=str(input())
            senha+=digitos
            contador+=1
        resposta=input('Voce esta satisfeito com a sua senha(s,n)? ')
        if resposta=='s' :
            break
    
    print(f'A sua senha é {senha}')
main()
#MAL FEITA  E INCOMPLETA