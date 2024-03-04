import { get_positivo_number, print } from '../../utils/io_utils.js'
import { percentual } from '../../utils/math_utils.js'


function main(){
  // Só/principalmente a main fala com o usuário
  const valor_hora = get_positivo_number('Valor por Hora R$: ')
  const qtd_horas = get_positivo_number('Quantidade horas R$: ')

  const salario_bruto = calcular_salario_bruto(qtd_horas, valor_hora)
  const sindicato = calcular_taxa_sindicato(salario_bruto)
  const fgts = calcular_fgts(salario_bruto)
  const inss = calcular_inss(salario_bruto)
  const aliquota = identificar_aliquota_ir(salario_bruto)
  const ir = calcular_ir(salario_bruto, aliquota)

  const descontos = sindicato + inss + ir

  const salario_liquido = salario_bruto - descontos

  const contracheque = `
  Salário Bruto: (${qtd_horas.toFixed(2)} * ${valor_hora.toFixed(2)}) : R$ ${salario_bruto.toFixed(2)}
  (-) IR (${aliquota}%) : R$ ${ir.toFixed(2)}
  (-) INSS ( 10%) : R$ ${inss.toFixed(2)}
  (-) Sindicado (3%): R$ ${sindicato.toFixed(2)}
  FGTS (11%) : R$ ${fgts.toFixed(2)}
  Total de descontos : R$ ${descontos.toFixed(2)}
  Salário Líquido : R$ ${salario_liquido.toFixed(2)}
  `

  print(contracheque)


}

function calcular_salario_bruto(qtd_horas, valor_hora){
  const salario_bruto = qtd_horas * valor_hora
  return salario_bruto
}

function calcular_taxa_sindicato(salario_bruto){
  // const taxa = salario_bruto * (3/100)
  const taxa = percentual(salario_bruto, 3)
  return taxa
}

function calcular_fgts(salario_bruto){
  return percentual(salario_bruto, 11)
}

function calcular_inss(salario_bruto){
  return percentual(salario_bruto, 10)
}

function calcular_ir(salario_bruto, aliquota){
  return percentual(salario_bruto, aliquota)
}

function identificar_aliquota_ir(salario_bruto){
  if (salario_bruto <= 900){
    return 0
  }else if (salario_bruto <= 1500){
    return 5
  }else if (salario_bruto <= 2500){
    return 10
  }
  
  return 20
}

main()