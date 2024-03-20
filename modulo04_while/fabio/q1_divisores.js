import { get_number_min, print } from '../../utils/io_utils.js'

function main(){
  // 1. Estado Anterior
  let numero = get_number_min('Número: ', 0)

  while (numero !== 0){ // 2. Expressao de Continuidade

    // 3. trabalho
    mostrar_divisores(numero)
    
    // 4. Convergenc. de dados 
    numero = get_number_min('Número: ', 0)
  }

  print('Fim..')
}

function mostrar_divisores(numero){
  print(`Divisores de ${numero}: `)
  let candidato = numero
  let contador = 0
  let divisores = ''
  
  while (candidato > 0){
    if (eh_divisor(numero, candidato)){
      contador++
      // print(candidato)
      divisores += ` ${candidato}` // concatenacao
    }
    candidato--
  }
  print(divisores)
  print(`Total de Divisores: ${contador}`)
}

function eh_divisor(numero, candidato){
  return numero % candidato === 0
}

main()