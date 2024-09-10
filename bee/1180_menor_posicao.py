def main():
  # Entrada
  n = int(input('N: '))
  dados = input('Valores: ').split(' ')

  # Processamento
  # valores = mapear(dados, int) #lambda
  valores = mapear(dados, lambda x: int(x))  
  posicao = obter_posicao_menor(valores)

  # Saída
  print(f'Menor valor: {valores[posicao]}')
  print(f'Posicao: {posicao}')


def mapear(colecao, funcao):
  for i in range(len(colecao)):
    colecao[i] = funcao(colecao[i])
  
  return colecao

def obter_posicao_menor(colecao):
  posicao = 0
  
  for i in range(1, len(colecao)):
    if colecao[i] < colecao[posicao]:
      posicao = i
  
  return posicao


# soma = lambda a,b: a + b

def soma(a, b):
  soma = a + b
  return soma

main()