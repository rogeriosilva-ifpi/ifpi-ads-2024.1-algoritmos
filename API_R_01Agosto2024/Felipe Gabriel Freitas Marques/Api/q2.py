def main():
    # quarto single     200
    # quarto duplo      280
    # quarto triplo     360
    # quarto quadruplo  440
    # máximo 4 pessoas por quarto
        # quando atingir 4, automáticamente vai pro próximo quarto
    # quando for uma idade 0, próximo quarto, se o próximo quarto tiver digitado 0, fim da reserva
    # quantas noites terá a reserva e mostrar totsl por dia, e valor total da reserva. Informar valor dos pagamentos e taxa

    # PIX - 5% de desconto
    # CREDITO - 3x é sem juros, mais vezes é 10,5% de juros até 12x
    count = 0

    while idade != 0:
        idade = int(input("Qual a idade: "))

        if idade < 18 or idade > 100:
            print("voce não tem a idade adequada, registre novamente!")
            idade = int(input("Qual a idade: "))

        count += 1
        if idade == 0:
            if count == 1: 
                reserva = 200
            elif count == 2:
                reserva = 280
            elif count == 3:
                reserva = 360
            elif count == 4:
                reserva = 440
        total_reserva += reserva
        print(f"reserva do dia: {reserva}")

        pagamento = input("escolha a forma de pagamento:")

    if pagamento == "pix":
        total_reserva *= 0.95
        print(f"Valor com desconto no PIX: R$ {total_reserva}")
    elif pagamento == "credito":
        parcelas = int(input("Em quantas vezes (máx 12x)? "))
        if parcelas <= 3:
            print(f"Valor sem juros em {parcelas}x: R$ {total_reserva / parcelas} cada parcela")
        else:
            juros = total_reserva * 0.105
            total_reserva += juros
            print(f"Valor total com juros: R$ {total_reserva}")
            print(f"Valor em {parcelas}x: R$ {total_reserva / parcelas} cada parcela")
    else:
        print("Forma de pagamento inválida!")

        # professor, eu tentei o máximo dessa questão, mas n tive tempo pois tava muito ansioso :(



main()