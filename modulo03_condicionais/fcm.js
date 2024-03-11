import { get_number_in_range, get_text, print, round_number as round } from '../utils/io_utils.js'

function main(){

  const nome = get_text('Nome: ')
  const idade = get_number_in_range('Idade: ', 12, 120)

  const FCM = 220 - idade

  show_tabela_faixas_fc(FCM)

}

function show_tabela_faixas_fc(FCM){

    const maxima_min = round(FCM * 0.9, 1)
    const maxima_max = round(FCM, 1)

    const dificil_max = maxima_min
    const dificil_min = round(FCM * 0.8, 1)

    const moderada_max = dificil_min
    const moderada_min = round(FCM * 0.7, 1)

    const leve_max = moderada_min
    const leve_min = round(FCM * 0.6, 1)

    const muito_leve_max = leve_min
    const muito_leve_min = round(FCM * 0.5, 1)

    const tabela = `
    >>> Tabela de FCM <<<
    --------------------------------------------------------------------
    Máxima     (90-100%)= De ${maxima_min} até ${maxima_max} bpm.
    Difícil    (80-90%) = De ${dificil_min} até ${dificil_max} bpm.
    Moderada   (70-80%) = De ${moderada_min} até ${moderada_max} bpm.
    Leve       (60-70%) = De ${leve_min} até ${leve_max} bpm.
    Muito Leve (50-60%) = De ${muito_leve_min} até ${muito_leve_max} bpm.
    --------------------------------------------------------------------
    `

    print(tabela)

}

main()