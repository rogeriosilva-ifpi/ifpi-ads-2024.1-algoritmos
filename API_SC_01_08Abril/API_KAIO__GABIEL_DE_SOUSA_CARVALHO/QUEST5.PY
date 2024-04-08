def parcelar(total_gasto):

    if total_gasto < 30 :
        print(f'Nao é possivel parcela')
    elif total_gasto >30 and total_gasto <=100:
        print(f'Parela em 3x')
    elif total_gasto >100:
        print(f'Parela em 5x')
    else:
        print(f'Parcela em 6x,mas com juros composto de 5% em cada parcela')



def main():

    print(f'Menu: \n 1 - adicionar produto \n 2- Imprimir')
    
    opcao = int(input('O que deseja fazer? '))

    acumulador = ''
    sequencia = 1
    total_gasto = 0

    while opcao == 1:

        if opcao == 1:

            especificacao = str(input('Digite  nome do produto: '))
            descricao = int(input('Quantos Kg: '))
            valor = float(input('Qual o valor do produto: '))

            total_gasto += valor
            
            acumulador += str(print(f'{sequencia} - {especificacao} ({descricao}Kg)  R$ {valor:.2f}'))
            sequencia += 1
        
        print(f'Menu: \n 1 - adicionar produto \n 2- Imprimir')
    
        opcao = int(input('O que deseja fazer? '))


    print(f'{acumulador} \n Valor total: R$ {total_gasto:.2f} \n {parcelar(total_gasto)} \n Qualquer valor é possivel pagar a vista ou paecelar)')

main()