def main():
    qtdCidades = int(input("Digite a quantidade de cidades que deseja informar: "))
    renda = int(input("Digite a renda da cidade: "))
    rendaMedia = renda
    menorRenda = renda
    maiorRenda = renda
    rendaTotal = 0
    while renda != 0:
        renda = int(input("Digite a renda da cidade: "))
        rendaTotal += renda
        if renda > maiorRenda:
            maiorRenda = renda
        elif renda < menorRenda and renda != 0:
            menorRenda = renda
    rendaMedia = rendaTotal / qtdCidades


    print(f"""
        Renda Media: {rendaMedia}
        Menor Renda: {menorRenda}
        Maior Renda: {maiorRenda}
        """)
    print("Encerrando Programa")
main()
