import {get_number_min, limpar_tela, mostre} from '../questoes/util.js'

function main(){

    //Estado inicial

    let idade = get_number_min('Digite a idade do primeiro hóspede:  ',0)
    let numero_hopedes_pquarto = 1
    let quantidade_simples = 0
    let quantidade_duplos = 0
    let quantidade_triplos = 0
    let quantidade_quadruplos = 0

    while(idade != 0){
        while(idade!=0 && numero_hopedes_pquarto < 4){
            if(idade >= 18 && idade <= 100){
                idade = get_number_min('Digite a idade do próximo hóspede ou "0" para pular para outro quarto antes do limite:  ',0)

                if(idade!=0){
                   numero_hopedes_pquarto ++
                }
            }else{
                idade = get_number_min('Idade inadequada para o ambiente. Digite a idade do próximo hospede:  ',0)
            }
        }

        //Contagem de quartos de cada tipo
        if(numero_hopedes_pquarto == 1){
            quantidade_simples ++
        }
        
        if(numero_hopedes_pquarto == 2){
            quantidade_duplos ++
        }

        if(numero_hopedes_pquarto == 3){
            quantidade_triplos ++
        }

        if(numero_hopedes_pquarto == 4){
            quantidade_quadruplos ++
        }


        idade = get_number_min('Idade do hóspede do próximo quarto ou "0" para encerrar a reserva: ',0)
        numero_hopedes_pquarto = 1
    }

    const total_apagar = calcular_valor_total(quantidade_simples,quantidade_duplos,quantidade_triplos,quantidade_quadruplos)
    const valor_pix = calcular_valor_comdesconto(total_apagar)
    const valor_comjuros = calcular_valor_comjuros(total_apagar)

    limpar_tela()
    
    // Saída
    mostre(`
        ___________________________________________________________________
        Valor total a pagar: R$ ${total_apagar.toFixed(2)}
        ___________________________________________________________________
        Valor a pagar no pix (5% de desconto): R$ ${valor_pix.toFixed(2)}
        OU até 3x no cartão SEM JUROS,
        OU até 12x com juros fixo simples de 10,5% : R$ ${valor_comjuros.toFixed(2)}
        ____________________________________________________________________`)
}

function calcular_valor_total(simples, duplos, triplos, quadrupulos){
    let total = 200*simples + duplos*(200+80) + triplos*(200 + (80*2)) + quadrupulos*(200 + (80*3))
    return total
}

function calcular_valor_comdesconto(total){
    total = total - (total * 0.05)
    return total
}

function calcular_valor_comjuros(total){
    total = total + (total * 0.105)
    return total
}
main()