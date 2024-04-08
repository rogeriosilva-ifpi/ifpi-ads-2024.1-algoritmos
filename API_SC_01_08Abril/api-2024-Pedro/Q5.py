def main():

    opção =input(menu('Informe a opção desejada: '))

    contador = 0

    while opção != 2:

        descrição = input('Qual item vc deseja pesquisar: ')
        valor =  float(input('Informe o Valor: '))
        especificação = float(input('Informe o peso em (kg) ou (L) do produto: '))

        contador += 1
    
        lista = str(contador) + "-" + descrição
    





    




    
def menu():

    print ("""

        >>>>  Menu  <<<<
           
    1 - Incluir item
    2 - Imprimir lista
          
""")


main()