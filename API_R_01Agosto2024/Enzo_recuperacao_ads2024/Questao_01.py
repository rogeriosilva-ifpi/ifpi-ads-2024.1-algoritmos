print("BEM-VINDO AO ENZO APP")

def main():
    print("=" * 20)
    const n = int(input("Antes de tudo, me diga um número N: "))
    const nome = str(input("Agora, me diga seu nome: "))
    const ano_nascimento = int(input("Okay, me diga seu ano de nascimento: "))
    const ano_atual_checagem = int(input("Fui criado em 2024, mas me diga o ano atual apenas por via das dúvidas: "))
    var count = 0
    var divisor = 0
    var maior_divisor = 0
    print("=" * 20)
    
    print("-" * 25)
    const idade = ano_atual_checagem - ano_nascimento
    multiplica_n_vezes(nome, n)
    print("{}, sua idade é de {} anos".format(nome, idade))
    print("-" * 25)

    while count < idade:
        count += 1
        divisor += 1
        divisores = 0
        soma_divisores = 0

        var divisao = idade / divisor
        if divisao % 10 == 0:
            divisores += 1
            soma_divisores += divisao
            print("{} é divisor de {}".format(divisao, idade))
            
        if divisores == 3 or divisores == 5 or divisores == 7 or divisores == 11 or divisores == 13 or divisores == 17 or divisores == 19 or divisores == 23 or divisores == 31:
            if divisores == 31:
                maior_divisor = 31
            elif divisores == 23:
                maior_divisor = 23
            elif divisores == 19:
                maior_divisor = 19
            elif divisores == 17:
                maior_divisor = 17
            elif divisores == 13:
                maior_divisor = 13
            elif divisores == 11:
                maior_divisor = 11
            elif divisores == 7:
                maior_divisor = 7
            elif divisores == 5:
                maior_divisor = 5
            else divisores == 3:
                maior_divisor = 3

            print("{}".format(nome) * maior_divisor)
        else:
            print("Não há números primos entre os divisores da sua idade")
            return divisao_v_vezes(soma_divisores, divisores, nome)

def divisao_v_vezes(n1,n2,n3):
    var media = n2 / n1
    print("Vou mostrar seu nome pela média dos divisores da sua idade.")
    print("{}".format(n3) * media)
    
def multiplica_n_vezes(name, n1):
    print("{}".format(name) * n1)

main()