import { break_line, get_positive_number, print, print_inline } from '../utils/io_utils.js'

function main(){
  print('>> Matriz <<<')
  const linhas = get_positive_number('Linhas: ')
  const colunas = get_positive_number('Colunas: ')

  const matriz = criar_matriz(linhas, colunas)
  preencher_matriz(matriz, linhas, colunas)
  
  show_matriz(matriz)

}

function criar_matriz(linhas, colunas){
  const matriz = []
  for (let i = 0; i < linhas; i++){
    matriz.push(criar_vetor(colunas))
  }
  return matriz
}

function criar_vetor(tamanho, valor=0){
  const vetor = []
  for (let i = 0; i < tamanho; i++){
    vetor.push(valor)
  }
  return vetor
}

function show_matriz(matriz){
  print('Matriz')
  for (let i = 0; i < matriz.length; i++){
    for (let j = 0; j < matriz[i].length; j++){
      print_inline(`${matriz[i][j]}\t`)
    }
    break_line()
  }
  print('-----------')
}

function preencher_matriz(matriz, linhas, colunas){
  for (let i = 0; i < linhas; i++){
    for (let j = 0; j < colunas; j++){
      matriz[i][j] = get_positive_number(`Valor[${i}][${j}]: `)
    }
  }
}

main()