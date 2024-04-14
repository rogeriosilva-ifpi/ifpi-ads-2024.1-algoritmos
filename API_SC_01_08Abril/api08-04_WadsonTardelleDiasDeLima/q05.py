def main():
    total = 0
    lista_itens = ""
    print(f"1- mostrar lista; \n 2 mostrar lista; \n 3- adicionar um item")
    while True:
         menu = int(input())
        if menu == 1:
            print(lista_itens)
        elif menu == 2:
            descricao = input("digite a descrição do item: ")
            especificacao = input("digite a especificação do item: ")
            valor = float(input("digite o preço: "))
            lista_itens += descricao
            total += valor
        elif menu == 3:
          print(f"R${total}")
         
if __name__ == "__main__":
    main()