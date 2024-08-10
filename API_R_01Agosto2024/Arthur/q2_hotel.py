def verificarIdade(idade):
    if idade != 0:
        while idade < 18 or idade > 100:
                print("Idade Invalida!")
                idade = int(input("Digite a idade do hospede novamente: "))
    return idade

def main():
    quartoSingle = 0
    quartoDuplo = 0
    quartoTriplo = 0
    quartoQuadruplo = 0
    continuador = -1
    idade = -1
    while continuador != 0:
        print("Novo quarto iniciado")
        continuador = verificarIdade(int(input("Digite a idade do hospede: ")))
        contador = 1
        while idade != 0 and contador != 4:
            contador += 1
            idade = verificarIdade(int(input("Digite a idade do hospede: ")))
        if contador == 4:
             quartoQuadruplo += 1
        elif contador == 3:
             quartoTriplo += 1
        elif contador == 2:
             quartoDuplo += 1
        elif contador == 1:
             quartoSingle += 1
        print("Quarto Finalizado!")
        print("Proximo Quarto")

    qtdNoites = int(input("Digite quantas noites deseja reservar o/os quartos: "))
    valorSingle = quartoSingle * 200
    valorDuplo = quartoDuplo * 280
    valorTriplo = quartoTriplo * 360
    valorQuadruplo = quartoQuadruplo * 440
    valorTotal = valorSingle + valorDuplo + valorTriplo + valorQuadruplo
    print(f"""
        Valor por dia = {valorTotal/qtdNoites}
        Valor total = {valorTotal}
        Pagamento por pix(Desconto 5%) = {valorTotal - (valorTotal * 0.05)}
        Pagamento por Credito(Parcela até 3x sem Juros/ 12x com Juros):
        Sem juros(3x) = {valorTotal / 3}
        Com Juros(12x) = {(valorTotal + (valorTotal * 10.5) / 12)}
        """)
main()
 
    
    