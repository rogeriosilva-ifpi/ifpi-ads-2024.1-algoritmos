/* 6. Leia 3 (três) números (cada número corresponde a 
  um ângulo interno do triângulo), verifique e escreva
se os 3 (três) números formam um triângulo 
(a soma dos ângulos internos é igual a 180o). 

Se formam,verifique se formam um triângulo acutângulo (3 ângulos < 90o), 
retângulo (1 ângulo = 90o) ou obtusângulo (1 ângulo > 90o). 

Não existe ângulo com tamanho 0o (zero grau).
**/
import { get_positivo_number, print } from '../utils/io_utils.js'

function main(){
  const angulo1 = get_positivo_number('Angulo 1: ')
  const angulo2 = get_positivo_number('Angulo 2: ')
  const angulo3 = get_positivo_number('Angulo 3: ')

  if(eh_triangulo(angulo1, angulo2, angulo3)){
    print('Formam SIM um triângulo!')
    const classificacao = classificar_triangulo(angulo1, angulo2, angulo3)
    print(`E ele é um Triângulo ${classificacao}`)
  }else{
    print('NÃO formam triângulo!')
  }

}

function eh_triangulo(angulo1, angulo2, angulo3){
  return angulo1 + angulo2 + angulo3 === 180
}

function classificar_triangulo(angulo1, angulo2, angulo3){
  if (angulo1 < 90 && angulo2 < 90 && angulo3 < 90){
    return 'ACUTÂNGULO'
  }else if (angulo1 === 90 || angulo2 === 90 || angulo3 === 90){
    return 'RETÂNGULO'
  }else{
    return 'OBTUSÂNGULO'
  }
}

main()
