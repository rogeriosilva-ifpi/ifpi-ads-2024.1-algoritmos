def main():
  coluna = int(input())
  operacao = input()

  matriz = gerar_matriz(12, 12, lambda:float(input()))
  # show_matriz(matriz)
  resultado = computar_resultado(matriz, coluna, operacao)

  print(round(resultado, 1))
  

def gerar_matriz(linhas, colunas, valor=lambda: 0):
  matriz = []
  for _ in range(linhas):
    matriz.append(gerar_vetor(colunas, valor))
  
  return matriz

def gerar_vetor(qtd, valor=lambda: 0):
  vetor = []
  for _ in range(qtd):
    vetor.append(valor())
  
  return vetor

def show_matriz(matriz):
  print('|---- Matriz ----|')
  for i in range(len(matriz)):
      print(*matriz[i], sep=' ')
      print()
  print('--------------------')


def computar_resultado(matriz, coluna, operacao):
  valores = obter_valores_coluna(matriz, coluna)
  
  somatorio = 0
  for item in valores:
    somatorio += item
  
  if operacao == 'S':
    return somatorio
  elif operacao == 'M':
    return somatorio / len(valores)


def obter_valores_coluna(matriz, coluna):
  valores = []
  for i in range(len(matriz)):
    valores.append(matriz[i][coluna])
  
  return valores

main()