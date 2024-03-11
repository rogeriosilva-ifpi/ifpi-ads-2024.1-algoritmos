import { get_number_min, get_positive_number, print } from '../utils/io_utils.js'

function main(){
  const limite_inferior = get_positive_number('Limite Inferior: ')
  const limite_superior = get_number_min('Limite Superior: ', limite_inferior)

  while (limite_inferior <= limite_superior){
    print(limite_inferior)
    limite_inferior++ 
  }

  print('------------------')
  print('Fim!')
}

main()