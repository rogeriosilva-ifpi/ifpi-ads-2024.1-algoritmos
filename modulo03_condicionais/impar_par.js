import { question } from 'readline-sync'

function main(){
  print('Ímpar ou Par?')
  const numero = get_number('Número Positivo: ')

  if (eh_par(numero)){
    print('O número é PAR')
  }else{
    print('O Número é ÍMPAR')
  }
}

function eh_par(numero){
  return numero % 2 === 0
}

function print(algo){
  console.log(algo)
}

function get_number(mensagem){
  const n = Number(question(mensagem))
  return n
}

main()