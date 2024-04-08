# Made On Linux By José Macêdo Dos Santos Junior 2024111TADS0038.

# A seguinte questão ficou incompleta devido ao tempo ter esgotado.

# Entrada e saída de dados
def main():
    # Dediquei um pouco de tempo a esta questão, porém o tempo já estava esgotando.
    numero_alunos = 0
    numero_homens = 0
    numero_mulheres = 0
    maior_nota_geral = 0
    menor_nota_geral = 0
    media_geral_turma = 0
    perfomance_homens = 0  # Em %
    perfomance_mulheres = 0  # Em %

    n = 0
    while n == 0:
        sexo = str(input('> Digite o sexo do aluno: (M-Masculino, F-Feminino)\n> '))
        if sexo.upper() == 'M' or sexo.upper() == 'F':
            numero_alunos += 1
            if sexo.upper() == 'M':
                numero_homens += 1
            elif sexo.upper() == 'F':
                numero_mulheres += 1
            nota = float(input('> Digite a nota do aluno:\n> '))
            if maior_nota_geral == 0:
                maior_nota_geral = nota
            else:
                maior_nota_geral = nota if nota > maior_nota_geral else maior_nota_geral
            if menor_nota_geral == 0:
                menor_nota_geral = nota
            else:
                menor_nota_geral = nota if nota < menor_nota_geral else menor_nota_geral
        else:
            n = 1


if __name__ == '__main__':
    print('> Questão incompleta, main() removido a fim de não ocasionar erros')
    