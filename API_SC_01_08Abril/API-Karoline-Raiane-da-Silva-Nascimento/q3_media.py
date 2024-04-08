def main():

    sexo = input("Masculino ou Feminino?? (M ou F) ")
    nota = float(input("Nota: "))

    total_alunos = 0
    total_notas = 0
    maior_nota = nota
    menor_nota = nota
    total_masculino = 0
    total_feminino = 0
    homens = 0
    mulheres = 0


    while sexo == "F" or sexo == "M":
        if nota > maior_nota:
            maior_nota = nota
        if nota < menor_nota:
            menor_nota = nota

        if sexo == "F":
            total_feminino += nota
            mulheres += 1

        if sexo == "M":
            total_masculino += nota
            homens += 1

        total_notas += nota
        total_alunos += 1

        sexo = input("Masculino ou Feminino?? (M ou F) ")

        if sexo == "F" or sexo == "M":
            nota = float(input("Nota: "))
        else: 
            print("Fim")


    

    media = total_notas / total_alunos
    perf_masc = (total_masculino / total_notas) * 100
    perf_feminina = (total_feminino / total_notas) * 100
    desempenho_masc = total_masculino / homens
    desempenho_fem = total_feminino / mulheres
    class_geral, class_fem, class_masc = calc_desempenho(media, desempenho_masc, desempenho_fem)

    resultado = f""" 
    - Total de alunos: {total_alunos}
    - Total mulheres: {mulheres}
    - Total homens: {homens}
    - Maior nota geral: {maior_nota}
    - Menor nota geral: {menor_nota}
    - Média geral: {media} 
    - Classificação geral: {class_geral}
    - Performance feminina: {perf_feminina:.2f} %
    - Classificação feminina: {class_fem}
    - Performance masculina: {perf_masc:.2f} %
    - Classificação masculina: {class_masc}"""

    print(resultado)


def calc_desempenho(media, desempenho_masc, desempenho_fem):
    class_geral = ""
    class_masc = ""
    class_fem = ""

    if media <= 2:
        class_geral = "Péssimo"
    elif media <= 4:
        class_geral = "Ruim"
    elif media <= 7:
        class_geral = "Regular"
    elif media <= 8:
        desempenho_geral = "Bom"
    elif media <= 10:
        class_geral = "Excelente"

    if desempenho_fem <= 2:
        class_fem = "Péssimo"
    elif desempenho_fem <= 4:
        class_fem = "Ruim"
    elif desempenho_fem <= 7:
        class_fem = "Regular"
    elif desempenho_fem <= 8:
        class_fem = "Bom"
    elif desempenho_fem <= 10:
        class_fem = "Excelente"

    if desempenho_masc <= 2:
        class_masc = "Péssimo"
    elif desempenho_masc <= 4:
        class_masc = "Ruim"
    elif desempenho_masc <= 7:
        class_masc = "Regular"
    elif desempenho_masc <= 8:
        class_masc = "Bom"
    elif desempenho_masc <= 10:
        class_masc = "Excelente"

    return class_geral, class_fem, class_masc



    

main()