def get_number(entrada) :
    numero = float(input(entrada))

    return numero

def get_positive_number(entrada) :
    numero = float(input(entrada))

    if numero < 0 :
        print("Valor Inválido!")
        get_positive_number(entrada)

    return numero



def calculo_media(renda_total, num_cidades,contador) :
    media = renda_total / (contador)
    if contador < num_cidades:
        media = renda_total / (contador - 1)
    
    return media


def main() :
    print("Renda per capita de cidades")
    numero_cidades = get_positive_number("Quantas cidades você vai informar a renda per capita? : ")
    contador = 1
    renda_total = 0
    if numero_cidades > 0 :
        renda = renda = get_number("Insira a Renda per Capita: ")

        maior_renda = renda
        menor_renda = renda
        renda_total += renda

        while contador < numero_cidades and renda != 0 :
            renda = get_number("Insira a Renda per Capita: ")

            renda_total += renda
            if renda > maior_renda :
                maior_renda = renda
            elif renda < menor_renda and renda != 0 :
                menor_renda = renda

            contador += 1

        renda_media = calculo_media(renda_total, numero_cidades , contador)

        mensagem_output = f"""
        A Renda média das cidades é: R${round(renda_media, 2)}
        A menor renda das cidades é: R${menor_renda}
        A maior renda das cidades é: R${maior_renda}
        """

        print(mensagem_output)

    print("FIM!")


main()