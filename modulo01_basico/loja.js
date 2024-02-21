import { question } from 'readline-sync'

function main(){
  const valor = Number(question('Valor R$: '))

  const parcela = calcular_parcela(valor)
  const entrada = calcular_entrada(valor, parcela)

  const resultado = `
  Financiamento:
  Valor: R$ ${valor.toFixed(2)}
  Entrada: R$ ${entrada.toFixed(2)}
  2x de R$ ${parcela.toFixed(2)}
  `
  console.log(resultado)
}

function calcular_parcela(valor){
  const parcela = Math.floor(valor / 3)
  return parcela
}

function calcular_entrada(valor, parcela){
  const resto = valor % 3
  const entrada = parcela + resto
  return entrada
}

main()