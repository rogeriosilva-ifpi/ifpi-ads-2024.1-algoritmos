import { get_number_min, get_positive_number, get_text, print } from '../utils/io_utils.js'
import { get_random_number } from '../utils/math_utils.js'

function main(){
  // Entrada
  const n = get_number_min('Digite N: ', 10)
  const jogador1 = get_text('Jogador 1: ')
  const jogador2 = get_text('Jogador 2: ')

  // Processamento
  const palpites_jogador1 = partida(jogador1, n)
  const palpites_jogador2 = partida(jogador2, n)

  let resultado
  if (palpites_jogador1 < palpites_jogador2){
    resultado = `${jogador1} GANHOU`
  }else if (palpites_jogador2 < palpites_jogador1){
    resultado = `${jogador2} GANHOU`
  }else{
    resultado = 'Jogo EMPATOU'
  }

  // Saída
  print(`
    >>> ADIVINHA <<<
    Jogador 1: ${jogador1} -- (${palpites_jogador1}) palpites
    Jogador 2: ${jogador2} -- (${palpites_jogador2}) palpites
    ---------------------------------
    RESULTADO: ${resultado}
  `)


}

function partida(jogador, n){
  print(`Olá ${jogador}! seu número já foi sorteado!`)
  // 1. Estado Anterior
  const secret = get_random_number(1, n+1)
  let palpite = get_positive_number('Primeiro palpite: ')
  
  let contador = 1

  while (palpite != secret){
    if (palpite > secret){
      print('O número secreto é MENOR!')
    }else{
      print('O número secreto é MAIOR!')
    }

    palpite = get_positive_number('Novo Palpite: ')
    contador++
  }

  return contador
}

main()