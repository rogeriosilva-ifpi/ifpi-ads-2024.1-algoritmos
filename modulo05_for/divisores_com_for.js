import { get_positive_number, print } from '../utils/io_utils.js'

function main(){

  const numero = get_positive_number('Digite um número: ')
  const valores = obter_dividores(numero)
  print(`O número ${numero} tem ${valores.length} divisores`)

  const result = `São eles: ${valores.join(', ')}`
  print(result)

}

function obter_dividores(numero){
  const divisores = []

  for(let cand = 1; cand <= numero; cand = cand + 1){
    if (numero % cand === 0){
      divisores.push(cand)
    }
  }

  return divisores
}

main()