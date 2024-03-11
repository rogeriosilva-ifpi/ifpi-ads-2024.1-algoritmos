import { question } from 'readline-sync'

export function get_number(mensagem){
  return Number(question(mensagem))
}

export function get_positive_number(mensagem){
  // Usa Recursividade: Uma Função chamar a si mesma
  const numero = get_number(mensagem)

  if (numero <= 0){
    print('Valor inválido!')
    return get_positive_number(mensagem)
  }

  return numero
}


export function get_number_in_range(mensagem, min, max){
  const numero = get_number(mensagem)

  if (numero < min || numero > max){
    print('Número inválido! Digite novamente')
    return get_number_in_range(mensagem, min, max)
  }

  return numero
}

export function get_number_min(mensagem, min){
  const numero = get_number(mensagem)

  if (numero < min){
    print('Número inválido! Digite novamente')
    return get_number_min(mensagem, min)
  }

  return numero
}

export function print(mensagem){
  console.log(mensagem)
}

export function get_text(mensagem){
  return question(mensagem)
}

export function round_number(number, decimal_places=2){
  return number.toFixed(decimal_places)
}