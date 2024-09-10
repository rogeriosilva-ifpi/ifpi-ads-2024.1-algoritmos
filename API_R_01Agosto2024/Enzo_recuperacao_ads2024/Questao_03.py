print("BEM-VINDO AO ENZOAPP")

def main():
    # RECEBENDO QUANTIDADE N DE CIDADES
    n_cidades = int(input("Quantas cidades serão informadas: "))
   
    # VARIÁVEIS PARA AUXÍLIO DAS RESPOSTAS
    renda_total = 0
    maior_renda = 0
    menor_renda = 0
    count = 1
    count_cidades = 0

    while count > 0 and count_cidades < n_cidades:
        renda_da_cidade = float(input("Renda da cidade(0 interrompre programa): "))
        print("-" * 25)

        count_cidades += 1
        renda_total += renda_da_cidade

        # COMPARA E ATUALIZA MAIOR E MENOR RENDA COM BASE NA RENDA ATUAL
        if renda_da_cidade > maior_renda and renda_da_cidade != 0:
            maior_renda = renda_da_cidade
        
        if count_cidades == 1 and renda_da_cidade > 0:
            menor_renda = renda_da_cidade
            
        if renda_da_cidade < menor_renda and renda_da_cidade != 0:
            menor_renda = renda_da_cidade

        if renda_da_cidade == 0:
            count -= 1
    
        if count == 0 or count_cidades == n_cidades:
            print("Média das renda entre as cidades = {:.2f} R$".format(renda_media(renda_total,n_cidades)))
            print("Maior renda entre as cidades = {:.2f} R$".format(maior_renda))
            print("Menor renda entre as cidades = {:.2f} R$".format(menor_renda))


# FUNÇÃO QUE RETORNA RENDA MÉDIA
def renda_media(total,quantia):
    return total / quantia


main()