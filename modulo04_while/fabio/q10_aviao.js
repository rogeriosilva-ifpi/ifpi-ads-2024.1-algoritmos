import { get_number, get_number_min, get_positive_number, print } from '../../utils/io_utils.js'


function main(){
  // Carga
  const qtd_containers = get_number_min('Qtd Containers: ', 0)
  const peso_carga = computar_carga(qtd_containers)

  // Passageiros
  let contador_passageiros = 0
  let contador_bagagens = 0
  let bilhete = get_number('Bilhete: ')

  while (bilhete !== 0){
    contador_passageiros++
    const bagagens = get_number_min('Qtd de Bagagens: ', 0)
    // trabalho
    contador_bagagens += bagagens

    bilhete = get_number('Bilhete: ')
  }

  const peso_passageiros = (contador_passageiros * 70) + (contador_bagagens * 10)

  const total_peso_fora_combustivel = peso_passageiros + peso_carga
  const combustivel_possivel_kg = 500_000 - total_peso_fora_combustivel
  const combustivel_possivel_litros = combustivel_possivel_kg / 1.5
  const decolagem_autorizada = combustivel_possivel_litros >= 10_000 ? 'SIM' : 'NÃO'

  const resultado = `
  >>>>>>>>> AVIAO <<<<<<<
  - Passageiros Embarcados: ${contador_passageiros}
  - total de volume de bagagem: ${contador_bagagens}
  - Peso dos Passageiros: ${peso_passageiros.toFixed(2)}kg
  - Peso da carga: ${peso_carga.toFixed(2)}kg
  - Decolagem Autorizada? --> ${decolagem_autorizada}
  `

  print(resultado)

}


function computar_carga(quantidade){
  let qtd_containers_lidos = 0
  let peso_total = 0

  while (qtd_containers_lidos < quantidade){

    const peso = get_positive_number('Peso Container: ')
    peso_total = peso_total + peso

    qtd_containers_lidos += 1
  }

  return peso_total
}

main()