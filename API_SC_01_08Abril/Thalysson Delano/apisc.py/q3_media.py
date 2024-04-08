def main():
    
    print('Desempenho Escolar\n------------------')
    contador_homens = 0
    contador_mulheres = 0
    nota1_homens = 0
    nota1_mulheres = 0

    sexo = str(input('Digite o Sexo do Aluno(a) : ')).upper()
    if sexo == 'M':
        nota = float(input('Digite a Nota do Aluno(a) : '))
        nota1_homens += nota
        nota1 = nota
        contador_homens += 1
    elif sexo == 'F':
        nota = float(input('Digite a Nota do Aluno(a) : '))
        nota1_mulheres += nota
        nota1 = nota
        contador_mulheres += 1

    maior_nota = nota
    menor_nota = nota
    soma_geral = 0
    contador_total = 0
    soma_nota_homens = 0
    soma_nota_mulheres = 0

    while sexo == 'M' or sexo == 'F':
        sexo = sexo = str(input('Digite o Sexo do Aluno(a) : ')).upper()
        contador_total += 1
        if sexo == 'M':
            contador_homens += 1
        if sexo == 'F':
            contador_mulheres += 1

        if sexo == 'M' or sexo == 'F':
            nota = float(input('Digite a Nota do Aluno(a) : '))
            if sexo == 'M':
                soma_nota_homens += nota
            if sexo == 'F':
                soma_nota_mulheres += nota

            if nota > maior_nota:
                maior_nota = nota
            if nota < menor_nota:
                menor_nota = nota
            
            soma_geral += nota
            media_geral = (soma_geral + nota1) / (contador_total + 1)

        else:
            print('PROGRAMA FINALIZADO')

    media_nota_homens = (soma_nota_homens + nota1_homens) / (contador_homens)
    media_nota_mulheres = (soma_nota_mulheres + nota1_mulheres) / (contador_mulheres)
    percent_mulheres = media_nota_mulheres * 10
    percent_homens = media_nota_homens * 10        

    print(f'''===== RELATORIO =====
    Maior Nota Geral : {maior_nota:.1f}
    Menor Nota Geral : {menor_nota:.1f}
    Média Geral : {media_geral:.1f}
    
    Quantidade Total de Alunos : {contador_total}
    Quantidade de Homens : {contador_homens}
    Quantidade de Mulheres : {contador_mulheres}

    Performance dos Homens : {percent_homens:.1f}%
    Performance das Mulheres : {percent_mulheres:.1f}%''')

    print('_____________________')
    if media_geral <= 2:
        print('DESEMPENHO DA TURMA : PÉSSIMO')
    elif media_geral <= 4:
        print('DESEMPENHO DA TURMA : RUIM')
    elif media_geral <= 7:
        print('DESEMPENHO DA TURMA : REGULAR')
    elif media_geral <= 8:
        print('DESEMPENHO DA TURMA : BOM')
    elif media_geral <= 10:
        print('DESEMPENHO DA TURMA : EXCELENTE')
    print('_____________________')
    if media_nota_homens <= 2:
        print('DESEMPENHO DA HOMENS : PÉSSIMO')
    elif media_nota_homens <= 4:
        print('DESEMPENHO DOS HOMENS : RUIM')
    elif media_nota_homens <= 7:
        print('DESEMPENHO DOS HOMENS : REGULAR')
    elif media_nota_homens <= 8:
        print('DESEMPENHO DOS HOMENS : BOM')
    elif media_nota_homens <= 10:
        print('DESEMPENHO DOS HOMENS : EXCELENTE')
    print('_____________________')
    if media_nota_mulheres <= 2:
        print('DESEMPENHO DAS MULHERES : PÉSSIMO')
    elif media_nota_mulheres<= 4:
        print('DESEMPENHO DAS MULHERES : RUIM')
    elif media_nota_mulheres <= 7:
        print('DESEMPENHO DAS MULHERES : REGULAR')
    elif media_nota_mulheres <= 8:
        print('DESEMPENHO DAS MULHERES : BOM')
    elif media_nota_mulheres <= 10:
        print('DESEMPENHO DAS MULHERES : EXCELENTE')

main()