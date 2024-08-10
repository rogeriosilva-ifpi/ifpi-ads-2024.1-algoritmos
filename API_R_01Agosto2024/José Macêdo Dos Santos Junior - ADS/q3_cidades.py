# Feito por José Macêdo Dos Santos Junior
# Matrícula: 2024111TADS0038

#Função principal.
def main():
    # Variáveis
    renda_geral = 0
    menor_renda_cidade = 'não_definido'
    menor_renda = 'não_definido'
    maior_renda_cidade = 'não_definido'
    maior_renda = 'não_definido'

    # Entrada
    numero_cidades = int(input('> Informe o número de cidades que você irá informar a renda:\n> '))

    # Processamento
    contador = 1
    while contador < numero_cidades + 1:
        print(f'\n> --- Cidade [{contador}] de [{numero_cidades}]')
        cidade = str(input('> Informe a cidade:\n> ')).strip()
        renda = float(input(f'> Digite a renda de {cidade}:\n> '))
        if renda != 0.00:
            # Para a menor renda.
            if menor_renda == 'não_definido':
                menor_renda_cidade = cidade
                menor_renda = renda
            else:
                if menor_renda > renda:
                    menor_renda_cidade = cidade
                    menor_renda = renda
        
            # Para a maior renda.]
            if maior_renda == 'não_definido':
                maior_renda_cidade = cidade
                maior_renda = renda
            else:
                if maior_renda < renda:
                    maior_renda_cidade = cidade
                    maior_renda = renda
        else:
            # contador = float('+inf') Infinito positivo em Python.
            break
        renda_geral += renda
        contador += 1
    
    # Calculando a renda média.
    renda_media = renda_geral / numero_cidades

    # Mostrando na tela.
    print(f'''\n> --- RESULTADOS
> {'-' * 50}
> Cidade com maior renda ----- [{maior_renda_cidade}]
> renda da cidade ------------ [{maior_renda}]
> {'-' * 50}
> Cidade com menor renda ----- [{menor_renda_cidade}]
> renda da cidade------------- [{menor_renda}]
> {'-' * 50}
> Renda média ---------------- [{renda_media:.2f}]
> {'-' * 50}''')


if __name__ == '__main__':
    main()
