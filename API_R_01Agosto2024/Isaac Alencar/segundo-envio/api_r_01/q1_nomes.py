from datetime import datetime

def main():
    # perguntar nome e ano do nascimento
    print('----- PRINTAR NOME N VEZES -----')
    name = input('Qual o seu nome?:_ ')
    birth_year = int(input('Qual o ano do seu nascimento?:_ '))

    # Results

    # mostrar ao usuario a idade
    current_year = datetime.now().year
    age = current_year - birth_year
    print('---------')
    print('A sua idade é: ', age)
    # mostrar todos os divisores da idade dele
    print('---------')
    print('---- MOSTRANDO os n divisores -----')
    print(show_age_divisors(age))
    print('---------')

    print('---- MOSTRANDO n vezes o seu nome -----')
    # verificar o maior divisor D que seja primo; mostrar o nome D vezes
    display_name_n_times(name, age)
    # se nao mostrar V vezes (v = media dos divisores)


def show_age_divisors(age):
    result = f'Divisores de {age}: '

    i = 1
    count = age
    while (i <= age):
        if age % i == 0:
            divisor = age // i
            result += str(divisor) + ' '

        i += 1
        count -= 1

    return result


def display_name_n_times(name, n):
    divisors_sum = 0
    greater_prime = 0

    i = 1
    count = n
    while (i <= n):
        if n % i == 0:
            divisor = n // i
            divisors_sum += divisor
            if is_prime(divisor) and divisor > greater_prime:
                greater_prime = divisor

        i += 1
        count -= 1

    if greater_prime == 0:
        times = divisors_sum / n
        for i in range(0, times):
            print(f'{name} - {i + 1}x')
    else:
        for i in range(0, greater_prime):
            print(f'{name} - {i + 1}x')

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True



main()