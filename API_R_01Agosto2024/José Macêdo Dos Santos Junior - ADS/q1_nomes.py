# Feito por José Macêdo Dos Santos Junior
# Matrícula: 2024111TADS0038

#Função principal.
def main():
    # Constante
    ANO_ATUAL = 2024

    # Entrada
    nome = str(input('> Digite o seu nome:\n> ')).strip()
    ano_nasc = int(input('> Digite o seu ano de nascimento:\n> '))
    idade = ANO_ATUAL - ano_nasc
    print(f'> {nome} você tem {idade} anos em 2024')

    # Variáveis
    maior_divisor_primo_d = 0
    divisores_v = 0
    
    # Processamento
    contagem = 0
    print('> Todos os divisores da sua idade:')
    for i in range(1, idade + 1):
        if idade % i == 0:
            print(f'> {i}')
            divisores_v += i
            contagem += 1
            # Verificação se o número é primo.
            for j in range(2, i):
                if i % j == 0:
                    break
                else:
                    maior_divisor_primo_d = i
    media_divisor_v = int(divisores_v / contagem)
    if maior_divisor_primo_d != 0:
        print(f'> O maior divisor D da sua idade é primo, logo exibirei o seu nome {maior_divisor_primo_d} vezes.')
        for k in range(1, maior_divisor_primo_d + 1):
            print(f'[{k}|{maior_divisor_primo_d}] - {nome}')
    else:
        print(f'> Não há números primos entre os divisores da sua idade, então irei mostrar seu nome {media_divisor_v} vezes.')
        for l in range(1, media_divisor_v + 1):
            print(f'[{l}|{media_divisor_v}] - {nome}')


if __name__ == '__main__':
    main()
