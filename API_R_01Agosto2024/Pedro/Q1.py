def main():

    #entrada
    nome = input("Informe seu nome:")
    ano_nascimento = int(input("Informe o ano de nascimento: "))
    ano_atual = 2024
    idade = ano_atual - ano_nascimento

    maiorDivisor = 0
    divisor = 0
    
    contador = 1

    somatorioDivisor = 0
    contadorDvisor = 0

    contadorV = 0

    print(f"Sua idade é {idade}\n")

    contador = 1

    while contador < idade:

        contador += 1

        if idade % contador == 0:

            print(contador)
            
            divisor = contador
            somatorioDivisor += divisor
            contadorDvisor += 1
        
        if divisor > maiorDivisor:
            maiorDivisor = divisor
            contadorRepetição = 0

    while contadorRepetição != maiorDivisor:
        print(nome)
        contadorRepetição += 1 

        
main()