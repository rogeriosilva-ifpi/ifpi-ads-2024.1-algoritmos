def main():

    origem = input("Origem: ")
    destino = input("Destino: ")
    valor_reais = float(input("Valor em reais: "))
    valor_milhas = float(input("Valor em milhas: "))
    total_milhas, compra_milhas = calc_forma_compra(valor_reais, valor_milhas)
    porc_milhas_baratas = total_milhas / valor_reais * 100
    porc_milhas = compra_milhas / valor_reais * 100

    if total_milhas < valor_reais:
        print("Melhor escolha: Comprar milhas baratas")
    elif compra_milhas < valor_reais:
        print("Melhor escolha: Comprar milhas")
    elif valor_reais < total_milhas and valor_reais < compra_milhas:
        print("Melhor opção: comprar em dinheiro")

    resultado = f""" 
    - Porcentagem milhas baratas: {porc_milhas_baratas:.2f} %
    - porcentagem compra de milhas: {porc_milhas:.2f} %"""

    print(resultado)

def calc_forma_compra(valor_reais, valor_milhas):
    total_milhas = valor_milhas / 14.50
    compra_milhas = (valor_milhas / 1000) * 70

    return total_milhas, compra_milhas


main()