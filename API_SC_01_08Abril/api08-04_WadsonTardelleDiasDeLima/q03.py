def calcular_escala(total, parcela):
    return (parcela * 100) / total

def main() :
    menorNotaGeral = 0
    maiorNotaGeral = 0
    qtdTotalAlunos = 0
    qtdTOtalMulheres = 0
    qtdTotalHomens = 0
    somatorioNotas = 0

    while True:
        sexo = input("digite o sexo: ").capitalize()
        if sexo == 'F':
            qtdTOtalMulheres += 1
            qtdTotalAlunos += 1
        elif sexo == 'M':
            qtdTotalHomens += 1
            qtdTotalAlunos += 1
        else:
            break

        nota = float(input("digite a nota: "))
        somatorioNotas += nota
        menorNotaGeral = nota
        if nota > maiorNotaGeral:
            maiorNotaGeral = nota
        if nota < menorNotaGeral:
            menorNotaGeral = nota
    mediaGeralTurma = somatorioNotas / qtdTotalAlunos
    print(f"média geral da turma: {mediaGeralTurma:.2f}")
    print(f"mulheres: {qtdTOtalMulheres}")
    print(f"Total de homens: {qtdTotalHomens}")
    print(f"maior nota: {maiorNotaGeral}")
    print(f"menor nota: {menorNotaGeral}")

    desempenho = ""
    if mediaGeralTurma < 2:
        desempenho = 'pécimo'
    elif mediaGeralTurma < 4:
        desempenho = 'ruim'
    elif mediaGeralTurma <= 7:
        desempenho = "regular"
    elif mediaGeralTurma < 8:
        desempenho = "bom"
    elif mediaGeralTurma < 10:
        desempenho = "excelente"



    print(f"desempenho da turma: {desempenho}! ")
    
if __name__ == "__main__":
    main()