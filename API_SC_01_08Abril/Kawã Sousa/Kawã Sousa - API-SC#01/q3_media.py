def main():
    sexo = input('Digite o sexo do aluno ("M" ou "F"):')
    nota = float(input('Digite a nota do aluno:'))
    maior_nota = nota
    menor_nota = nota
    media_geral = nota
    qtd_alunos = 1
    qtd_homens = contar_homens(sexo)
    qtd_mulheres = contar_mulheres(sexo)
    
    soma_notas_geral = nota
    soma_notas_m = computar_nota_m(sexo, nota)
    soma_notas_f = computar_nota_f(sexo, nota)
    
    sexo = input('Digite o sexo do aluno ("M" ou "F"):')
    while(sexo == 'M' or sexo == 'F'):
        nota = float(input('Digite a nota do aluno:'))
        if(nota > maior_nota):
            maior_nota = nota
        if(nota < menor_nota):
            menor_nota = nota
        
        if(sexo == 'M'):
            qtd_homens += 1
            soma_notas_m += nota
        if(sexo == 'F'):
            qtd_mulheres += 1
            soma_notas_f += nota
            
        qtd_alunos += 1
        soma_notas_geral += nota
        
        sexo = input('Digite o sexo do aluno ("M" ou "F"):')
    
    media_geral = computar_media(soma_notas_geral, qtd_alunos)
    media_homens = computar_media(soma_notas_m, qtd_homens)
    media_mulheres = computar_media(soma_notas_f, qtd_mulheres)
    
    desempenho_turma = classificar_nota(media_geral)
    desempenho_homens = classificar_nota(media_homens)
    desempenho_mulheres = classificar_nota(media_mulheres)
    
    exibir_resultado(qtd_alunos, qtd_homens, qtd_mulheres, desempenho_turma, desempenho_homens, desempenho_mulheres)

def contar_homens(sexo):
    if(sexo == 'M'):
        return 1
    else:
        return 0
def contar_mulheres(sexo):
    if(sexo == 'F'):
        return 1
    else:
        return 0

def computar_nota_m(sexo, nota):
    if(sexo == 'M'):
        return nota
    else:
        return 0
def computar_nota_f(sexo, nota):
    if(sexo == 'F'):
        return nota
    else:
        return 0

def computar_media(valor, qtd):
    if(qtd == 0):
        return 0
    else:
        return valor / qtd

def classificar_nota(nota):
    if(nota <= 0 and nota <= 2):
        return 'Péssimo'
    else:
        if(nota <= 4):
            return 'Ruim'
        else:
            if(nota < 7):
                return 'Regular'
            else:
                if(nota < 8):
                    return 'Bom'
                else:
                    if(nota <= 10):
                        return 'Excelente'
                    else:
                        return 'Valor inválido! (menor que 0 ou maior que 10)'

def exibir_resultado(qtd_alunos, qtd_homens, qtd_mulheres, desempenho_turma, desempenho_homens, desempenho_mulheres):
    print('----------\nClassificação da turma:')
    print(f'Quantidade de alunos: {qtd_alunos}')
    print(f'Quantidade de homens que fizerama a avaliação: {qtd_homens}')
    print(f'Quantidade de mulheres que fizeram a avaliação: {qtd_mulheres}')
    print(f'Desempenho geral da turma: {desempenho_turma}')
    print(f'Desempenho dos homens da turma: {desempenho_homens}')
    print(f'Desempenho das mulheres da turma: {desempenho_mulheres}')

main()