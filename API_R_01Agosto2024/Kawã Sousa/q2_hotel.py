
def main():
    print("BEM VINDO AO HOTEL")
    
    ##Entrada
    idade = int(input("Digite a idade do cliente: "))

    ##Processamento
    clientes = 1
    valorDia = 200

    #While para adicionar um novo quarto -> idade do cliente ser maior que zero
    while idade >= 18 and idade <= 100:
        #While para adicionar um cliente no quarto -> Numero de clientes menor que cinco, idade maior que zero 
        while clientes < 5 and idade > 0:
            idade = int(input("Digite a idade do cliente: "))
            clientes += 1
        
        valorDia += 200 + ((clientes -1) * 80)

        idade = int(input("Digite a idade do cliente: "))

    noites = int(input("Para quantas noites são a reserva? " ))
    valorTotal = noites * valorDia
    valorPix = 0.95 * valorTotal

    ##Saída
    print("-"*30)
    print("Valor por dia: ", valorDia)
    print(f"Valor total da estadia: {valorTotal}")
    print(f"Valor do pagamento em forma de pix: {valorPix}")
    print("Voce pode optar por pagar no cédito de 3 a 12 vezes, ")




main()