import { get_text, print } from '../utils/io_utils.js'

function main(){
  const nome = get_text('Nome: ')

  for (let i = 0; i < nome.length; i++){
    print(`> ${nome[i]}`)
  }
}

main()