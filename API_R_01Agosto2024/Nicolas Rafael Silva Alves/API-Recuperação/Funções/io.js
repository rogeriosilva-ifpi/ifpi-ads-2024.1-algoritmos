import { question } from "readline-sync";

// Pergunta algo ao usuário e recebe uma string
export function ask(text) {
  const answer = question(text) 

  return answer
}

// Recebe um numero qualquer com base na pergunta enviada ao usuário
export function  getNumber(text){
    const number = Number(question(text))

    return number
}

// Recebe um numero positivo com base na pergunta enviada ao usuário
export function getNumberPositive(text){
    const number = getNumber(text)
  
    if (number <= 0){
      console.log('!!!Digite um valor valido!!!\n')
      return getNumberPositive(text)
    }
    return number
}

// Recebe um numero positivo com zero incluso com base na pergunta enviada ao usuário
export function getNumberPositiveZero(text){
    const number = getNumber(text)
  
    if (number < 0){
      console.log('!!!Digite um valor valido!!!\n')
      return getNumberPositive(text)
    }
    
    return number
}

// Recebe um numero delimitado ao limite recebido nos parâmetros com base na pergunta enviada ao usuário
export function getNumberInRange(message, min, max,text){
    const number = getNumber(message)
    
    if (number < min || number > max){
      console.log(text)
      return getNumberInRange(message, min, max,text)
    }
    return number
}

export function getNumberInRangeZero(message, min, max,text){
  const number = getNumber(message)
  
  if (number != 0){
    if (number < min || number > max){
      console.log(text)
      return getNumberInRange(message, min, max,text)
    }
    return number
  }
}