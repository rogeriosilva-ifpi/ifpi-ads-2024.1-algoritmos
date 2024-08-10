def get_number(entrada) :
    numero = float(input(entrada))

    return numero


def calcular_media(total, vezes) :
    media = total/vezes

    return media

def main() :
    nome = input("Qual o seu nome? : ")
    ano_nascimento = get_number("Qual seu ano de nascimento? : ")
    idade = 2024 - ano_nascimento
    print(f"\nA sua idade é {idade} anos! \n")

    comparacao_divisores = 0
    divisores_total = 0
    maior_primo = 0
    contador = 0
    
    
    while comparacao_divisores < idade :
        comparacao_divisores += 1

        if idade % comparacao_divisores == 0 :
            contador += 1
            print(f"[{contador}º divisor] {comparacao_divisores}")
            divisores_total += comparacao_divisores

            if comparacao_divisores % 2 > 0 and comparacao_divisores % 3 > 0 and comparacao_divisores% 5 > 0 and comparacao_divisores % 7 > 0:
                if comparacao_divisores > 1 :
                    maior_primo = comparacao_divisores
            elif comparacao_divisores == 2 or comparacao_divisores == 3 or comparacao_divisores == 5 or comparacao_divisores == 7 :
                maior_primo = comparacao_divisores

    
    if maior_primo == 0 :
        media_divisores = calcular_media(divisores_total, contador)
        print(f"\n Não há divisores primos entre os dividores da sua idade, devido a isso, vou escrever seu nome {media_divisores}!\n")
        

        while media_divisores > 0 :
            media_divisores -= 1
            print(f"{nome}")
    else : 
        print(f"\n O maior divisor primo entre os dividores da sua idade é {maior_primo}!\n")
        contador_primos = maior_primo

        while contador_primos > 0 :
            contador_primos -= 1
            print(f"{nome}")
            




main()