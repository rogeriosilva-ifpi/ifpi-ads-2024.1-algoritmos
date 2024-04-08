# Made On Linux By José Macêdo Dos Santos Junior 2024111TADS0038.
# Entrada e saída de dados
def main():
    # Processamento
    lista = ''
    listagem = 0
    total = 0
    n = 0
    while n == 0:
        option = int(input('''>-- OPÇÕES --
    [1] - Incluir item
    [2] - Listar itens
    [0] - Sair\n> '''))
        if option == 0:
            n = 1
        elif option == 1:
            if lista != '':
                lista += '\n'
            listagem += 1
            nome = str(input('> Digite o nome do item:\n> '))
            specs = str(input('> Digite as especificações do item:\n> '))
            tamanho = abs((len(nome) + len(specs)) - 26)
            price = float(input('> Digite o preço do item:\n> '))
            total += price
            espaco = 1
            if price < 10:
                espaco = 2
            lista += f'{listagem}-{nome} ({specs}){tamanho * " "}R${espaco * " "}{price:.2f}'
            print('> item incluído com sucesso!')
        elif option == 2:
            if lista == '':
                print('\n> Sua lista está vazia!\n')
            else:
                # Houve uma dúvida nessa parte referente ao enunciado.
                # Pede-se para mostrar o valor das parcelas, ou eu deveria mostrar cada parcela indivualmente?
                print()
                print('-' * 10, 'PESQUISA DE PREÇOS', '-' * 10)
                print(lista)
                print('-' * 40)
                print(f'Valor total:{19 * " "}R${1 * " " if total > 9 else 2 * " "}{total:.2f}')
                if total <= 30:
                    # A dúvida anterior se reforça aqui
                    # Se as parcelas (6x) possuem juros compostos, é esperado que eu imprima todas (uma por uma) as parcelas
                    # com o acrescimo de 5% do total em cada, porém o enunciado diz apenas que o cálculo que é feito ao mês.
                    # Eu apenas mostrei como serão as parcelas.
                    print(f'6 parcelas com 5% de juros:{4 * " "}R${1 * " " if total / 6 > 9 else 2 * " "}{(total / 6 + total * 0.05):.2f}')
                    print('Não é possível parcelar de outra forma\n')
                elif 30 < total <= 100:
                    print(f'3 parcelas de:{17 * " "}R${1 * " " if total / 3 > 9 else 2 * " "}{(total / 3):.2f}')
                    print(f'6 parcelas com 5% de juros:{4 * " "}R${1 * " " if total / 6 > 9 else 2 * " "}{(total / 6 + total * 0.05):.2f}\n')
                else:
                    print(f'5 parcelas de:{17 * " "}R${1 * " " if total / 5 > 9 else 2 * " "}{(total / 5):.2f}')
                    print(f'6 parcelas com 5% de juros:{4 * " "}R${1 * " " if total / 6 > 9 else 2 * " "}{(total / 6 + total * 0.05):.2f}\n')
        else:
            print('\n> Digite os números que estão nas opções!\n')


if __name__ == '__main__':
    main()
