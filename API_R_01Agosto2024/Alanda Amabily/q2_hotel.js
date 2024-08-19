import { question } from "readline-sync";

function main(){
    var pessoa = Number(question('idade: '))

    let qtd_pessoas_quarto = 0;


    while(pessoa != 0){
        qtd_pessoas_quarto += 1; 
        pessoa = Number(question('idade: '))
    }

    const noites_reserva = Number(question('reserva para quantas noites: '))
    const diaria = preco_diaria(qtd_pessoas_quarto)
    const valor_total_reserva = preco_diaria * noites_reserva
    const valor_total_dia = noites_reserva 
    const tipo_quarto = tipo_quarto(qtd_pessoas_quarto)
    const desconto_pix = (5/100)  * valor_total_reserva
    const valor_desconto_pix = valor_total_reserva - desconto_pix


    console.log(`--------------
        tipo de quarto: ${tipo_quarto}
        valor total por dia: ${preco_diaria} reais
        valor total da reserva: ${valor_total_reserva} reais
        pagamento pix: ${valor_desconto_pix} reais
        pagamento credito: 
        -------------------------
        `)
    pessoa = Number(question('idade: '))
    
}
function preco_diaria(qtd_pessoas){
    if (qtd_pessoas === 1){//
        return 200;
    }else if (qtd_pessoas === 2){
        return 280;
    }else if(qtd_pessoas === 3){
        return 360;
    }else if(qtd_pessoas === 4){
        return 440;
    }
}
function tipo_quarto(qtd_pessoas){
    if (qtd_pessoas === 1){//
        return simples;
    }else if (qtd_pessoas === 2){
        return duplo;
    }else if(qtd_pessoas === 3){
        return triplo;
    }else if(qtd_pessoas === 4){
        return quadruplo;
    }
}
main()