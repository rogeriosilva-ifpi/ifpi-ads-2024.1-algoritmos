import { question } from 'readline-sync'

function main(){

  print('|**** NOTAS ****|')

  const nota1 = get_number('Nota 1: ')
  const nota2 = get_number('Nota 2: ')
  const nota3 = get_number('Nota 3: ')
  const qtd_aulas = get_number('Quantidade de Aulas: ')
  const faltas = get_number('Quantidade de Faltas: ')

  const media = computar_media(nota1, nota2, nota3, faltas)
  const percentual_faltas = (faltas / qtd_aulas) * 100
  let situacao = computar_situacao(media, percentual_faltas)

  let media_pos_pf = media

  if (situacao === 'PROVA FINAL'){
    print(`Você ficou de Prova Final (Média): ${media.toFixed(2)}`)
    // Pedir nota da Prova Final
    const nota_pf = get_number('Nota PF: ')
    // Computador media final
    media_pos_pf = (media + nota_pf) / 2
    // Atualizar a SITUACAO
    if (media_pos_pf >= 6){
      situacao = 'APROVADO PÓS PF'
    }else{
      situacao = 'REPROVADO MESMO COM PF'
    }
  }

  // Fluxo normal
  const resultado = `
  BOLETIM:
  Nota 1: ${nota1.toFixed(2)}
  Nota 2: ${nota2.toFixed(2)}
  Nota 3: ${nota3.toFixed(2)}
  -----------------
  Média       : ${media.toFixed(2)}
  Média Pós PF: ${media_pos_pf.toFixed(2)}
  Situação    : ${situacao}
  Faltas (%)  : ${percentual_faltas}%
  `

  print(resultado)
}

function computar_media(n1, n2, n3, faltas){
  let media = (n1 + n2 + n3) / 3

  if (faltas === 0){
    media = media + 1
    if (media > 10){
      media = 10
    }
  }

  return media

}

function computar_situacao(media, percentual){
  let situacao = ''

  if (percentual > 25){
    return 'REPROVADO POR FALTA'
  }
  
  if (media >= 7){
    situacao = 'APROVADO'
  }else if (media >= 4){
    situacao = 'PROVA FINAL'
  }else{
    situacao = 'REPROVADO'
  }
  
  return situacao
}

function print(texto){
  console.log(texto)
}

function get_number(texto){
  const numero = Number(question(texto))
  return numero
}

main()