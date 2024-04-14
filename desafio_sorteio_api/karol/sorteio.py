import os
import random

def main():
    arquivo = config_arquivo()
    qtd_grupos = 0
    opcao = menu()

    while opcao != "0":
        if opcao == "1":
            qtd_alunos(arquivo)
        elif opcao == "2":
            qtd_grupos = int(input("Quantidade de grupos: "))
        elif opcao == "3":
            excluir(arquivo)
        elif opcao == "4":
            sorteio(arquivo, qtd_grupos)
        else:
            print("Opção inválida.")

        opcao = menu()

    arquivo.close()
    os.remove("lista_temp.csv")

    print("Fim do código")


def menu():
    texto_menu = f"""
1- Quantidade de alunos disponíveis
2 - Informar quantidade de grupos
3 - Excluir pessoas
4 - Sortear
0 - Sair

Escolha uma opção: 
"""
    return input(texto_menu)


def config_arquivo():
    caminho_arquivo = input("Insira o caminho do arquivo: ")

    if os.path.exists(caminho_arquivo):
        arquivo_original = open(caminho_arquivo, "r")
        arquivo_temp = open("lista_temp.csv", "w+")
        arquivo_temp.write(arquivo_original.read())
        arquivo_temp.seek(0)

        return arquivo_temp
    else:
        print("Arquivo não existe")
        return config_arquivo()


def qtd_alunos(arquivo):
    cont = 0
    linha = arquivo.readline()

    while linha:
        if linha[0]:
            cont += 1
        linha = arquivo.readline()

    print(f"O arquivo tem {cont} alunos.")
    arquivo.seek(0)


def excluir(arquivo):
    cont = 0
    linhas = arquivo.readlines()
    while cont < len(linhas):
        print(f"{cont + 1} - {linhas[cont]}")
        cont += 1

    escolha = int(input("Qual número do aluno a ser removido? (Digite 0 para voltar para o menu inicial): "))

    if escolha < 0 or escolha > cont:
        print("Opção inválida.")
        return excluir(arquivo)

    if escolha != 0:
        del linhas[escolha - 1]

        arquivo.seek(0)
        arquivo.truncate()

        arquivo.writelines(linhas)
        arquivo.seek(0)

        return excluir(arquivo)

    arquivo.seek(0)


def sorteio(arquivo, qtd_grupos):
    if qtd_grupos <= 0:
        return print("Você deve definir o número de grupos primeiro")

    nomes = arquivo.readlines()
    random.shuffle(nomes)

    qtd_por_grupo = len(nomes) // qtd_grupos
    qtd_restantes = len(nomes) % qtd_grupos

    grupos_sorteados = []

    count = 0
    while count < qtd_grupos:
        init_intervalo = count * qtd_por_grupo
        fim_intervalo = (count + 1) * qtd_por_grupo
        grupos_sorteados.append(nomes[init_intervalo:fim_intervalo])

        count += 1

    if qtd_restantes:
        grupos_sorteados[-1].extend(nomes[-qtd_restantes:])

    count = 0
    while count < len(grupos_sorteados):
        grupos_sorteados[count].sort()
        i = 0
        print(f"Grupo {count + 1} - {len(grupos_sorteados[count])} alunos")
        while i < len(grupos_sorteados[count]):
            print(grupos_sorteados[count][i])
            i += 1
        count += 1

    escolha = input("Deseja excluir algum aluno? (S/N): ")
    while escolha != "N":
        escolha_grupo = int(input("De qual grupo pretende remover? "))
        if 0 < escolha_grupo <= qtd_grupos:
            i = 0
            while i < len(grupos_sorteados[escolha_grupo - 1]):
                print(f"{i + 1} - {grupos_sorteados[escolha_grupo - 1][i]}")
                i += 1

            escolha_aluno = int(input("Qual número do aluno a ser removido? "))
            if 0 < escolha_aluno <= qtd_por_grupo:
                del grupos_sorteados[escolha_grupo - 1][escolha_aluno - 1]
            else:
                print("Número de aluno inválido.")
        else:
            print("Grupo inválido.")

        escolha = input("Deseja excluir algum aluno? (S/N): ")

    for grupo in grupos_sorteados:
        print(len(grupo))
        for aluno in grupo:
            print(aluno)

    escolha = input("Deseja salvar o sorteio em um arquivo? (S/N): ")
    if escolha == "S":
        lista_sorteados = input("Nome do arquivo com os grupos sorteados: ")
        arquivo_sorteio = open(lista_sorteados, "a")
        arquivo_sorteio.truncate()

        count = 0
        while count < len(grupos_sorteados):
            i = 0
            arquivo_sorteio.write(f"Grupo {count + 1}\n")
            while i < len(grupos_sorteados[count]):
                arquivo_sorteio.write(grupos_sorteados[count][i])
                i += 1
            count += 1

        arquivo_sorteio.close()

    arquivo.seek(0)


if __name__ == '__main__':
    main()
