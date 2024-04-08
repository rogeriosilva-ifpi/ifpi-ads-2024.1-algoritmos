def main():

    menu()

    valor_total = 0
    lista = ""

    escolha = int(input("Escolha uma opção: "))

    while escolha == 1:
        descricao = input("Descrição do item: ")
        especificacao = input("Especificação do produto: ")
        valor = int(input("Valor do produto: "))
        
        n_valor = str(valor)
        valor_total += valor
        lista += f"{descricao} ({especificacao}) R$ {valor} \n"

        escolha = int(input("Adicionar mais um item? (1 - Sim; 0 - Não) "))

        if escolha == 0:
            print("Fim da lista")
        else:
            descricao = input("Descrição do item: ")
            especificacao = input("Especificação do produto: ")
            valor = int(input("Valor do produto: "))


    resultado = f"""
    ------------------------------------
    {lista}
    ------------------------------------
    Valor total: R$ {valor_total}
    Opções de pagamento: {calc_forma_pagamento(valor_total)}"""

    print(resultado)
    


def menu():
    menu = """
    1 - Incluir Item
    0 - Sair"""

    print(menu)

def calc_forma_pagamento(valor_total):
    parc_3 = valor_total / 3
    parc_6 = valor_total / 6

    if valor_total <= 30:
        return "A vista"
    elif valor_total <= 100:
        return f"Parcelamento em até 3x de R$ {parc_3:.2f}"
    elif valor_total > 100:
        parcelas = int(input("Em quantas parcelas deseja dividir? "))
        valor_juros = valor_total + (valor_total * 0.05 ** parcelas)
        valor_total = valor_juros
        return f"Parcelado em {parcelas} vezes com o total de {valor_total:.2f}"

main()