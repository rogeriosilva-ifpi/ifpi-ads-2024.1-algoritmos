import { get_text, print } from '../utils/io_utils.js'

function main(){
  const nome = get_text('Nome: ')

  for (let letra of nome){
    print(`> ${letra}`)
  }
}

main()