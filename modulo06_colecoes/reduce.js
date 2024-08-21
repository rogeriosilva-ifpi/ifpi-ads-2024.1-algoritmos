import { print } from '../utils/io_utils.js';

function main(){

  const numeros = gerar_lista(10, 10, 99)
  mostrar_itens(numeros, 'Todos')

  const somatorio = somatorio_lista(numeros)
  print(`O Valores do Vetor somam --> ${somatorio}`)

  // const menor_valor = reduzir(numeros)
  const menor_valor = reduzir(numeros, menor, numeros[0])
  print(`O Menor valor na lista é --> ${menor_valor}`)

  const maior_valor = reduzir(numeros, (acc, v) => v > acc ? v : acc, numeros[0])
  print(`O Maior valor na lista é --> ${maior_valor}`)
}

function gerar_lista(tamanho, inicio, final){
  const lista = []
  for (let i = 0; i < tamanho; i++){
    lista.push(get_random_number(inicio, final))
  }
  return lista
}

function get_random_number(inicio, final){
  return Math.floor(Math.random() * ((final+1) - inicio)) + inicio
}

function mostrar_itens(colecao, titulo){
  print(`>>> Itens: ${titulo}`)
  for(let i = 0; i < colecao.length; i++){
    print(colecao[i])
  }
  print('>>>> ------- <<<<')
}

function somatorio_lista(colecao){
  let acumulado = 0

  for (let atual of colecao){
    acumulado = acumulado + atual
  }

  return acumulado
}

function menor_valor_lista(colecao){

  let menor = colecao[0]

  for (let i = 1; i < colecao.length; i++){
    const atual = colecao[i]
    if (atual < menor){
      menor = atual
    }
  }

  return menor
}

function reduzir(colecao, funcao, valor_inicial){
  let acumulado = valor_inicial

  for (let i = 0; i < colecao.length; i++){
    acumulado = funcao(acumulado, colecao[i])
  }

  return acumulado
}


function menor(valor1, valor2){
  if (valor1 < valor2){
    return valor1
  }else{
    return valor2
  } 
}


main()