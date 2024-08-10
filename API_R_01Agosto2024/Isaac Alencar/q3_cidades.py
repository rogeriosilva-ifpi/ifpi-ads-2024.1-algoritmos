def main():
    
    # quantas cidades
    cities_number = int(input('Quantas cidades serão registradas?:_ '))

    # receber a renda per capta
    compute_cities(cities_number)



def compute_cities(number):
    total_income = 0
    greater_income = 0
    smaller_income = 0

    i = 1
    aux = number
    while (aux > 0):
        income = int(input(f'Quanto é a renda per capta da cidade {i}?:_ '))

        if income == 0:
            break
        
        if income > greater_income:
            smaller_income = greater_income
            greater_income = income



        i += 1
        aux -= 1
        total_income += income
    
    print(f'''
    ----------- RESULTADO ------------
        Renda Média: {total_income / number}
        Menor renda: {smaller_income}
        Maior renda: {greater_income}
    ----------------------------------
    ''')

main()