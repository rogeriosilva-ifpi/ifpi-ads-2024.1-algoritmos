import { get_positive_number, print } from '../utils/io_utils.js'

function main(){
  const qtd = get_positive_number('Quantidade: ')
  let contador = 0

  while (contador < qtd){
    print(`${contador + 1} > Hello Felipe!`)
    contador = contador + 1
  }
  
}

main()