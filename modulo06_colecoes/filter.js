import { print } from '../utils/io_utils.js';

function main(){

  const numeros = gerar_lista(18, 1, 100)
  mostrar_itens(numeros, 'Todos')

  // const numeros_impares = filtrar_impares(numeros)
  // const numeros_impares = filtrar(numeros, eh_impar)
  // mostrar_itens(numeros_impares, 'Ímpares')

  // const numeros_menores_q5 = filtrar_menores_q5(numeros)
  // const numeros_menores_q5 = filtrar(numeros, eh_menor_q5)
  // const numeros_menores_q5 = filtrar(numeros, gerar_menor_q(80))
  // const numeros_menores_q = filtrar(numeros, gerar_menor_q(8))
  // mostrar_itens(numeros_menores_q, 'Menores que 8')
  // const criterio = g => g < 25
  const numeros_menores_q = filtrar(numeros,  g => g < 25)
  mostrar_itens(numeros_menores_q, 'Giseles')
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

function filtrar(colecao, criterio){
  const nova_lista = []

  for (let numero of colecao){
   if (criterio(numero)){
    nova_lista.push(numero)
   } 
  }

  return nova_lista
}

function eh_impar(numero){
  return numero % 2 !== 0
}

function gerar_menor_q(valor){
  function menor_q(numero){
    return numero < valor
  }

  return menor_q
}

function eh_menor_q5(numero){
  return gerar_menor_q(5)
}

function eh_menor_q13(numero){
  return numero < 13
}

main()