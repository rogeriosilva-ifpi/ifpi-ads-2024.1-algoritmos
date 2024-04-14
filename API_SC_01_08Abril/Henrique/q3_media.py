from time import sleep

def pedir_string(texto):
    return str(input(texto))

def pedir_float_min_max(texto, min, max):
    num = float(input(texto))

    if num < min or num > max:
        num = pedir_float_min_max(texto, min, max)

    return num

def pedir_sexo():
    sexo = ''

    while sexo != 'm' and sexo != 'M' and sexo != 'f' and sexo != 'F' and sexo != '|':
        sexo = pedir_string('\nDigite o sexo do(a) estudante: ')

    return sexo

def verificar_continuidade(sexo):
    if sexo != '|':
        return True
    
    return False

def pedir_nota(sexo):
    if sexo == 'm' or sexo == 'M':
        return pedir_float_min_max('Digite a nota do estudante: ', 1, 10)
    
    return pedir_float_min_max('Digite a nota da estudante: ', 1, 10)

def contar_homens_e_mulheres(quant_homens, quant_mulheres, sexo):
    if sexo == 'm' or sexo == 'M':
        return quant_homens + 1, quant_mulheres
    
    return quant_homens, quant_mulheres + 1

def comparar_maior_nota_geral(nota, maior_nota_geral):
    if nota > maior_nota_geral:
        return nota

    return maior_nota_geral

def comparar_menor_nota_geral(nota, menor_nota_geral):
    if nota < menor_nota_geral:
        return nota

    return menor_nota_geral

def diferenciar_somas(soma_notas_homens, soma_notas_mulheres, sexo, nota):
    if sexo == 'm' or sexo == 'M':
        return soma_notas_homens + nota, soma_notas_mulheres
    
    return soma_notas_homens, soma_notas_mulheres + nota

def calcular_media_aritmetica(somatorio, quant_elementos):
    return somatorio / quant_elementos

def verificar_desempenho(media):
    if media > 0 and media <= 2:
        return 'PÉSSIMO'
    elif media <= 4:
        return 'RUIM'
    elif media <= 7:
        return 'REGULAR'
    elif media <= 8:
        return 'BOM'
    else:
        return 'EXCELENTE'

def calcular_porcentagem(num1, num2):
    return num1 / num2 * 100

def mostrar_relatorio(maior_nota_geral, menor_nota_geral, media_geral, media_notas_homens,
media_notas_mulheres, desempenho_geral, desempenho_homens, desempenho_mulheres, performance_homens,
performance_mulheres, count, quant_homens, quant_mulheres):
    print(f'\nMaior nota geral: {maior_nota_geral:.2f}')
    print(f'Menor nota geral: {menor_nota_geral:.2f}')
    print(f'Média geral: {media_geral:.2f}')
    print(f'Média das notas dos homens: {media_notas_homens:.2f}')
    print(f'Média das notas das mulheres: {media_notas_mulheres:.2f}')
    print(f'Quantidade geral de alunos: {count}')
    print(f'Quantidade de mulheres na turma: {quant_homens}')
    print(f'Quantidade de mulheres na turma: {quant_mulheres}')
    print(f'Desempenho geral da turma: {desempenho_geral}')
    print(f'Desempenho dos homens da turma: {desempenho_homens}')
    print(f'Desempenho das mulheres da turma: {desempenho_mulheres}')
    print(f'Performance dos homens da turma: {performance_homens:.2f} %')
    print(f'Performance das mulheres da turma: {performance_mulheres:.2f} %')

def encerrar_programa():
    print('\nEncerrando o programa...')
    sleep(3)

def main():
    continuidade = True
    count, quant_homens, quant_mulheres, maior_nota_geral= 0, 0, 0, 0
    soma_geral, soma_notas_homens, soma_notas_mulheres = 0, 0, 0
    menor_nota_geral = 11

    while continuidade == True:
        sexo = pedir_sexo()
        continuidade = verificar_continuidade(sexo)

        if continuidade == True:
            nota = pedir_nota(sexo)
            quant_homens, quant_mulheres = contar_homens_e_mulheres(quant_homens, quant_mulheres, sexo)
            maior_nota_geral = comparar_maior_nota_geral(nota, maior_nota_geral)
            menor_nota_geral = comparar_menor_nota_geral(nota, menor_nota_geral)
            soma_geral += nota
            soma_notas_homens, soma_notas_mulheres = diferenciar_somas(soma_notas_homens, soma_notas_mulheres,
            sexo, nota)

            count += 1
    
    media_geral = calcular_media_aritmetica(soma_geral, count)
    media_notas_homens = calcular_media_aritmetica(soma_notas_homens, quant_homens)
    media_notas_mulheres = calcular_media_aritmetica(soma_notas_mulheres, quant_mulheres)
    desempenho_geral = verificar_desempenho(media_geral)
    desempenho_homens = verificar_desempenho(media_notas_homens)
    desempenho_mulheres = verificar_desempenho(media_notas_mulheres)
    performance_homens = calcular_porcentagem(soma_notas_homens, soma_geral)
    performance_mulheres = calcular_porcentagem(soma_notas_mulheres, soma_geral)

    if count > 0:
        mostrar_relatorio(maior_nota_geral, menor_nota_geral, media_geral, media_notas_homens,
        media_notas_mulheres, desempenho_geral, desempenho_homens, desempenho_mulheres, performance_homens,
        performance_mulheres, count, quant_homens, quant_mulheres)
    else:
        print('\nNenhuma nota foi digitada!')

    encerrar_programa()

main()
