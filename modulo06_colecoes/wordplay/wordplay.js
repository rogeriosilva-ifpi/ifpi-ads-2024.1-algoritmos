import { readFileSync } from 'fs'
import { clear_screen, enter_to_continue, get_number, get_text, print } from '../../utils/io_utils.js'

function main(){
  const linhas = carregarLinhas()

  let opcao = get_number(menu())

  while (opcao != 0){
    // Trabalho
    if (opcao === 1){
      const palavras_20_mais = buscar_por_tamanho_20_mais(linhas)
      listar_palavras(palavras_20_mais, 'Palavras 20+', linhas.length)
    }else if (opcao === 2){
      const palavras_filtradas = buscar_sem_letra_e(linhas)
      listar_palavras(palavras_filtradas, 'Palavras sem "e"', linhas.length)
    }else if (opcao === 3){
      const proibidas = get_text('Letras Proibidas: ')
      const palavras_filtradas = buscar_sem_proibidas(linhas, proibidas)
      listar_palavras(palavras_filtradas, `Palavras sem "${proibidas}"`, linhas.length)
    }

    // Convergencia
    enter_to_continue()
    clear_screen()
    opcao = get_number(menu())
  }


  


  print('Fim.')
}


function menu(){
  const opcoes = `
  ..... WORDPlay .....
  1 - Palavras com 20+ letras
  2 - Palavras sem Letras "e"
  3 - Palavras sem "as proibidas"

  0 - Sair 
  >>> `
  return opcoes
}

function buscar_por_tamanho_20_mais(palavras){
  const lista = []
  for (let i = 0; i < palavras.length; i++){
    const palavra_atual = palavras[i]
    if (palavra_atual.length > 20){
      lista.push(palavra_atual)
    }
  }

  return lista
}

function buscar_sem_letra_e(palavras){
  const lista = []
  for (let i = 0; i < palavras.length; i++){
    const palavra_atual = palavras[i]
    if (has_no_e(palavra_atual)){
      lista.push(palavra_atual)
    }
  }

  return lista
}

function buscar_sem_proibidas(palavras, proibidas){
  const lista = []
  for (let i = 0; i < palavras.length; i++){
    const palavra_atual = palavras[i]
    if (avoids(palavra_atual, proibidas)){
      lista.push(palavra_atual)
    }
  }

  return lista
}

function listar_palavras(palavras, titulo, total){
  print('---------------------')
  print(`LISTA: ${titulo}`)
  print('---------------------')

  for (let palavra of palavras){
    print(palavra)
  }
  print('---------------------')

  const percentual = (palavras.length / total) * 100

  const resumo = `
  --> Palavras = ${palavras.length}
  --> Total    = ${total}
  --> Perc (%) = ${percentual.toFixed(6)}%
  `
  print(resumo)

}

function carregarLinhas(){
  const arquivo = readFileSync('words.txt', 'utf-8')
  const linhas = arquivo.split('\n')

  return linhas
}


function has_no_e(palavra){
  for (let i = 0; i < palavra.length; i++){
    if (palavra[i] === 'e'){
      return false
    }
  }

  return true
}

function avoids(palavra, letras_proibidas){
  for (let i in letras_proibidas){
    let letra_proibida = letras_proibidas[i]
    if (contem_letra(palavra, letra_proibida)){
      return false
    }
  }

  return true
}

function contem_letra(palavra, letra){
  for (let l of palavra){
    if (l === letra){
      return true
    }
  }

  return false
}

main()