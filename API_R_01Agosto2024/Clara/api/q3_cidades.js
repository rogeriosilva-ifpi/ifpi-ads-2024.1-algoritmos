import {question} from 'readline-sync'

function main(){
    let renda_per = 0
    let renda_media = 0
    let maior_renda = 0
    let menor_renda = 0
    const cidades = get_number("Quantas cidades deseja informar?: ")

    while(renda_per !== 0){
        const cidades = get_number("Quantas cidades deseja informar?: ")
        const media = calcular_media(renda_per, cidades)
        

        if(maior_renda > renda_per){
            maior_renda += renda_per
            renda_per++
        }

        if(menor_renda < renda_per){
            menor_renda += renda_per
            renda_per++
        }

    }
    console.log(`--------------RENDAS--------------
    Renda Média: ${renda_media}
    Maior Renda: ${maior_renda}
    Menor Renda: ${menor_renda}`)

}

function get_number(mensagem){
    return Number(question(mensagem))
}

function calcular_media(renda_per, cidades){
    return renda_per/cidades
    renda_media++
}
main()