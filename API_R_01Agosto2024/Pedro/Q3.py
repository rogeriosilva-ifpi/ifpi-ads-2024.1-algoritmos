def main():
    NumeroCidades = int(input("Informe o número de cidades: "))

    mediaRenda = 0

    RendaPerCapita = float(input("\nInforme a Renda Per Cidade: "))

    contador = 1

    maiorRenda = RendaPerCapita
    menorRenda = RendaPerCapita

    somatorioRendas = RendaPerCapita

    if RendaPerCapita != 0:

        while contador != NumeroCidades:

            RendaPerCapita = float(input("\nInforme a Renda Per Cidade: "))

            contador += 1

            if RendaPerCapita > maiorRenda:
                maiorRenda = RendaPerCapita
            
            if RendaPerCapita < menorRenda:
                menorRenda = RendaPerCapita

            somatorioRendas += RendaPerCapita
            mediaRenda = somatorioRendas / NumeroCidades
    
    print(f"""
    Renda Media das Cidades -------> {mediaRenda}
    Maior renda             -------> {maiorRenda}
    Menor Renda             -------> {menorRenda}
""")
main()