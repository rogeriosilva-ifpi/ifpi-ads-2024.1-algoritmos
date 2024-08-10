def primo(numero):
    contador = 0
    numerosDivisores = 100
    while numero % numerosDivisores == 0:
        contador += 1
    if contador == 2:
        return True
    else:
        return False

def main():
    nome = str(input("Digite seu nome: "))
    nascimento = int(input("Digite seu ano de nascimento: "))
    idade = 2024 - nascimento
    totalDivisores = idade
    divisores = idade
    maiorDivisor = 0
    somaDivisores = 0
    print(f"Sua idade é {idade}")
    while divisores > 0:
        if idade % divisores == 0:
            somaDivisores += divisores
            print(divisores)
            if primo(divisores) and maiorDivisor < divisores:
                maiorDivisor = divisores
        divisores -= 1
    if maiorDivisor == 0:
        maiorDivisor = "Não existe numeros primos"
        contador = totalDivisores
        print(maiorDivisor)
        while contador != 0:
            contador -= 1
            print(nome)
    else:
        while maiorDivisor != 0:
            print(nome)
main()