import csv
import random

def main():
    caminho_arquivo = 'alunos-algoritmos-20241.csv'

    alunos_para_sortear = ler_alunos_para_sortear(caminho_arquivo)
    mostrar_quantidade_alunos(alunos_para_sortear)

    while True:
        alunos_excluidos = escolher_aluno_para_excluir(alunos_para_sortear)
        opcao = input("Escolha uma opção:\n1. Mostrar apenas os alunos excluídos\n2. Adicionar aluno de volta\n3. Continuar sorteio\nDigite o número da opção desejada: ")
        
        if opcao == '1':
            exibir_alunos_excluidos(alunos_excluidos)
        elif opcao == '2':
            alunos_para_sortear += adicionar_aluno_de_volta()
        elif opcao == '3':
            break

    num_grupos = int(input("Informe quantos grupos deseja: "))
    grupos = criar_grupos(alunos_para_sortear, num_grupos)
    
    exibir_grupos(grupos)
    
    gravar_resultado('resultado_sorteio.csv', grupos)

def escolher_aluno_para_excluir(alunos):
    alunos.sort()
    for i in range(len(alunos)):
        print(f'{i} - {alunos[i]}')
    indice = input('Digite o número do aluno que deseja excluir (ou qualquer outra coisa para parar): ')
    alunos_excluidos = [] 
    if not indice.isdigit():
        return alunos_excluidos
    indice = int(indice)
    if 0 <= indice < len(alunos):
        aluno_excluido = alunos.pop(indice)
        alunos_excluidos.append(aluno_excluido)
        escrever_arquivo('alunos-algoritmos-20241.csv', alunos)
    return alunos_excluidos

def exibir_alunos_excluidos(alunos_excluidos):
    if alunos_excluidos:
        print("Alunos excluídos:")
        for aluno in alunos_excluidos:
            print(f"  - {aluno}")
    else:
        print("Nenhum aluno excluído.")

def adicionar_aluno_de_volta():
    aluno = input("Digite o nome do aluno que deseja adicionar de volta (ou deixe em branco para parar): ")
    alunos_adicionados = []
    while aluno:
        alunos_adicionados.append(aluno)
        aluno = input("Digite o nome do próximo aluno que deseja adicionar de volta (ou deixe em branco para parar): ")
    return alunos_adicionados

def escrever_arquivo(caminho_arquivo, conteudo):
    with open(caminho_arquivo, 'w', newline='') as arquivo:
        writer = csv.writer(arquivo)
        for linha in conteudo:
            writer.writerow([linha])

def ler_todos_alunos(caminho_arquivo):
    alunos = []

    with open(caminho_arquivo, 'r') as arquivo:
        reader = csv.reader(arquivo)
        for linha in reader:
            alunos.append(linha[0])
    return alunos

def ler_alunos_para_sortear(caminho_arquivo):
    alunos = []

    with open(caminho_arquivo, 'r') as arquivo:
        reader = csv.reader(arquivo)
        for linha in reader:
            nome = linha[0]
            if '-' not in nome:
                alunos.append(nome)
    return alunos

def mostrar_quantidade_alunos(alunos, excluidos=None):
    print(f"Total de alunos disponíveis para sorteio: {len(alunos)}")
    if excluidos is not None:
        print(f"Total de alunos excluídos: {len(excluidos)}")

def criar_grupos(alunos, num_grupos):
    random.shuffle(alunos)
    total_alunos = len(alunos)
    alunos_por_grupo = total_alunos // num_grupos
    alunos_sobra = total_alunos % num_grupos

    grupos = []
    inicio = 0
    for i in range(num_grupos):
        fim = inicio + alunos_por_grupo + (1 if i < alunos_sobra else 0)
        grupo = sorted(alunos[inicio:fim])  # ordenar os alunos por ordem alfabética
        grupos.append(grupo)
        inicio = fim
    return grupos

def exibir_grupos(grupos):
    for i, grupo in enumerate(grupos):
        print(f"Grupo {i + 1}:")
        for aluno in grupo:
            print(f"  - {aluno}")

def gravar_resultado(caminho_arquivo, grupos):
    with open(caminho_arquivo, 'w', newline='') as arquivo:
        writer = csv.writer(arquivo)
        for i, grupo in enumerate(grupos):
            writer.writerow([f"Grupo {i + 1}"])
            for aluno in grupo:
                writer.writerow([aluno])
            writer.writerow([])

if __name__ == '__main__':
    main()
