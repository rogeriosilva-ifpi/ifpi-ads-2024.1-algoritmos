def main():

    contador_alunos = 0
    somatorio_notas_total = 0
    contador_alunos_M = 0
    contador_alunos_F = 0
    somatorio_notas_M = 0
    somatorio_notas_F = 0
    desempenho_geral = ''
    desempenho_M = ''
    desempenho_F = ''

    sexo = input('Informe o sexo do aluno: ')
    nota = float(input('Informe a nota do alun@: '))

    maior_nota = nota
    menor_nota = nota


    while sexo == 'M' or sexo == 'F':

        if sexo == "M":

            somatorio_notas_M += nota
            contador_alunos_M += 1

        else:

            somatorio_notas_F += nota
            contador_alunos_F += 1

        if nota > maior_nota:

            maior_nota == nota

        elif nota < menor_nota:

            menor_nota == nota

    
        somatorio_notas_total += nota 

        contador_alunos += 1

        sexo = input('Informe o sexo do aluno (M OU F): ')  
        nota = float(input('Informe a nota do alun@ (1 AO 10): '))


    media_notas_totais = somatorio_notas_total / contador_alunos
    media_notas_M = somatorio_notas_M / contador_alunos_M
    media_notas_F = somatorio_notas_F / contador_alunos_F

    performance_M = media_notas_M * 10
    performance_F = media_notas_F * 10

    desempenho_geral = desempenho(media_notas_totais)
    desempenho_M =  desempenho(media_notas_M)
    desempenho_F = desempenho(media_notas_F)
            
    

    print (f"""

                        >>>>> Notas da turma 2024 <<<<<
           
           
            . A maior nota da turma  --->       {maior_nota}
            . A menor nota da turma  --->       {menor_nota}
            . A media geral da turma --->       {media_notas_totais}

                            >>>>> PERFORMANCE <<<<<

            . A performance das Notas dos homens ---> {performance_M}%
            . A performance das Notas dos homens ---> {performance_F}%

                            >>>>> NUMERO DE ALUNOS <<<<<

            . O número de AlunOS ---->  {contador_alunos_M}
            . O número de AlunAS ---->  {contador_alunos_F}

                            >>>>> DESEMPENHO <<<<<

            . O desempenho da Turma foi {desempenho_geral}
            . O desempenho dos Homens foi {desempenho_M}
            . O desempenho da Mulheres foi {desempenho_F}



    """)


def desempenho(media_notas):

    if media_notas >= 0 and media_notas <= 2:

        desempenho = 'Pessimo'
        return desempenho

    
    elif media_notas > 2 and media_notas <= 4:

        desempenho = 'Ruim'
        return desempenho
        

    elif media_notas > 4 and media_notas <= 7:

        desempenho = 'Regular'
        return desempenho
      
    
    elif media_notas > 7 and media_notas <= 8:

        desempenho = 'Bom'
        return desempenho 
    

    elif media_notas > 8 and media_notas <= 10:

        desempenho = 'Exelente'
        return desempenho




        

main()