



def main():
    print("Vamos comparar!")
    origem = input('De onde deseja partir? ')
    destino = input('Onde deseja chegar? ')
    val_site = float(input('Informe o valor da passagem no site: '))
    val_milhas = float(input("Informe o valor de milhas no site: "))
    
    milhas_padrao = val_milhas * 70
    milhas_baratas = val_milhas * 14.50
    
    print(' ')

    if milhas_padrao < val_site and milhas_padrao < milhas_baratas:
        print('Melhor comprar com milhas padrão')
    elif milhas_baratas < val_site and milhas_baratas < milhas_padrao:
        print('Melhor comprar com milhas baratas')
    else:
        print('Melhor comprar no site')
    
    
    

main()