def main():
    
    print('Plano de Viagem\n--------------')

    origem = str(input('Digite a Origem: '))
    destino = str(input('Digite o Destino: '))
    valor_reais = float(input('Digite o Valor em Reais : '))
    valor_milhas = float(input('Digite o Valor em Milhas '))

    passagem_milhas_padrao = (valor_milhas / 1000) * 70
    passagem_milhas_baratas = (valor_milhas / 1000) * 14.50
    porcentagem_milhas_baratas_reais = (passagem_milhas_baratas / valor_reais) * 100
    porcentagem_milhas_padrao_reais = (passagem_milhas_padrao / valor_reais) * 100

    print(f'''   ======== RELATORIO ========
    Valor em Reais com Milhas Padrão : R${passagem_milhas_padrao:.2f}
    Porcentagem em Relação ao Valor em Reais ( Dinheiro ) : {porcentagem_milhas_padrao_reais:.1f}%

    Valor em Reais com Milhas Baratas: R${passagem_milhas_baratas:.2f}
    Porcentagem em Relação ao Valor em Reais ( Dinheiro ) : {porcentagem_milhas_baratas_reais:.1f}%
    _____________________________________________________________________''')

    if valor_reais < passagem_milhas_baratas and valor_reais < passagem_milhas_padrao:
        print('A OPÇÃO MAIS VANTAJOSA É COMPRAR EM DINHEIRO')
    elif passagem_milhas_baratas < valor_reais and passagem_milhas_baratas < passagem_milhas_padrao:
        print('A OPÇÃO MAIS VANTAJOSA É COMPRAR USANDO MILHAS BARATAS')
    else:
        print('A OPÇÃO MAIS VANTAJOSA É COMPRAR USANDO MILHAS PADRÃO')

main()