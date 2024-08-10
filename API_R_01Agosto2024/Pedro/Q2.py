def main():

    #Entrada
    numeroQuartos = 0
    NumeroHospedes = 0
    idade_hospede = 1
    idade_hospede_01 = 1
    somatorioNoites = 0
    diaria = 0

    while idade_hospede_01 != 0 or idade_hospede != 0:

        print(f"\nNumero de Quartos {numeroQuartos}\n")

        idade_hospede_01 = int(input("Informe a idade do hospede: "))

        while idade_hospede_01 > 100 or idade_hospede_01 < 18:
            idade_hospede_01 = int(input("Informe a idade do hospede: "))

        NumeroHospedes = 0

        while NumeroHospedes < 3 and idade_hospede != 0:

            idade_hospede = int(input("Informe a idade do hospede: "))

            while idade_hospede > 100 or idade_hospede < 18:
                idade_hospede = int(input("Informe a idade do hospede: "))
            
            if idade_hospede != 0:
                NumeroHospedes += 1

        NumeroNoites = int(input("\nQuantas noites será a reserva: "))

        if NumeroHospedes + 1 == 1:
            diaria = 200
            somatorioNoites = diaria * NumeroNoites
        elif NumeroHospedes + 1 == 2:
            diaria = 280
            somatorioNoites = diaria * NumeroNoites
        elif NumeroHospedes + 1 == 3:
            diaria = 360
            somatorioNoites = diaria * NumeroNoites
        elif NumeroHospedes + 1 == 4:
            diaria = 440
            somatorioNoites = diaria * NumeroNoites

        numeroQuartos += 1

        print(f"Valor da Diaria do quarto é {diaria}\n")
        print(f"Valor total dos dias de estadia são {somatorioNoites}\n")
        print(f"Caso o pagamento for via PIX, o valor total será {somatorioNoites * 95/100}\n")
        print(f"No credito o valor total {somatorioNoites} poderá ser pago 3x de {somatorioNoites / 3}\n")
        print(f"Já paando no credito em mais de 3x e menor que 12x(max) o juros será de 10% na diaria correspondendo {(diaria * 10/100) + diaria}\n")

    

        
        



    

        

        







    


main()