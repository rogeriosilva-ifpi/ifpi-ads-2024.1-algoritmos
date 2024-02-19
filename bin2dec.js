/**
 * 31. Leia um número inteiro (4 dígitos binários), 
 * calcule e escreva o equivalente na base decimal.
 */

import { question } from "readline-sync"

function main(){
  console.log('******* Bin to Dec ********')
  const binario = Number(question('Binário(4 digitos): '))

  const decimal = converter_decimal(binario)

  console.log(`O Numero binário digitado é em Decimal = ${decimal}`)
}


function converter_decimal(binario){
  const M = Math.floor(binario / 1000)
  let resto = binario % 1000
  const C = Math.floor(resto / 100)
  resto = resto % 100
  const D = Math.floor(resto / 10)
  const U = resto % 10

  const decimal = M*8 + C*4 + D*2 + U*1

  return decimal
}

main()