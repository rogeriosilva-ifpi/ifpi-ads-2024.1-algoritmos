import { get_number_in_range, print } from '../../utils/io_utils.js'

function main(){
  const numero = get_number_in_range('Número (<1000): ', 1, 999)

  const centena = obter_ordem(numero, 'C')
  const dezena = obter_ordem(numero, 'D')
  const unidade = obter_ordem(numero, 'U')

  const cdu_formatado = formatar_extenso_cdu(centena, dezena, unidade)

  print(cdu_formatado)
}

function obter_ordem(numero, ordem){
  if (ordem === 'C'){
    return Math.floor(numero / 100)
  }else if (ordem === 'D'){
    const resto = numero % 100
    return Math.floor(resto / 10)
  }
  return numero % 10
}

function formatar_extenso_cdu(c, d, u){
  // operador ternário
  let txt_centena = c > 1 ? 'centenas' : 'centena'
  let txt_dezena = d > 1 ? 'dezenas' : 'dezena'
  let txt_unidade = u > 1 ? 'unidades' : 'unidade'

  if (c === 0){
    if (d === 0){
      if (u > 0){
        return `${d*10+u} = ${u} ${txt_unidade}`
      }
    }else{ // d > 0
      if (u > 0){
        return `${d*10+u} = ${d} ${txt_dezena} e ${u} ${txt_unidade}`
      }else{
        return `${d*10} = ${d} ${txt_dezena}`
      }
    }
  }else{ // tem centena
    if (d === 0){ // nao tem dezena
      if (u > 0){
        return `${c*100+u} = ${c} ${txt_centena} e ${u} ${txt_unidade}`
      }else{
        return `${c*100} = ${c} ${txt_centena}`
      }
    }else{ // tem dezena
      if (u > 0){
        return `${c*100+d*10+u} = ${c} ${txt_centena}, ${d} ${txt_dezena} e ${u} ${txt_unidade}`
      }else{ // nao tem unidade
        return `${c*100+d*10} = ${c} ${txt_centena} e ${d} ${txt_dezena}`
      }
    }
  }

}

main()