import os, time, random

def main():
    arquivo = open('alunos-algoritmos-20241.csv', 'r')
    linhas = arquivo.readlines() # linhas recebe ['item1\n', item2\n'...]
    alunos = []
    for aluno in linhas:
        alunos.append(aluno.rstrip()) # adiciona cada aluno à lista alunos sem o \n

    arquivo.close()
    lista_grupos = []

    opcao = ''

    while opcao != '0':
        os.system('clear')
        print(f'''
        1 - (Re)Carregar alunos
        2 - Excluir aluno
        3 - (Re)Sortear grupos
        4 - Listar alunos que serão sorteados
        5 - Listar Grupos
        6 - Gravar resultado em arquivo
        7 - Funcionalidade Secreta (Hehe)
        0 - Sair
            
        Alunos disponíveis para sorteio: {len(alunos)}
        ''')

        opcao = str(input('>>> Qual a sua opção: '))
        os.system('clear')
        # Recarregar ou carregar a lista de alunos
        if opcao == '1':
            
            print('Carregando Alunos...')
            time.sleep(1)

            # carrega todos os alunos que estao NO ARQUIVO CSV
            arquivo = open('alunos-algoritmos-20241.csv', 'r')
            linhas = arquivo.readlines()
            alunos = []
            for aluno in linhas:
                alunos.append(aluno.rstrip())
            arquivo.close()

            print('Lista de alunos carregada!')
            time.sleep(0.7)
            os.system('clear')

        # excluir um ou mais alunos
        elif opcao == '2':
            
            excluir_outro = 's'
            while excluir_outro.lower() == 's':
                os.system('clear')
                indice = 0

                # mostra todos os alunos disponiveis para sorteio
                for indice in range(len(alunos)):
                    print(f'{indice+1}: {alunos[indice]}')
                
                print('\nQual aluno deseja excluir? (Digite o número correspondente ao aluno, que aparece na tela) ')
                escolha = int(input()) # usuario escolhe o numero do aluno
                if escolha > len(alunos) or escolha < 1: # caso digite um numero invalido
                    os.system('clear')
                    print('Erro! Você tentou excluir um aluno que não está listado.')
                    time.sleep(0.5)
                    input('Pressione ENTER para sair...')
                    pass
                    
                else:
                    del alunos[escolha-1] # deleta o aluno da lista de disponiveis
                
                    print('Aguarde...')
                    time.sleep(0.5)
                    print('Aluno excluído com sucesso!')

                    excluir_outro = str(input('Deseja excluir outro aluno? (s/n) '))
                    while excluir_outro.lower() != 's' and excluir_outro.lower() != 'n':
                        print('Digite uma opção válida! (s ou n)')
                        excluir_outro = str(input('Deseja excluir outro aluno? (s/n) '))
                    
                    os.system('clear')
                
            
        # Sortear grupos
        elif opcao == '3':
            
            # cria uma copia da lista de alunos, para eu ter o original intacto se eu modificar aux
            aux = alunos[:]

            # se o usuario botar que sejam menos de 1 grupo ou mais grupos que a quantidade de pessoas, esse bloco é exibido
            quantidade_grupos = int(input('Quantos grupos deseja? '))
            if quantidade_grupos > len(aux) or quantidade_grupos < 1:
                os.system('clear')
                print('''Quantidade de grupos inválida!!
Digite um valor que seja maior que 0 e menor que o tamanho da lista de alunos!''')
                input('Pressione ENTER para sair...')
                os.system('clear')
                quantidade_grupos = int(input('Quantos grupos deseja? '))

            # esvazia a lista de grupos, possibilitando o 're-sorteio'
            lista_grupos = []
            cont_grupos = 0
            somatorio_escolhas = 0
            

            # para cada grupo
            while cont_grupos < quantidade_grupos:
                grupo = []
                divisao_grupo = int(input(f'Informe quantos integrantes terá o grupo {cont_grupos+1}: '))
                somatorio_escolhas += divisao_grupo
                
                # caso o usuario informe mais alunos do que o previsto
                if somatorio_escolhas > len(alunos) or divisao_grupo > len(aux):
                    print('Erro!! Você está alocando mais alunos do que a quantidade existente deles!')
                    print(f'Existem {len(alunos)} disponíveis, você tentou alocar {somatorio_escolhas}. Refaça o sorteio para prosseguir.')
                    input('Pressione ENTER para sair...')
                    cont_grupos+=1
                    lista_grupos = []
                    break

                else:
                    for integrantes in range(divisao_grupo):
                        sorteado = random.choice(aux)
                        grupo.append(sorteado)
                        aux.remove(sorteado)
                    
                    lista_grupos.append(sorted(grupo))
                
                    cont_grupos += 1

            
            if somatorio_escolhas <= len(alunos):
                print('Sorteando...')
                time.sleep(1)
                print('Grupos sorteados!')
                time.sleep(0.75)
                os.system('clear')
            
        
        # ver alunos que participarão do sorteio
        elif opcao == '4':
            
            print('Alunos que participarão, ordenados por nome:\n')
            indice_alunos = 1

            # mostra todos os alunos ainda disponiveis, 1 aluno por linha em ordem alfabetica
            for aluno in sorted(alunos):
                print(f'{indice_alunos} - {aluno}')
                indice_alunos += 1

            input('\nPressione ENTER para sair...')
            os.system('clear')

        # ver grupos
        elif opcao == '5':
        
            # caso ainda nao exista nenhum grupo formado, nada acontece no sorteio
            if lista_grupos == []:
                print('Nenhum grupo foi sorteado ainda!')
                input('Pressione ENTER para sair...')
                os.system('clear')

            else:  
                os.system('clear')   
                print('======== G R U P O S ========\n')
                
                # mostra em qual grupo está
                for grupos in range(len(lista_grupos)):
                    print(f'- G R U P O  {grupos+1} -\n')
                    # mostra os integrantes de cada grupo em ordem
                    for integrante in range(len(lista_grupos[grupos])):
                        print(f'{integrante+1} - {lista_grupos[grupos][integrante]}')
                        
                        # se o integrante for o ultimo, ele quebra a linha
                        if integrante+1 == len(lista_grupos[grupos]):
                            print('')

                input('Pressione ENTER para sair...')
                os.system('clear')



        # gravar em arquivo
        elif opcao == '6':

            if lista_grupos == []:
                print('Nenhum grupo foi sorteado ainda!')
                input('Pressione ENTER para sair...')
                os.system('clear')

            else:    
                print('Gravando resultado em arquivo...')
                resultado = open('resultado.txt', 'w')
                # mostra em qual grupo está
                for grupos in range(len(lista_grupos)):
                    resultado.write(f'- G R U P O  {grupos+1} -\n')
                    resultado.write('\n')
                    # mostra os integrantes de cada grupo em ordem
                    for integrante in range(len(lista_grupos[grupos])):
                        resultado.write(f'PC {integrante+1} - {lista_grupos[grupos][integrante].rstrip()} \n')
                        
                        # se o integrante for o ultimo, ele quebra a linha
                        if integrante+1 == len(lista_grupos[grupos]):
                            resultado.write('\n')

                resultado.close()

                time.sleep(0.7)
                print('Arquivo gravado com sucesso!')
                input('Pressione ENTER para sair...')
                os.system('clear')

        # funcionalidade secreta KKKK
        elif opcao == '7':
            import webbrowser
            new=2
            url="https://www.youtube.com/watch?v=LsL7-CDsgXc"

            webbrowser.open(url,new=new)
            
        # sair
        elif opcao == '0':
            print('>>> Saindo...')
            time.sleep(0.2)

        else:
            print('>>> Opção Inválida! <<<')
            input('Pressione ENTER para sair...')

main()
