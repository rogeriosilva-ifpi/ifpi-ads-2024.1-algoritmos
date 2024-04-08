import { get_1or2, mostre, positive_number } from '../quest/utils.js'

function main(){
    const peso_atual = positive_number('PESO ATUAL:  ')
    const sexo = get_1or2('Digite "1" para feminino ou "2" para masculino:  ')
    const kg_a_perder = positive_number('Quantos kg deseja perder?  ')
    const dias = positive_number('Quantos dias da semana pretende treinar?  ')
    const tempo = positive_number('Por quantos minutos?  ')
    const transport = ('% de tempo no transport:  ')
    const escada = ('% do tempo na escada:  ')

    let min_semana = tempo*dias
    let calorias_perda = kg_a_perder*7000
    let semanas = 1

    while(calorias_perda>0){
        if(sexo == 1){
            semanas++
            let temp_transport = (transport/100)*min_semana
            let temp_escada = (escada/100)*min_semana
            let min_dia_tranport = temp_transport/dias
            let min_dia_escada = temp_escada/dias

            while(temp_transport=!0){
                temp_transport = temp_transport-6
                calorias_perda = calorias_perda-100
            }
            while(temp_escada=!0){
                temp_escada = temp_escada-8
                calorias_perda = calorias_perda-100
            }

        }else{
            semanas++
            let temp_transport = (transport/100)*min_semana
            let temp_escada = (escada/100)*min_semana
            let min_dia_tranport = temp_transport/dias
            let min_dia_escada = temp_escada/dias

            while(temp_transport=!0){
                temp_transport = temp_transport-5
                calorias_perda = calorias_perda-100
            }
            while(temp_escada=!0){
                temp_escada = temp_escada-7
                calorias_perda = calorias_perda-100
            }

        }
    }
    mostre(`
    Você deve se exercitar ${min_dia_tranport} minutos no transport e ${min_dia_escada} na escada por dia, durante ${semanas} semanas.`)
}

main()