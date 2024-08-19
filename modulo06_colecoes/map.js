import { print } from '../utils/io_utils.js';

function main(){

  const numeros = gerar_lista(10, 1, 100)
  mostrar_itens(numeros, 'Todos')

  // const numeros_dobrados = dobrar_valores(numeros)
  // const numeros_dobrados = mapear(numeros, dobrar_valor)
  const numeros_sucessores = mapear(numeros, v => ++v)
  mostrar_itens(numeros_sucessores, 'Números Dobrados')

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

function dobrar_valores(numeros){
  const nova_lista = []
  for (let numero of numeros){
    nova_lista.push(dobrar_valor(numero))
  }
  return nova_lista
}

function dobrar_valor(valor){
  return valor * 2
}

function mapear(colecao, transformadora){
  const nova_lista = []
  for (let item of colecao){
    nova_lista.push(transformadora(item))
  }
  return nova_lista
}

main()