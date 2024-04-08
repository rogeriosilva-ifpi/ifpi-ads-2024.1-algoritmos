import { get_number, print, get_text} from '../utils/io_utils.js'

function main(){
    const peso_atual = get_number('Seu peso atual: ')
    const sexo = get_text('Sexo: ')
    const quilos_perder = get_number('Quantos quilos quer perder: ')
    const dias_semana = get_number('Quantos dias por semana irá fazer atividade física: ')
    const tempo = get_number('Quanto tempo por dia irá treinar: ')
    const tempo_transport = get_number('Proporção de tempo alocada para o transport: ')


    while(quilos_perder !== 0){
        const calorias_perdidas_transport  = calcular_Transport()
    }

    const resultado = `
    -------------------------------------------------
    Alcançará o objetivo desejado em: ${semanas} semanas
    Minutos de escada por dia: ${minutos_escada} minutos
    Minutos de transport por dia: ${minutos_transport}minutos
    --------------------------------------------------
    `
    print(resultado)




}
function calcular_Transport(){
    if (sexo === 'M'){
        return (tempo * 1000) / 5
    }else if(sexo === 'F'){
        return (tempo * 1000) / 6
    }

}
function calcular_escada(){
    if(sexo === 'M'){
        return (tempo *100) / 7
    }else if(sexo === 'F')
    return (tempo * 100)/8
}
main()