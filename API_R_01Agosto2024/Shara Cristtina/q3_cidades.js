import {get_number_in_range, get_number_min, mostre} from '../questoes/util.js'

function main(){

    //Estado inicial

    let quantidade_decidades = get_number_min('Digite a quantidade de cidades:  ',1)
    const numero_inicialdecidades = quantidade_decidades
    quantidade_decidades -=1
    let maior_renda = 0
    let menor_renda = 99999999999999
    let soma_rendas = 0

    mostre(`Digite renda per capta igual a "0" para parar antecipadamente`)
    let renda_per_capta = get_number_in_range('Digite a renda per capta da primeira cidade:  ',0, 99999999999999)
    soma_rendas += renda_per_capta

    while(quantidade_decidades !=0 && renda_per_capta != 0){
        //Descobrir maior renda
        if(renda_per_capta > maior_renda){
            maior_renda = renda_per_capta
        }
        //Descobrir menor renda
        if(renda_per_capta < menor_renda){
            menor_renda = renda_per_capta
        }

        quantidade_decidades--
        renda_per_capta = get_number_in_range('Digite a renda per capta da próxima cidade:  ',0, 99999999999999)
        soma_rendas +=renda_per_capta
    }

    const media = calcular_media(soma_rendas,numero_inicialdecidades)

    //Saída
    mostre(`
        MAIOR RENDA PER CAPTA: R$ ${maior_renda.toFixed(2)}
        MENOR RENDA PER CAPTA: R$ ${menor_renda.toFixed(2)}
        MÉDIA DAS RENDAS PER CAPTA: R$ ${media}`)
}

function calcular_media(soma,n_cidades){
    const media = soma/n_cidades
    return media
}

main()