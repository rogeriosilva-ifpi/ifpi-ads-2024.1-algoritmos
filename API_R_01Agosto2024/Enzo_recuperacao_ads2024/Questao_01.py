print("BEM-VINDO AO ENZOAPP")

def main():
    n = int(input("De início, me diga um número N: "))
    nome = str(input("Me diga seu nome,por favor: "))
    ano = int(input("Por fim, me diga seu ano de nascimento: "))
    i = 0

    idade_pessoa = 2024 - ano
    print("Abaixo, seu nome será escrito a quantidade de vezes N.")
    print("=" * 25)
    print("{}".format(nome) * n)
    print("=" * 25)
    print("Sua idade é de {} anos".format(idade_pessoa))

    print("-" * 30)
    divisores(idade_pessoa)
    print("-" * 30)
    primo(idade_pessoa,nome)




def divisores(n):
    n1 = 0
    
    while n1 <= n:
        n1 += 1
        if n % n1 == 0:
            print("{} é um dos divisores".format(n))

def primo(n,name):
    d = 0
    maior_divisor = 0
    divisores = 0
    media_divisores = divisores / n
    while d <= n:
        if n % d == 0 and d == 1 or d == n and n / 2 != 0 and n / 3 != 0:
            d += 1
            maior_divisor = n
        else:
            divisores += d
    
    
    
    print("O nome de usuário será mostrado D vezes, sendo que D é o maior divisor primo da idade.")
    print(maior_divisor * "{}".format(name))

    if maior_divisor == 0:
        print("O nome de usuário será mostrado V vezes, sendo que V é a média dos divisores da idade.")
        print("{}".format(name) * media_divisores)

main()