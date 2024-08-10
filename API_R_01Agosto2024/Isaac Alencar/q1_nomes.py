## QUESTÃo INCOMPLETA

def main():
    # perguntar o nome e ano de nascimento do usuário
    name = input('Qual o seu nome?:_')
    birth_year = int(input('Qual o ano do seu nascimento?:_ '))
    # mostrar idade
    age = calc_age(birth_year)
    print(age)
    # mostrar todos os divisores da idade dele
    print('Estes são os divisores da sua idade')
    print(get_age_divisors(age))
    # verificar o maior divisor primo e se houver, mostrar n vezes  n(numero primo)
    # caso nao houver, mostrar uma msg e retornar n vezes o número (n = media dos div da idade)

def calc_age(birth_year):
    current_year = 2024
    return current_year - birth_year

def get_age_divisors(age):
    i = 1
    count = 1
    result = 'Divisores: '
    while (count < age):
        if age % i == 0:
            divisor = str(age // i)
            result += divisor + ' '
        i += 1
        count += 1

    return result
      

def get_greater_prime_number(number):
    greater = 0

    if number >= greater:
        greater = number

    return greater



main()