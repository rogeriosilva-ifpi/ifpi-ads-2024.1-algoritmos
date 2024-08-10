def main():
    ##Entrada
    print("-"*30)
    print("Bem vindo ao programa de cadastro de renda percapta das cidades brasileiras")
    print("-"*30)
    
    numeroCidades = int(input("Quantas cidades você vai informar a renda per capta? "))
    cidadeAtual = input("Digite o nome da cidade: ")
    renda = float(input(f"Digite a renda per capta da cidade {cidadeAtual}: "))

    cidadesComputadas = 1
    maiorRenda = renda
    cidadeRica = cidadeAtual
    menorRenda = renda
    cidadePobre = cidadeAtual
    somatorioRendas = renda

    ##Processamento
    while renda > 0 and cidadesComputadas < numeroCidades:
        cidadeAtual = input("Digite o nome da cidade: ")
        renda = float(input(f"Digite a renda per capta da cidade {cidadeAtual}: "))
        
        if renda > maiorRenda:
            maiorRenda = renda
            cidadeRica = cidadeAtual
        if renda < menorRenda:
            menorRenda = renda
            cidadePobre = cidadeAtual

        cidadesComputadas += 1
        somatorioRendas += renda

    rendaMedia = somatorioRendas / cidadesComputadas if somatorioRendas > 0 else 0
    ##Saída
    print("*"*30)
    print(f"A renda média entre as cidades computadas foi de {rendaMedia}R$")
    print(f"A cidade com menor renda per capta foi {cidadePobre}, com renda de {menorRenda}R$ por pessoa")
    print(f"A cidade com maior renda per capta foi {cidadeRica}, com renda de {maiorRenda}R$ por pessoa")

    

main()