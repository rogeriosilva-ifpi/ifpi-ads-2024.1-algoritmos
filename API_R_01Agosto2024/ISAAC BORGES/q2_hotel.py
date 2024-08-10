def get_number(entrada) :
    numero = float(input(entrada))

    return numero

def get_number_in_range(entrada, min, max) :
    numero = get_number(entrada)
    
    while numero < min or numero > max and numero != 0:
        print("Valor inválido!")
        numero = get_number(entrada)
    
    return numero

def main() :
    print("Hotel")
    idade = 0
    idadeantiga = -1
    while idade + idadeantiga != 0:
        idade = get_number_in_range("Insira a idade: ", 18, 100)

        idadeantiga = idade
        

    



main()