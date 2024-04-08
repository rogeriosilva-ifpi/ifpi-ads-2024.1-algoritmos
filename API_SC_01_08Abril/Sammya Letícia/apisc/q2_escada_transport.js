import { question } from "readline-sync"

function main(){
    const peso_atual= get_number('Peso Atual (em Kg): ')
    const sexo = question('Sexo (F/M): ')
    const quilos_a_perder = get_number('Quantos quilos você deseja perder? ')
    const dias_atv_fisica = get_number('Quantos dias por semana irá fazer atividade física? ')
    const tempo_treino_diario = get_number('Tempo de treino diário (em minutos): ')

    let minutos_diario_escada = 0
    const calorias_transport= obter_calorias_gastas_transport(sexo, tempo_treino_diario)
    const calorias_escada = obter_calorias_gastas_escada(sexo,tempo_treino_diario)
    const calorias_necessarias_diario = verificar_sexo_usuario_e_obter_calorias_necessarias(sexo)
    const semanas_objetivo = obter_semanas_necessarias(quilos_a_perder, peso_atual, tempo_treino_diario)
    const minutos_dia_escada = obter_minutos_diarios_escada(quilos_a_perder, calorias_escada, sexo)
    const minutos_dia_transport = obter_minutos_diarios_transport(quilos_a_perder, calorias_transport, sexo)
    let minutos_diario_transport = 0

    const resultado = `
    >>>>>>>>>>>>>>>> Escada & Transport <<<<<<<<<<<<<<<<<<<<<<
    ----------------------------------------------------------
    Semanas para alcançar objetivo: ${semanas_objetivo} semanas
    Minutos de Escada Diário: ${minutos_dia_escada} minutos
    Minutos de Transport Diário: ${minutos_dia_transport} minutos
    Calorias Necessárias Por Dia: ${calorias_necessarias_diario} kcals
    ----------------------------------------------------------
    `

    console.log(resultado)
}

function obter_semanas_necessarias(quilos_a_perder, tempo_treino_diario, dias_atv_fisica){
    const calorias_a_serem_perdidas = quilos_a_perder * 7000
    const semanas_necessarias_em_minutos= Math.floor((calorias_a_serem_perdidas / 7) * 24) 
    const semanas_necessarias = Math.floor(semanas_necessarias_em_minutos/(tempo_treino_diario * dias_atv_fisica))
    return semanas_necessarias

}

function obter_minutos_diarios_escada(quilos_a_perder, calorias_escada, sexo, minutos_diario_escada){
    let cal_diarios_escada = (quilos_a_perder * 7000) / calorias_escada
    if (sexo === 'F'){
        minutos_diario_escada = Math.floor(cal_diarios_escada/100) * 8
    } else {
        minutos_diario_escada = Math.floor(cal_diarios_escada/100) * 7
    }
    return minutos_diario_escada
}

function obter_minutos_diarios_transport(quilos_a_perder, calorias_transport, sexo, minutos_diario_transport){
    let cal_diarios_transport = (quilos_a_perder * 7000) / calorias_transport
    if (sexo === 'F'){
        minutos_diario_transport = Math.floor(cal_diarios_transport/100) * 6
    } else {
        minutos_diario_transport = Math.floor(cal_diarios_transport/100) * 5
    }
    return minutos_diario_transport
}

function obter_calorias_gastas_transport(sexo, tempo_treino_diario){
    let calorias_gastas_transport = 0
    if (sexo === 'F'){
        calorias_gastas_transport = (tempo_treino_diario/6) * 100
    } else {
        calorias_gastas_transport = (tempo_treino_diario/5) * 100
    }
    return calorias_gastas_transport
}

function obter_calorias_gastas_escada(sexo,tempo_treino_diario){
    let calorias_gastas_escada = 0
    if (sexo === 'F'){
        calorias_gastas_escada = (tempo_treino_diario/8) * 100
    } else {
        calorias_gastas_escada =(tempo_treino_diario/7) * 100
    }
    return calorias_gastas_escada
}

function verificar_sexo_usuario_e_obter_calorias_necessarias(sexo){
    let calorias_necessarias_dia = 0
    if (sexo === 'F'){
        calorias_necessarias_dia = 2000
    } else {
        calorias_necessarias_dia = 2400
    }
    return calorias_necessarias_dia
}

function get_number(texto){
    const numero = Number(question(texto))
    return numero
}

main()