import { question } from 'readline-sync'

export function get_number(mensagem){
  return Number(question(mensagem))
}

export function get_positivo_number(mensagem){
  // Usa Recursividade: Uma Função chamar a si mesma
  const numero = get_number(mensagem)

  if (numero <= 0){
    print('Valor inválido!')
    return get_positivo_number(mensagem)
  }

  return numero
}

export function print(mensagem){
  console.log(mensagem)
}