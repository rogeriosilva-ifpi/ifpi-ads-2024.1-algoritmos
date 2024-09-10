import random

def main():
  qtd = int(input('Quantos Casos de Teste:'))

  for i in range(qtd):
    coluna = sortear_coluna()
    operacao = sortear_operacao()
    valores = gerar_valores_aleatorios(144)
    gravar_em_arquivo(coluna, operacao, valores, '1182_entrada.txt')
  

  print('Casos gerados com sucesso!')

def sortear_coluna():
  return random.randint(0, 11)

def sortear_operacao():
  operacoes = ['S', 'M']
  return operacoes[random.randint(0, 1)]

def gerar_valores_aleatorios(qtd):
  # de -100.0 até 100.0
  valores = []

  for i in range(qtd):
    elemento = random.randint(-1000, 1000) / 10
    valores.append(elemento)
  
  return valores


def gravar_em_arquivo(coluna, operacao, valores, nome_arquivo):
  arquivo = open(nome_arquivo, '+a')
  valores = mapear(valores, lambda v: str(v)+'\n')

  linhas = []
  linhas.append(str(coluna) + '\n')
  linhas.append(operacao + '\n')
  linhas.extend(valores)

  arquivo.write(''.join(linhas))

def mapear(colecao, funcao):
  for i in range(len(colecao)):
    colecao[i] = funcao(colecao[i])
  
  return colecao

main()