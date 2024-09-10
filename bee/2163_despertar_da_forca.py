def main():
  [linhas, colunas] = mapear(input().split(' '), int)

  matriz = gerar_vetor(linhas)
  for i in range(len(matriz)):
    matriz[i] = mapear(input().split(' '), int)

  linha, coluna = buscar_sabre(matriz)

  print(linha+1, coluna+1)

def buscar_sabre(matriz):
  for i in range(1, len(matriz)-1):
    for j in range(1, len(matriz[i])-1):
      if eh_sabre(matriz, i, j):
        return i, j
  
  return 0, 0


def eh_sabre(matriz, i, j):
  if matriz[i][j] != 42:
    return False
  elif matriz[i][j-1] != 7 \
    or matriz[i][j+1] != 7 \
      or matriz[i+1][j] != 7 \
        or matriz[i-1][j] != 7 \
          or matriz[i-1][j-1] != 7 \
            or matriz[i-1][j+1] != 7 \
              or matriz[i+1][j-1] != 7 \
                or matriz[i+1][j+1] != 7:
    return False
  else:
    return True

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

def mapear(colecao, funcao):
  for i in range(len(colecao)):
    colecao[i] = funcao(colecao[i])
  
  return colecao

main()