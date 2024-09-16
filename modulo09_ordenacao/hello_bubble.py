def main():
    #colecao = [17, 10, 68, 99, 26, 41, 41, 23]
    colecao = [
        {'nome': 'FIAT', 'ano': 1899, 'faturamento': 300},
        {'nome': 'BYD', 'ano': 2003, 'faturamento': 400},
        {'nome': 'HONDA', 'ano': 1948, 'faturamento': 100},
        {'nome': 'VW', 'ano': 1937, 'faturamento': 80},
        {'nome': 'NISSAN', 'ano': 1933, 'faturamento': 30},
        {'nome': 'BMW', 'ano': 1916, 'faturamento': 600},
    ]

    print(colecao)
    # colecao_ordenada = bubble_sort(colecao, False, por_nome)
    # colecao_ordenada = bubble_sort(colecao, True, por_ano)
    colecao_ordenada = bubble_sort(colecao, True, lambda m: m['faturamento'])
 
    print()
    print(colecao_ordenada)


def bubble_sort(colecao, reverse=False, criterio = lambda x: x): #8
    ultima_pos_n_ordenada = len(colecao) - 1 #6
    qtd_elementos_a_ordenar = len(colecao) - 1

    while qtd_elementos_a_ordenar > 0:
        for i in range(0, ultima_pos_n_ordenada):
            if not reverse:
                if criterio(colecao[i]) > criterio(colecao[i+1]):
                    aux = colecao[i]
                    colecao[i] = colecao[i+1]
                    colecao[i+1] = aux
            else:
                if criterio(colecao[i]) < criterio(colecao[i+1]):
                    aux = colecao[i]
                    colecao[i] = colecao[i+1]
                    colecao[i+1] = aux

        qtd_elementos_a_ordenar -= 1
    
    return colecao


def por_nome(montadora):
    return montadora['nome']


def por_ano(montadora):
    return montadora['ano']


main()