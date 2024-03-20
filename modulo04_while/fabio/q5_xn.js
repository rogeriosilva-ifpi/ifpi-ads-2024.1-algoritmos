import { get_text, print } from '../../utils/io_utils.js'

function main(){
  // entrada '10 3'
  // split(' ') --> ['10', '3']
  // map(Number) --> [10, 3]
  let [X, N] = get_text('Digite dois números (X N): ').split(' ').map(Number)

  let divisao = X / N

  while (N >= 2){
    print(`${X}/${N} = ${divisao}`)
    X = divisao
    N = N - 1

    divisao = X / N
  }

  
}

main()