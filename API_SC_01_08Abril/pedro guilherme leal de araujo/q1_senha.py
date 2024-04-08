#PEDRO GUILHERME LEAL DE ARAUJO

from random import randint

def pedirsenha():
    senha = []
    tamanho_pass = int(input("Qual o tamanho da senha que deseja criar? "))
    i = 0
    dig2 = -6
    while(tamanho_pass>i):
        i+=1
        dig1 = randint(0,9)
        while(dig2 == dig1 or dig2 == dig1+1 or dig1 == dig2-1):
            dig1 = randint(0,9)
        dig2 = dig1
        senha.append(dig1)
    print(f"Sua senha é {senha}") #não lembro como formatar a lista :(


def main():
    pedirsenha()
    perg = input("Está satisfeito com essa senha? ").lower()
    while(perg!="sim"):
        pedirsenha()

main()