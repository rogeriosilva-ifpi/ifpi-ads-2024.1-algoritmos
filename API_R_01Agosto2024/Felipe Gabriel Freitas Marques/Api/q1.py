def main():
    nome = input("Informe seu nome: ")
    ano_de_nascimento = int(input("Informe seu ano de nascimento: "))
    idade = 2024 - ano_de_nascimento
    count = 1
    maior_primo = 0
    count_anterior = 0
    
    print("Os divisores da sua idade são:")
    
    while count <= idade:
        if idade % count == 0:
            print(count)
            if count % count == 0 and count % 3 != 0 and count % 5 != 0 and count % 7 != 0 and count % 2 != 0 :
                if count > count_anterior:
                    maior_primo = count
                count_anterior = count
        count += 1
    
    print(f"O maior divisor primo da sua idade é: {maior_primo}")
    
    count2 = 0
    while count2 < maior_primo:
        print(nome)
        count2 += 1

main()
