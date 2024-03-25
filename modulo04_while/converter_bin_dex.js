import { clear_screen, enter_to_continue, get_number_in_range, print } from '../utils/io_utils.js'

function main(){
  clear_screen()
  let numero = 0
  const SAIR = 0
  const MUDAR_NUMERO = 1
  const PARA_BINARIO = 2
  const PARA_HEXA = 3
  let opcao = get_number_in_range(menu(numero), 0, 3)

  while (opcao !== SAIR){
    // Trabalho
    if (opcao === MUDAR_NUMERO){
      numero = get_number_in_range('Novo Número: ', 1, 255)
      print('Operação realizada com sucesso!')
    }else if (opcao === PARA_BINARIO){
      const binario = to_binario(numero)
      print(`O número ${numero} em binário é ${binario}`)
    }else if (opcao === PARA_HEXA){
      const hexa = to_hexa(numero)
      print(`O número ${numero} em hexadecimal é ${hexa}`)
    }

    // Convergencia
    enter_to_continue()
    clear_screen()
    opcao = get_number_in_range(menu(numero), 0, 3)
  }
}


function menu(numero){
  return `
  ---> CONVERSOR <---
  1 - Mudar Número - Atual: ${numero}
  2 - Show in Binário
  3 - Show in Hexa
  
  0 - Encerrar
  >>> `
}

function to_binario(numero){
  let binario = ''
  let quociente = numero

  while (quociente >= 1){
    const resto = quociente % 2
    quociente = Math.floor(quociente / 2)
    binario = String(resto) + binario
  }

  return padStart(binario, 8, '0')
}

function to_hexa(numero){
  let hexa = ''
  let quociente = numero

  while (quociente >= 1){
    const resto = quociente % 16
    quociente = Math.floor(quociente / 16)
    hexa =  hexa_simbol(resto) + hexa
  }

  return hexa
}

function hexa_simbol(numero){
  if (numero < 10){
    return String(numero)
  }else if (numero === 10){
    return 'A'
  }else if (numero === 11){
    return 'B'
  }else if (numero === 12){
    return 'C'
  }else if (numero === 13){
    return 'D'
  }else if (numero === 14){
    return 'E'
  }else if (numero === 15){
    return 'F'
  }else{
    return ''
  }
}

function padStart(texto, tamanho_alvo, fill){
  let novo_texto = texto
  let tamanho = novo_texto.length

  while (tamanho < tamanho_alvo){
    novo_texto = fill + novo_texto
    tamanho = novo_texto.length
  }
  
  return novo_texto
}




main()