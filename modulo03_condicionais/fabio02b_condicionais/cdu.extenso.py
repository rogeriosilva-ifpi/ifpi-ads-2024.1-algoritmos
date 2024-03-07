def main():
    print('*** CDU Extenso ***')

    numero = int(input('Número (<1000): '))
    centena = extrair_partes(numero, 'C')
    dezena = extrair_partes(numero, 'D')
    unidade = extrair_partes(numero, 'U')

    print(f'Você digitou {numero}')
    print(f'Centena: {centena}, Dezena: {dezena}, Unidade: {unidade}')

    resultado = converter_para_extenso(centena, dezena, unidade)

    print(resultado)


def converter_para_extenso(centena, dezena, unidade):
    txt_centena = str(centena) + (' centenas' if centena > 1 else ' centena')
    txt_dezena = str(dezena) + (' dezenas' if dezena > 1 else ' dezena')
    txt_unidade = str(unidade) + (' unidades' if unidade > 1 else ' unidade')

    resposta = ''

    if centena > 0:
        resposta = resposta + txt_centena

    if dezena > 0:
        if centena > 0:
            if unidade > 0:
                resposta = resposta + ', ' + txt_dezena
            else:
                resposta = resposta + ' e ' + txt_dezena
        else:
            resposta = resposta + txt_dezena

    if unidade > 0:
        if centena == 0 and dezena == 0:
            resposta = resposta + txt_unidade
        else:
            resposta = resposta + ' e ' + txt_unidade

    return resposta


def extrair_partes(numero, parte):
    if parte == 'C':
        centena = numero // 100
        return centena
    elif parte == 'D':
        resto = numero % 100
        dezena = resto // 10
        return dezena
    elif parte == 'U':
        return numero % 10
    else:
        return -1


main()
