
def main():
    ##Entrada
    nome = input("Qual o seu nome? ")
    anoNascimento = int(input("Em que ano você nasceu? "))
    idade = 2024 - anoNascimento

    numeroAtual = 1
    somaDivisores = 0
    numeroDivisores = 0
    maiorDivisorPrimo = 1
    
    print("Sua idade: ", idade)
    ##Processamento
    while numeroAtual <= idade:
        if idade % numeroAtual == 0:
            print(f"o número {numeroAtual} é divisor de {idade}")
            somaDivisores += numeroAtual
            numeroDivisores += 1
            
            ehPrimo = True
            for numero in range(numeroAtual):
                if numeroAtual % numero == 0:
                    ehPrimo = False
                    if ehPrimo:
                        if numero > maiorDivisorPrimo:
                            maiorDivisorPrimo = numero

        numeroAtual += 1

    mediaDivisores = somaDivisores / numeroDivisores if somaDivisores > 0 else 0
    ##Saída
    for numero in maiorDivisorPrimo:
        print(nome)
    

main()