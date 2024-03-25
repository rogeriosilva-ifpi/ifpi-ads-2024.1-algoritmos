import { enter_to_continue, get_number_in_range, print } from '../utils/io_utils.js'

function main(){

  let soma_idade_mulheres = 0
  let soma_idade_homens = 0
  let qtd_mulheres = 0
  let qtd_mulheres_solteiras = 0
  let qtd_homens = 0
  let qtd_homens_solteiros = 0 
  let qtd_mulheres_divorciadas_31mais = 0


  const menu = `
  ------- MENU --------
  1 - Participante
  2 - Mostrar Resumo

  0 - Sair 

  >>> `

  let opcao = get_number_in_range(menu, 0, 2)

  while (opcao !== 0){
    // Trabalho
    if (opcao === 1){
      const sexo = get_number_in_range('Sexo(1-Masc. 2-Femin.): ', 1, 2)
      const idade = get_number_in_range('Idade: ', 0, 140)
      const opcoes_estado_civil = `Estado Civil:\n1 - Casado\n2 - Solteiro\n3 - Divorciado\n4 - Víuvo:\n>> `
      const estado_civil = get_number_in_range(opcoes_estado_civil, 1, 4)

      if (sexo === 1){
        qtd_homens++
        soma_idade_homens += idade
        if (estado_civil === 2){
          qtd_homens_solteiros++
        }
      }else{
        qtd_mulheres++
        soma_idade_mulheres += idade
        if (estado_civil === 2){
          qtd_mulheres_solteiras++
        }

        if (estado_civil === 3 && idade > 30){
          qtd_mulheres_divorciadas_31mais++
        }

      }
    }else if (opcao === 2){
      const media_idade_mulheres = soma_idade_mulheres / qtd_mulheres
      const media_idade_homens = soma_idade_homens / qtd_homens
      const perc_homens_solteiros = (qtd_homens_solteiros / qtd_homens) * 100
      const perc_mulheres_solteiras = (qtd_mulheres_solteiras / qtd_mulheres) * 100

      // Mostrar Resultado
      const resultado = `
      · Média de idade das mulheres: ${media_idade_mulheres.toFixed(1)};
      · Média de idade dos homens: ${media_idade_homens.toFixed(1)};
      · O percentual de homens solteiros: ${perc_homens_solteiros.toFixed(1)}%;
      · O percentual de mulheres solteiras: ${perc_mulheres_solteiras.toFixed(1)}%;
      · A quantidade de mulheres divorciadas acima de 30 anos: ${qtd_mulheres_divorciadas_31mais}.
      -------------------------------------------------\n`
      print(resultado)
    }

    enter_to_continue()
    clear_screen()
    // Pedir opcao
    opcao = get_number_in_range(menu, 0, 2)
  }

}

main()