// Não entendi... testei e só fala que nao coseguirá perder

import { question } from "readline-sync"

function show_in_console(mensagem){
    console.log(mensagem)
}

function calcular_peso_perdido(hrs_transport, minutagem){
    const kalorias_perdidas = (hrs_transport*100)/minutagem
    return kalorias_perdidas
}

function get_number_in_range(min, max, mensagem){
    const num = Number(question(mensagem))
    if(num >= min && num <= max){
        return num
    }else{
        show_in_console("Número fora do intervalo, digite novamente: ")
        get_number_in_range(min, max, mensagem)
    }
}

function get_number(mensagem){
    return Number(question(mensagem))
}

function main(){
    const peso_atual = get_number("Olá! Dgite o seu peso atual: ")
    const sexo = question("Você é homem ou mulher?(h/m): ")
    const meta_peso = get_number("Insira quantos quilos você deseja perder?: ")
    const dias_semana_treino = get_number_in_range(1, 7, "Insira quantos dias por semana você irá treinar: ")
    const hrs_treino_dia = get_number("Insira quantos minutos por dia você irá treinar: ")
    const porcentagem_transport = get_number_in_range(0, 100, "Insira a porcentagem de tem,po que você irá ficar na máquina transport:")
    const porcentagem_escada = 100-porcentagem_transport

    const hrs_transport = (porcentagem_transport*hrs_treino_dia)/100
    const hrs_escada = (porcentagem_transport*hrs_treino_dia)/100
    
    const calorias_transport_homem = calcular_peso_perdido(hrs_transport, 5)
    const calorias_escada_homem = calcular_peso_perdido(hrs_escada, 7)

    const calorias_transport_mulher = calcular_peso_perdido(hrs_transport, 6)
    const calorias_escada_mulher = calcular_peso_perdido(hrs_escada, 8)

    const peso_perdido_dia_h = (calorias_escada_homem+calorias_transport_homem) - 2400
    const peso_perdido_dia_m = (calorias_escada_mulher+calorias_transport_mulher) - 2000 
    
    const dias_para_perder_1kg = Math.round(7000/peso_perdido_dia_h)
    const dias_meta = dias_para_perder_1kg*meta_peso
    const semanas_p_meta = dias_meta/dias_semana_treino

    if(sexo === "h"){
        if((calorias_escada_homem+calorias_transport_homem) <= 2400){
            show_in_console("Infelizmente você não conseguirá emagrecer com esse plano de treino; ")
        }else{
            show_in_console(`
            =====================================
            Olá
            Semanas até o objetivo = ${semanas_p_meta}
            Dias até o objetivo = ${dias_meta}
            Minutos de escada = ${hrs_escada}
            Minutos transport = ${hrs_transport}
            =====================================
            `)
        }
    }else if(sexo === "m"){
        if((calorias_escada_homem+calorias_transport_homem) <= 2400){
            show_in_console("Infelizmente você não conseguirá emagrecer com esse plano de treino; ")
        }else{
            const dias_para_perder_1kg = Math.round(7000/peso_perdido_dia_m)
            const dias_meta = dias_para_perder_1kg*meta_peso
            const semanas_p_meta = dias_meta/dias_semana_treino
            show_in_console(`
            =====================================
            Olá
            Semanas até o objetivo = ${semanas_p_meta}
            Dias até o objetivo = ${dias_meta}
            Minutos de escada = ${hrs_escada}
            Minutos transport = ${hrs_transport}
            =====================================
            `)
        }
    }


}
main()