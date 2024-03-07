import { question } from 'readline-sync'

function main(){
  const numero1 = Number(question())
  const numero2 = Number(question())

  const produto = numero1 * numero2

  console.log(`PROD = ${produto}`)

}

main()