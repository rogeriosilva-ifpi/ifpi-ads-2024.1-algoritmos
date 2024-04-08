def calcular_menor(nota,menor_nota):

    if nota <= menor_nota:
        return nota
    else:
        return menor_nota
    
def calcular_maior(nota,maior_nota):

    if nota >= maior_nota:
        return nota
    else:
        return maior_nota

def classificacao(media_turma):

    if media_turma <= 2:
        print(f'Pessimo')
    elif media_turma > 2 and media_turma <=4:
        print(f'Ruim')
    elif media_turma > 4 and media_turma <=7:
        print(f'Regular')
    elif media_turma > 7 and media_turma <=8:
        print(f'Bom')
    elif media_turma > 2 and media_turma <=4:
        print(f'excelente')


def main():

    sexo = str(input('Digite o sexo do aluno(m/f): '))
    nota = float(input('Digite a nota do aluno: '))

    maior_nota = 0
    menor_nota = 0
    soma_notas = 0
    notas_mulheres = 0
    notas_homens = 0
    qtd_m = 0
    qtd_f = 0

    while sexo == 'm' or sexo == 'f':

        soma_notas += nota

        maior_nota = calcular_menor(nota,menor_nota)
        maior_nota = calcular_maior(nota,maior_nota)

        if sexo == 'm':
            qtd_m += 1
            notas_homens += nota        
        elif sexo == 'f':
            qtd_f += 1
            notas_mulheres += nota

        sexo = str(input('Digite o sexo do aluno(m/f): '))
        nota = float(input('Digite a nota do aluno: '))

    media_turma = soma_notas / (qtd_f + qtd_m)
    resultado_turma = classificacao(media_turma)
    percentual_mulheres = (notas_mulheres / soma_notas) / 100
    percentual_homens = (notas_homens / soma_notas) / 100
    qtd_t = qtd_f+ qtd_m

    print(f'Maior nota:{maior_nota:.2f} \n Menor nota:{menor_nota:.2f} \n Media geral:{media_turma:.2f} \n Homens(%):{percentual_homens} \n Mulheres:{percentual_mulheres} \n Quantidade de homens:{qtd_m} \n Quantidade de mulheres:{qtd_f} Quantidade total:{qtd_t} \n Classificação da turma:{resultado_turma}')

main()  
