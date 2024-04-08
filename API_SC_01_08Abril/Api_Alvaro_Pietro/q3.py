#inacabada
def main():
    sexo = 'M'
    contador_aluno = 0
    notamais = 0
    contador_homem = 0
    contador_mulher = 0

    while sexo == 'M' or sexo == 'F':
        sexo = input('Sexo do aluno(a). (M ou F): ').upper()
        if sexo != 'M' and sexo != 'F':
            print('FIM')
        else:
            contador_aluno += 1
            if sexo == 'M':
                contador_homem += 1
            elif sexo == 'F':
                contador_mulher += 1

            nota = int(input(f'Insira a nota do {contador_aluno}° aluno: '))
            if nota > 10 or nota < 0:
                print('Insira uma nota válida entre 0 e 10')
            
            maior_nota = []
            menor_nota = []
            maior_nota = nota 
            maior_nota_atual = nota
            menor_nota = nota
            menor_nota_atual = nota

            if maior_nota_atual > maior_nota:
                maior_nota = maior_nota_atual
            elif maior_nota_atual < maior_nota:
                maior_nota = maior_nota

            if menor_nota < menor_nota_atual:
                menor_nota = menor_nota
            elif menor_nota > menor_nota_atual:
                menor_nota = menor_nota_atual
            
            notamais = nota + notamais
            notareajuste = notamais
            soma_nota = notareajuste
            media_nota = soma_nota // contador_aluno

            if contador_homem > 0:
                media_nota_homens = soma_nota // contador_homem

            elif contador_mulher > 0:
                media_nota_mulheres = soma_nota // contador_mulher
                

    def desempenho(media_nota):
        if media_nota > 0 and media_nota < 3:
            return 'Péssimo'
        elif media_nota > 2 and media_nota < 5:
            return 'Ruim'
        elif media_nota > 4 and media_nota < 8:
            return 'Regular'
        elif media_nota > 7 and media_nota < 9:
            return 'Bom'
        elif media_nota > 8 and media_nota < 11:
            return 'Excelente'
        
    desempenho_turma = desempenho(media_nota)
    print(f'Alunos contabilizados: {contador_aluno}')
    print(f'Quantidade de homens: {contador_homem}')
    print(f'Quantidade de mulheres: {contador_mulher}')
    print(f'Maior nota: {maior_nota}')
    print(f"Menor nota: {menor_nota}")
    print(f'Média das notas: {media_nota}')
    print(f'Média das notas homens: {media_nota_homens}')
    print(f'Média das notas mulheres: {media_nota_mulheres}')
    print(f'DESEMPENHO DA TURMA: {desempenho_turma}')

main()