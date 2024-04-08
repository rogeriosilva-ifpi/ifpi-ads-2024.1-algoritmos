import { question } from "readline-sync"

function main(){

let total_arroz = 0 
let total_feijao = 0
let total_leiteliquido = 0

let valor_total = 0
while(true){

    const menu = (`
           >>> MENU <<<
    ----------------------------
    1- Arroz(5kg)        --> $27,50
    2- Feijao(1kg)       --> $7,99
    3- Leite Liquido(1L) --> $4,69
    ----------------------------
    Valor Total:   $${valor_total}
    ----- Forma de pagamento ----
    1 - Parcelamento
    2 - a vista
    `)
    console.log(menu)

    let incluir_item = Number(question(`Inclua o item que deseja(Digite (4) para saida) -->`))

    if(incluir_item === 4){

        break;

    }else{

        if(incluir_item === 1 ){

            total_arroz += 27.50
        }

        if(incluir_item === 2 ){

            total_feijao += 7.99
        }

        if(incluir_item === 3 ){

            total_leiteliquido += 4.69
        }

        valor_total = total_arroz + total_feijao + total_leiteliquido
        
    }
    
}

}

main()